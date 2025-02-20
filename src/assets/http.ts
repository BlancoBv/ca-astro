import { keepPreviousData, useMutation, useQuery } from "@tanstack/vue-query";
import Axios from "./Axios";
import { toast, type Id } from "vue3-toastify";

export function useGetData(url: string, queryKey: string) {
  const { isPending, isFetching, isError, data, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const response = await Axios.get(url);
        return response.data;
      } catch (error) {
        return Promise.reject({ error });
      }
    },
    staleTime: 60 * 5 * 1000,
    retry: 1,
    placeholderData: keepPreviousData,
  });

  return {
    data,
    isError,
    isPending: isFetching || isPending,
    refetch,
  } as const;
}

export function useSendData(
  url: string,
  method: "put" | "post" | "delete",
  config?: {
    onSuccess?: (data?: any) => void;
    onToastClose?: () => void;
    toastMsg?: string;
    sendAsFormData?: boolean;
  }
) {
  let id: Id;

  const { isError, isPending, isSuccess, mutate, mutateAsync, error } =
    useMutation({
      mutationFn: async (data: any) => {
        try {
          const response = await Axios[method](
            url,
            method === "delete" ? { data } : data,
            config?.sendAsFormData
              ? { headers: { "Content-Type": "multipart/form-data" } }
              : undefined
          );
          return response.data.response ?? response;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      },
      onMutate: () => {
        id = toast.loading("Enviando...");
      },
      onSuccess: async (data) => {
        toast.update(id, {
          render: config?.toastMsg ?? "Enviado correctamente",
          type: "success",
          isLoading: false,
          autoClose: 800,
          closeOnClick: true,
          onClose: () => {
            config?.onToastClose?.();
          },
        });
        if (config) {
          config.onSuccess?.(data);
        }
      },
      onError: async (data: {
        code: string;
        data?: {
          msg: string;
          error?: {
            issues: { message: string; path: string[]; code: string }[];
            errors: { message: string }[];
          };
        };
      }) => {
        let errorMsg = "Error al enviar.";

        if (data.code === "ERR_NETWORK") {
          errorMsg = "Sin conexión, intentalo de nuevo.";
        }
        if (data?.data?.error?.issues) {
          const formatter = new Intl.ListFormat("es", {
            style: "long",
            type: "conjunction",
          });
          errorMsg = formatter.format(
            data.data.error.issues.map?.((el) => el.message)
          );
        }
        if (data?.data?.error?.errors) {
          const formatter = new Intl.ListFormat("es", {
            style: "long",
            type: "conjunction",
          });
          errorMsg = formatter.format(
            data.data.error.errors.map?.((el) => el.message)
          );
        }
        toast.update(id, {
          render: errorMsg,
          type: "error",
          isLoading: false,
          autoClose: 1000,
          closeOnClick: true,
        });
      },
      onSettled: () => {
        toast.done(id);
      },
    });
  return { isError, mutate, mutateAsync, isPending, isSuccess, error } as const;
}

import {
  keepPreviousData,
  useMutation,
  useQuery,
  type QueryObserverResult,
  type RefetchOptions,
} from "@tanstack/vue-query";
import Axios from "./Axios";
import { toast, type Id } from "vue3-toastify";
import { type Ref } from "vue";

interface getData {
  data: any | { response: any[] | any };
  isError: Ref<true, true> | Ref<false, false>;
  isPending: Ref<true, true> | Ref<false, false>;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
}

interface ErrorInterface extends Error {
  response?: { data?: string };
}

export function useGetData(url: string, queryKey: string): getData {
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
    isPending: isPending || isFetching,
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

  const { isError, isPending, isSuccess, mutate, mutateAsync } = useMutation({
    mutationFn: async (data: any) => {
      const respose = await Axios[method](
        url,
        method === "delete" ? { data } : data,
        config?.sendAsFormData
          ? { headers: { "Content-Type": "multipart/form-data" } }
          : undefined
      );
      if (respose.status === 400) {
        return Promise.reject(respose.data);
      }
      return respose.data;
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
      response?: {
        data?: { msg: string; error?: { issues: { message: string }[] } };
      };
    }) => {
      console.log({ data });

      let errorMsg = "Error al enviar.";
      if (data.response?.data?.error) {
        const formatter = new Intl.ListFormat("es", {
          style: "long",
          type: "conjunction",
        });
        errorMsg = formatter.format(
          data.response.data.error.issues.map?.((el) => el.message)
        );
      }
      toast.update(id, {
        render: errorMsg,
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
    },
    onSettled: () => {
      toast.done(id);
    },
  });
  return { isError, mutate, mutateAsync, isPending, isSuccess } as const;
}

import { useQuery, keepPreviousData, useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const Axios = axios.create({
  baseURL: `${"https://computodistribuido.org" }/api/`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
});

function useGetData(url, queryKey) {
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
    staleTime: 60 * 5 * 1e3,
    retry: 1,
    placeholderData: keepPreviousData
  });
  return {
    data,
    isError,
    isPending: isFetching || isPending,
    refetch
  };
}
function useSendData(url, method, config) {
  let id;
  const { isError, isPending, isSuccess, mutate, mutateAsync, error } = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await Axios[method](
          url,
          method === "delete" ? { data } : data,
          config?.sendAsFormData ? { headers: { "Content-Type": "multipart/form-data" } } : void 0
        );
        return response.data.response ?? response;
      } catch (error2) {
        return Promise.reject(error2.response);
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
        }
      });
      if (config) {
        config.onSuccess?.(data);
      }
    },
    onError: async (data) => {
      let errorMsg = "Error al enviar.";
      if (data.code === "ERR_NETWORK") {
        errorMsg = "Sin conexión, intentalo de nuevo.";
      }
      if (data?.data?.error?.issues) {
        const formatter = new Intl.ListFormat("es", {
          style: "long",
          type: "conjunction"
        });
        errorMsg = formatter.format(
          data.data.error.issues.map?.((el) => el.message)
        );
      }
      if (data?.data?.error?.errors) {
        const formatter = new Intl.ListFormat("es", {
          style: "long",
          type: "conjunction"
        });
        errorMsg = formatter.format(
          data.data.error.errors.map?.((el) => el.message)
        );
      }
      toast.update(id, {
        render: errorMsg,
        type: "error",
        isLoading: false,
        autoClose: 1e3,
        closeOnClick: true
      });
    },
    onSettled: () => {
      toast.done(id);
    }
  });
  return { isError, mutate, mutateAsync, isPending, isSuccess, error };
}

export { useGetData as a, useSendData as u };

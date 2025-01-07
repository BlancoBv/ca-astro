import { useQuery, keepPreviousData, useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue';

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
    isPending: isPending || isFetching,
    refetch
  };
}
function useSendData(url, method, config) {
  let id;
  const { isError, isPending, isSuccess, mutate, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const respose = await Axios[method](
        url,
        method === "delete" ? { data } : data,
        config?.sendAsFormData ? { headers: { "Content-Type": "multipart/form-data" } } : void 0
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
        }
      });
      if (config) {
        config.onSuccess?.(data);
      }
    },
    onError: async (data) => {
      toast.update(id, {
        render: data.response?.data?.msg ?? "Error al enviar ",
        type: "error",
        isLoading: false,
        autoClose: 800,
        closeOnClick: true
      });
    },
    onSettled: () => {
      toast.done(id);
    }
  });
  return { isError, mutate, mutateAsync, isPending, isSuccess };
}

export { useGetData as a, useSendData as u };

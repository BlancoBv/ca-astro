import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, p as renderScript } from './astro/server_DqkNLIlm.mjs';
/* empty css                           */
import { useQuery, keepPreviousData, useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue';

const $$Astro = createAstro("https://computodistribuido.org");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/blanco/Documentos/ca-astro/node_modules/.pnpm/astro@5.0.3_@types+node@22.5.5_jiti@1.21.6_rollup@4.28.1_typescript@5.6.2_yaml@2.5.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/blanco/Documentos/ca-astro/node_modules/.pnpm/astro@5.0.3_@types+node@22.5.5_jiti@1.21.6_rollup@4.28.1_typescript@5.6.2_yaml@2.5.1/node_modules/astro/components/ClientRouter.astro", void 0);

const Axios = axios.create({
  baseURL: `${"https://computodistribuido.org" }/api/`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
  /* validateStatus: (status: number) => {
      console.log(status);
  
      if (status === 401 || status === 403) {
        localStorage.removeItem("credentials");
        localStorage.removeItem("token");
        window.location.href = "/";
        return false;
      }
      return true;
    }, */
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
      const respose = await Axios[method](url, data);
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
        render: data.response?.data ?? "Error al enviar ",
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

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

export { $$ClientRouter as $, _export_sfc as _, useGetData as a, useSendData as u };

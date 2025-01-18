import { VueQueryPlugin } from '@tanstack/vue-query';
import Vue3Toastify, { toast } from 'vue3-toastify';
import PrimeVue from '@primevue/core/config';
import { defineComponent, h, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

const vUppercase = {
  mounted(el) {
    el.value = el.value.toUpperCase();
    el.dispatchEvent(new Event("input"));
  },
  updated(el) {
    el.value = el.value.toUpperCase();
    el.dispatchEvent(new Event("input"));
  }
};

const _app = (app) => {
  app.use(VueQueryPlugin);
  app.use(Vue3Toastify, {
    autoClose: 800,
    position: toast.POSITION.TOP_RIGHT
  });
  app.use(PrimeVue, {
    locale: {
      startsWith: "Empieza con",
      contains: "Contiene",
      notContains: "No contiene",
      endsWith: "Termina con",
      equals: "Igual a",
      notEquals: "Diferente de",
      noFilter: "Sin filtro",
      lt: "Menor que",
      lte: "Menor o igual a",
      gt: "Mayor que",
      gte: "Mayor o igual a",
      dateIs: "La fecha es",
      dateIsNot: "La fecha no es",
      dateBefore: "La fecha es antes de",
      dateAfter: "La fecha es después de",
      clear: "Limpiar",
      apply: "Aplicar",
      matchAll: "Coincide con todos",
      matchAny: "Coincide con alguno",
      addRule: "Agregar regla",
      removeRule: "Eliminar regla",
      accept: "Sí",
      reject: "No",
      choose: "Elegir",
      upload: "Subir",
      cancel: "Cancelar",
      completed: "Completado",
      pending: "Pendiente",
      fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      dayNames: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
      ],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
      monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      monthNamesShort: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ],
      chooseYear: "Elegir año",
      chooseMonth: "Elegir mes",
      chooseDate: "Elegir fecha",
      prevDecade: "Década anterior",
      nextDecade: "Década siguiente",
      prevYear: "Año anterior",
      nextYear: "Año siguiente",
      prevMonth: "Mes anterior",
      nextMonth: "Mes siguiente",
      prevHour: "Hora anterior",
      nextHour: "Hora siguiente",
      prevMinute: "Minuto anterior",
      nextMinute: "Minuto siguiente",
      prevSecond: "Segundo anterior",
      nextSecond: "Segundo siguiente",
      am: "a. m.",
      pm: "p. m.",
      today: "Hoy",
      weekHeader: "Sem",
      firstDayOfWeek: 0,
      showMonthAfterYear: false,
      dateFormat: "dd/mm/yy",
      weak: "Débil",
      medium: "Medio",
      strong: "Fuerte",
      passwordPrompt: "Ingrese una contraseña",
      searchMessage: "{0} resultados disponibles",
      selectionMessage: "{0} elementos seleccionados",
      emptySelectionMessage: "No hay elementos seleccionados",
      emptySearchMessage: "No se encontraron resultados",
      fileChosenMessage: "{0} archivos",
      noFileChosenMessage: "No se eligió ningún archivo",
      emptyMessage: "No hay opciones disponibles",
      aria: {
        trueLabel: "Verdadero",
        falseLabel: "Falso",
        nullLabel: "No seleccionado",
        star: "1 estrella",
        stars: "{star} estrellas",
        selectAll: "Todos los elementos seleccionados",
        unselectAll: "Todos los elementos deseleccionados",
        close: "Cerrar",
        previous: "Anterior",
        next: "Siguiente",
        navigation: "Navegación",
        scrollTop: "Ir al inicio",
        moveTop: "Mover al principio",
        moveUp: "Mover hacia arriba",
        moveDown: "Mover hacia abajo",
        moveBottom: "Mover al final",
        moveToTarget: "Mover al destino",
        moveToSource: "Mover al origen",
        moveAllToTarget: "Mover todo al destino",
        moveAllToSource: "Mover todo al origen",
        pageLabel: "Página {page}",
        firstPageLabel: "Primera página",
        lastPageLabel: "Última página",
        nextPageLabel: "Página siguiente",
        prevPageLabel: "Página anterior",
        rowsPerPageLabel: "Filas por página",
        jumpToPageDropdownLabel: "Ir a página desde lista",
        jumpToPageInputLabel: "Ir a página desde entrada",
        selectRow: "Fila seleccionada",
        unselectRow: "Fila deseleccionada",
        expandRow: "Fila expandida",
        collapseRow: "Fila colapsada",
        showFilterMenu: "Mostrar menú de filtros",
        hideFilterMenu: "Ocultar menú de filtros",
        filterOperator: "Operador del filtro",
        filterConstraint: "Restricción del filtro",
        editRow: "Editar fila",
        saveEdit: "Guardar edición",
        cancelEdit: "Cancelar edición",
        listView: "Vista de lista",
        gridView: "Vista de cuadrícula",
        slide: "Diapositiva",
        slideNumber: "Diapositiva {slideNumber}",
        zoomImage: "Ampliar imagen",
        zoomIn: "Ampliar",
        zoomOut: "Reducir",
        rotateRight: "Girar a la derecha",
        rotateLeft: "Girar a la izquierda"
      }
    },
    unstyled: true,
    pt: {
      datatable: {
        root: "not-prose relative",
        table: "table table-zebra"
      },
      paginator: {
        root: "py-4",
        content: "flex justify-center items-center gap-4 flex-wrap",
        pages: "flex gap-4",
        first: "btn btn-sm",
        prev: "btn btn-sm",
        next: "btn btn-sm",
        last: "btn btn-sm",
        page: "btn btn-sm data-[p-active=true]:btn-secondary"
      },
      select: {
        root: "input input-bordered flex gap-2 items-center justify-center w-fit",
        overlay: "menu bg-base-100 rounded-btn",
        label: "outline-none"
      },
      multiselect: {
        root: "input input-bordered w-full max-w-xs flex gap-2 items-center justify-center",
        overlay: "menu bg-base-100 rounded-btn shadow overflow-y-auto w-60 p-4",
        option: "flex items-center flex-row flex-nowrap",
        list: "pt-4",
        optionLabel: "",
        labelcontainer: "overflow-x-auto",
        label: "outline-none text-sm flex gap-4 items-center text-nowrap",
        header: "flex items-center gap-4",
        chipitem: "text-xs"
      },
      contextmenu: {
        root: "menu bg-base-100 shadow rounded-btn",
        itemlink: "flex gap-2"
      },
      textarea: {
        root: "textarea textarea-bordered"
      },
      checkbox: {
        root: "w-fit",
        input: "checkbox checkbox-primary checkbox-xs",
        box: "hidden"
      },
      inputtext: {
        root: "input input-bordered w-full max-w-xs"
      },
      iconfield: {
        root: "flex items-center gap-4"
      },
      chip: {
        root: "flex bg-base-200 gap-4 items-center p-1 rounded-btn"
      }
    },
    theme: {
      /*       preset: Aura, */
      options: {
        darkModeSelector: false
      }
    }
  });
  app.directive("uppercase", vUppercase);
};

const mod = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _app
}, Symbol.toStringTag, { value: 'Module' }));

const setup = async (app) => {
	if ('default' in mod) {
		await _app(app);
	}
};

const contexts = new WeakMap();

const ID_PREFIX = 'v';

function getContext(rendererContextResult) {
	if (contexts.has(rendererContextResult)) {
		return contexts.get(rendererContextResult);
	}
	const ctx = {
		currentIndex: 0,
		get id() {
			return ID_PREFIX + this.currentIndex.toString();
		},
	};
	contexts.set(rendererContextResult, ctx);
	return ctx;
}

function incrementId(rendererContextResult) {
	const ctx = getContext(rendererContextResult);
	const id = ctx.id;
	ctx.currentIndex++;
	return id;
}

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * This is the Vue + JSX equivalent of using `<div v-html="value" />`
 */
const StaticHtml = defineComponent({
	props: {
		value: String,
		name: String,
		hydrate: {
			type: Boolean,
			default: true,
		},
	},
	setup({ name, value, hydrate }) {
		if (!value) return () => null;
		let tagName = hydrate ? 'astro-slot' : 'astro-static-slot';
		return () => h(tagName, { name, innerHTML: value });
	},
});

function check(Component) {
	return !!Component['ssrRender'] || !!Component['__ssrInlineRender'];
}

async function renderToStaticMarkup(Component, inputProps, slotted, metadata) {
	let prefix;
	if (this && this.result) {
		prefix = incrementId(this.result);
	}
	const attrs = { prefix };

	const slots = {};
	const props = { ...inputProps };
	delete props.slot;
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			h(StaticHtml, {
				value,
				name: key === 'default' ? undefined : key,
				// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
				hydrate: metadata.astroStaticSlot ? !!metadata.hydrate : true,
			});
	}
	const app = createSSRApp({ render: () => h(Component, props, slots) });
	app.config.idPrefix = prefix;
	await setup(app);
	const html = await renderToString(app);
	return { html, attrs };
}

const _renderer0 = {
	name: '@astrojs/vue',
	check,
	renderToStaticMarkup,
	supportsAstroStaticSlot: true,
};

const renderers = [Object.assign({"name":"@astrojs/vue","clientEntrypoint":"@astrojs/vue/client.js","serverEntrypoint":"@astrojs/vue/server.js"}, { ssr: _renderer0 }),];

export { renderers };

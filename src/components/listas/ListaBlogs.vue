<script setup lang="ts">
import { useGetData, useSendData } from '@assets/http';
import DataTable, { type DataTableCellEditCompleteEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import ContextMenu from 'primevue/contextmenu';
import Textarea from 'primevue/textarea';
import moment from 'moment';
import { ref, useTemplateRef } from 'vue';
import { editorInstance } from '@components/editor/EditorInstance';
import Editor from '@components/editor/Editor.vue';
import ImageSelector from '@components/editor/ImageSelector.vue';

const props = defineProps<{ noEdit: boolean }>()

interface blog {
    idblog: number;
    titulo: string;
    fecha: string;
    contenido: string | null;
}

const modal = useTemplateRef("modal-edit-blog-content")
const contenido = ref<Partial<blog>>({ contenido: null })

const { data, isError, isPending, refetch } = useGetData("blogs", "listaBlogsData")
const cm = useTemplateRef("cm");
const selectedItem = ref<blog | null>(null);
const editor = editorInstance(contenido.value)

const items = [
    {
        label: 'Editar contenido', icon: 'bi bi-pencil-square', command() {
            editor.value?.commands.setContent(selectedItem.value?.contenido ?? "<p>Sin contenido</p>")
            modal.value?.showModal()
        }
    },
]
const updateBlog = useSendData("blogs", "put", {
    onSuccess() {
        modal.value?.close()
        refetch()
        if (contenido.value.contenido) {
            contenido.value = {}
        }
    },
})

const onRowContextMenu = (event: { originalEvent: Event }) => {
    cm.value?.show(event.originalEvent);
};

const handleEdit = (event: DataTableCellEditCompleteEvent) => {
    const { data, newValue, field } = event
    if (data[field] !== newValue) { updateBlog.mutate({ idblog: data.idblog, [field]: newValue }) }
}
const handleUpdateContent = () => {
    updateBlog.mutate({ idblog: selectedItem.value?.idblog, contenido: contenido.value.contenido })
}
const handleClose = () => {
    contenido.value.contenido = null
}

</script>
<template>
    <ImageSelector :editor-instance="editor" />
    <dialog ref="modal-edit-blog-content" class="modal modal-bottom sm:modal-middle" @close="handleClose">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    <i class="bi bi-x text-xl"></i>
                </button>
            </form>
            <h3 class="text-lg font-bold">{{ selectedItem?.titulo }}</h3>
            <form @submit.prevent="handleUpdateContent">
                <Editor :editor="editor" />
                <div class="w-full flex justify-end">
                    <button type="submit" class="btn btn-primary"
                        :disabled="contenido?.contenido === null || updateBlog.isPending.value">Actualizar</button>
                </div>
            </form>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
    <ContextMenu ref="cm" :model="items" />
    <DataTable v-if="!isError" :loading="isPending" :value="data?.response?.blogs ?? []" :paginator="true" :rows="5"
        :edit-mode="props.noEdit ? null : 'cell'" @cell-edit-complete="handleEdit" @row-contextmenu="onRowContextMenu"
        context-menu v-model:contextMenuSelection="selectedItem">
        <template #loading>
            <div
                class="absolute top-0 left-0 h-full w-full z-30 select-none skeleton bg-base-300/60 backdrop-blur-[0.5px] rounded-btn">
            </div>
        </template>

        <Column field="titulo" header="Titulo del blog">
            <template #editor="{ data, field }">
                <Textarea v-model="data[field]" />
            </template>
        </Column>
        <Column field="estatus" header="Estatus">
            <template #body="{ data, field }">{{
                (data[field] as string).toUpperCase()
                }}</template>
        </Column>
        <Column field="createdAt" header="Fecha de creación">
            <template #body="{ data, field }">{{
                moment(data[field]).locale("es-MX").format("L")
                }}</template>
        </Column>
        <template #empty>
            <div class="text-center font-bold">Sin datos.</div>
        </template>
    </DataTable>
</template>
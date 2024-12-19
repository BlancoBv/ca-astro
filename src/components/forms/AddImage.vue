<script setup lang="ts">
import { useGetData, useSendData } from '@assets/http';


const { refetch } = useGetData("imagenes", "imagesGalleryData")

const send = useSendData("imagenes", "post", {
    sendAsFormData: true, onSuccess() {
        const input = document.getElementById("input-add-image") as HTMLInputElement
        const modal = document.getElementById("modal-add-image") as HTMLDialogElement
        input.value = ""
        modal.close()
        refetch()
    }
})
const handleImage = (event: Event) => {
    const formData = new FormData
    const { files } = event.target as HTMLInputElement
    formData.append("imagen", files![0])
    send.mutate(formData)
}

</script>
<template>

    <dialog id="modal-add-image" class="modal">
        <div class="modal-box w-6/12 max-w-5xl h-5/6">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="text-lg font-bold">Añadir nueva imagen</h3>
            <form>
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Selecciona una imagen</span>
                    </div>
                    <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/*"
                        @input="handleImage" id="input-add-image" />

                </label>
            </form>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
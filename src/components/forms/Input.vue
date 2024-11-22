<script setup lang="ts">
const emit = defineEmits(["setValue"])
const props = defineProps<{ value: string, label: string }>()

const handleChange = (event: Event) => {
    const { value } = event.target as HTMLInputElement
    emit("setValue", value)
}
</script>
<template>
    <label class="form-control w-full max-w-xs">
        <div class="label">
            <span class="label-text">{{ props.label }}</span>
        </div>
        <input type="text" class="input input-bordered w-full max-w-xs" required @input="handleChange"
            :value="props.value">
    </label>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel"
import 'vue3-carousel/dist/carousel.css'

const props = defineProps<{ banners: { createdAt: string, url: string, descripcion: string, idbanner: string, imagen: string }[] }>()

const isMounted = ref<boolean>(false)

onMounted(() => {
    isMounted.value = true

})
onUnmounted(() => {
    isMounted.value = false
})


</script>
<template>
    <Carousel class="block" :class="{ 'cursor-wait select-none': !isMounted }" wrap-around :breakpoints="{
        300: {
            itemsToShow: 1.3,
            snapAlign: 'start',
        },
        // 500px and up
        640: {
            itemsToShow: 1.5,
            snapAlign: 'center',

        }
    }">

        <template #slides>
            <Slide class="w-full h-60 md:h-96 select-none" v-for="banner in props.banners" :key="banner.idbanner">
                <div class="h-full w-full relative flex items-end justify-end" :class="{ 'skeleton': !isMounted }">
                    <img class="w-full h-full object-cover -z-10 absolute top-0 left-0 rounded-box" :src="banner.imagen"
                        width="50px" height="50px" :alt="banner.createdAt" loading="eager">

                    <div class="p-4 w-full lg:w-3/4">
                        <div class="card bg-base-100/70 backdrop-blur-sm shadow-xl w-full min-h-32"
                            v-if="banner.url || banner.descripcion">
                            <div class="card-body">
                                <p v-if="banner.descripcion">{{ banner.descripcion }}</p>
                                <div class="card-actions justify-end" v-if="banner.url">
                                    <a target="_blank" :href="banner.url" class="btn btn-primary btn-sm">
                                        Ver enlace adjunto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </template>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
    <!-- <div v-else class="h-60 md:h-[384px] w-full flex flex-col gap-4">
        <div class="skeleton w-full grow"></div>
    </div> -->
</template>
<style>
.carousel__slide {
    padding: 10px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    @apply w-12 md:w-20;
}

.carousel__icon {
    font-size: 72pt;
}

.carousel__pagination-button {
    @apply h-4 w-8;
    font-size: 72pt;
}

.carousel__pagination-button::after {
    @apply w-full h-full
}
</style>
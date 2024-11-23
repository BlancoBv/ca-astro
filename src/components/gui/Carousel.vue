<script setup lang="ts">
import { useGetData } from "@assets/http";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel"
import 'vue3-carousel/dist/carousel.css'

const { data, isPending, isError } = useGetData("banners?mostrar=true", "bannersData") 
</script>
<template>
    <Carousel v-if="!isPending && !isError" :items-to-show="1.5" class="block" :autoplay="2000" wrap-around
        pause-autoplay-on-hover>

        <template #slides>
            <Slide class="h-96 w-full" v-for="banner in data.response" :key="banner.idbanner">
                <div class="h-full w-full relative flex items-end justify-end">
                    <img class="w-full h-full object-cover -z-10 absolute top-0 left-0 rounded-box" :src="banner.imagen"
                        width="100px" height="100px">

                    <div class="p-4 w-full lg:w-3/4">
                        <div class="card bg-base-100/70 backdrop-blur-sm shadow-xl w-full min-h-32"
                            v-if="banner.url || banner.descripcion">
                            <div class="card-body">
                                <p v-if="banner.descripcion">{{ banner.descripcion }}</p>
                                <div class="card-actions justify-end" v-if="banner.url">
                                    <a target="_blank" :href="banner.url" class="btn btn-primary btn-sm">Ver enlace
                                        adjunto</a>
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
    <div v-else class="h-[406px] w-full flex flex-col gap-4">
        <div class="skeleton w-full grow"></div>
        <div class="flex h-2 gap-2 justify-center">
            <div class="skeleton h-full w-5"></div>
            <div class="skeleton h-full w-5"></div>
            <div class="skeleton h-full w-5"></div>
        </div>
    </div>
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

}
</style>
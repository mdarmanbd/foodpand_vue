<script setup>
import {ref} from 'vue'
import { onClickOutside } from '@vueuse/core'

const modal = ref(null);
const isModalOpen = ref(false);
const discountValue = ref('')

onClickOutside(modal, ()=>{ isModalOpen.value = false });

const isCardModalOpen = (value) => {
    isModalOpen.value = true;
    discountValue.value = value
}


</script>

<template>
     <div class="w-full border-b">
        <div class="w-[1250px] m-auto bg-white mt-2 mb-2">
            <div class="flex items-center ">
                <img class="w-32 " src="../images/pizza-logo.png">
                <div class="ml-2 ">
                    <h3 class="text-lg font-medium text-black pb-1">
                        Pizza Burg - Uttara
                    </h3>
                    <div class="flex space-x-3 pb-2">
                        <div class="flex items-center justify-center border border-gray-300 rounded-lg px-2 py-0.5 w-fit">
                            <img src="../svg/badge.svg">
                            <span class="text-sm font-medium text-gray-700 font-sans">Top resturent</span>
                        </div>
                        <div class="flex items-center">
                            <img src="../svg/cycle.svg">
                            <span class="text-sm font-medium text-gray-700 ml-1 font-sans">Free devlivery</span>
                        </div>
                        <div class="relative flex items-center justify-center w-fit ">
                            <span class="absolute inset-y-0 -left-[5px] flex items-center ">
                                <span class="inline-block w-1 h-1 bg-black rounded-full"></span>
                            </span>
                            <img src="../svg/miniBag.svg">
                            <span class=" text-sm font-medium text-gray-700 ml-1 font-sans">
                                Tk 50 Minimum
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <img src="../svg/star.svg">
                        <p class="ml-1 font-sans text-sm font-medium text-gray-700">
                            4.7/5(10000+)
                            <span class="text-colorBase text-sm font-sans font-medium ml-0.5">See review</span>
                        </p>
                        <div class="flex items-center ml-2">
                            <img src="../svg/info.svg">
                            <span class="text-colorBase text-sm font-sans font-medium ml-0.5">More info</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-5 w-[1250px] m-auto">
        <h3 class="text-gray-700 text-lg font-medium pb-2">
            Available deals
        </h3>
        <div class="grid grid-cols-4 gap-5">
            <div @click="isCardModalOpen(100)" class="border border-gray-400 px-3 py-2 rounded-lg hover:shadow-lg hover:border-pink-100 hover:bg-pink-100 duration-300 cursor-pointer transition-all">
                <div class="flex items-center">
                    <img src="../svg/listBook.svg">
                    <span class="text-base text-gray-700 font-medium ml-1 font-sans">
                        Tk 100 off
                    </span>
                </div>
                <small class="font-sans text-sm text-gray-700 font-medium">
                    Min order Tk 399. Valid for all items.
                    <br>
                    Use in cart.
                </small>
            </div>
            <div @click="isCardModalOpen(65)" class="border border-gray-400 px-3 py-2 rounded-lg hover:shadow-lg hover:border-pink-100 hover:bg-pink-100 duration-300 cursor-pointer transition-all">
                <div class="flex items-center">
                    <img src="../svg/listBook.svg">
                    <span class="text-base text-gray-700 font-medium ml-1 font-sans">
                        Tk 65 off
                    </span>
                </div>
                <small class="font-sans text-sm text-gray-700 font-medium">
                    Min order Tk 499. Valid for all items.
                    <br>
                    Use in cart.
                </small>
            </div>
            <div @click="isCardModalOpen(150)" class="border border-gray-400 px-3 py-2 rounded-lg hover:shadow-lg hover:border-pink-100 hover:bg-pink-100 duration-300 cursor-pointer transition-all">
                <div class="flex items-center">
                    <img src="../svg/listBook.svg">
                    <span class="text-base text-gray-700 font-medium ml-1 font-sans">
                        Tk 150 off
                    </span>
                </div>
                <small class="font-sans text-sm text-gray-700 font-medium">
                    Min order Tk 599. Valid for all items.
                    <br>
                    Use in cart. 
                </small>
            </div>
        </div>
        <Teleport to="body">
            <Transition name="modal">
                <div v-if="isModalOpen" class="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center">
                    <div class="modal m-auto" ref="modal">
                        <div @click="isModalOpen = false" class="flex justify-end cursor-pointer">
                            X
                        </div>
                        <div class="opacity-100 w-full block text-center text-black">
                            Amount of discount : {{ discountValue }}
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>

</template>

<style scoped>
    .modal-enter-active {
        transition: all 0.2s ease-out;
    }


    .modal-enter-from, .modal-leave-to {
        opacity: o;
        transform: scale(0.9);
    }

  .modal {
  position: fixed;
  z-index: 999;
  top: 30%;
  width: 300px;
  height: 200px;
  background: rgb(203, 244, 203);
}



</style>

<script setup>
import { ref, reactive } from 'vue';
import { onClickOutside } from '@vueuse/core';


const props = defineProps([
    'modalObject'
])

const modal = ref(null);
onClickOutside(modal, ()=>{ props.modalObject.isModalOpen = false });

</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="modalObject.isModalOpen" class="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center">
                <div class="modal m-auto" ref="modal">
                    <div @click=" modalObject.isModalOpen = false" class="flex justify-end cursor-pointer">
                        X
                    </div>
                    <div class="opacity-100 w-full block text-center text-black">
                        Amount of discount : {{ modalObject.discountValue }}
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
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
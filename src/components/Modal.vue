<script setup>
import { ref, reactive } from 'vue';
import { onClickOutside } from '@vueuse/core';


const props = defineProps([
    'modalObject'
])

const isConditionOpen = ref(false);

const modal = ref(null);
onClickOutside(modal, ()=>{ props.modalObject.isModalOpen = false });


const discountPrice = () => {
    let percentage = props.modalObject.discountPercentage;
    let previousPrice = props.modalObject.price;
    let discountAmout = previousPrice * (percentage / 100);
    return ( Math.round(previousPrice - discountAmout) );
}


const isOpenTermsAndCondition = () => {
    console.log('Terms $ condition')
}

</script>

<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="modalObject.isModalOpen" class="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div class="modal m-auto shadow-md" ref="modal">
                    <div class="flex justify-between">
                        <h3 class="text-lg font-medium text-gray-700">Offers details</h3>
                       <img @click=" modalObject.isModalOpen = false" class="border rounded-full bg-white p-1 hover:bg-pink-50 cursor-pointer" src="../svg/cross.svg">
                    </div>
                    <div class="opacity-100 w-full">
                        <div class="flex py-3 items-center">
                            <img class="w-5" src="../svg/listBook.svg">
                            <h3 class="ml-1 text-lg font-semibold text-gray-700 font-sans">
                                {{ modalObject.discountPercentage }}% Off
                            </h3>
                        </div>
                        <p class="text-base text-gray-600 font-normal pb-2">
                            New and existing customers vaild for all items.
                        </p>
                        <p class="text-base font-sans text-gray-600 font-normal pb-2">
                            Valid from jun 8, 2024 - jul 7, 2024
                        </p>
                        <p class="text-base font-sans text-gray-600 font-normal ">
                            Min. order Tk {{ modalObject.price }}. Discount capped at TK {{ discountPrice() }}
                        </p>
                        <small class="text-colorBase text-sm font-medium block">
                            Use voucher in cart
                        </small>
                        <div @click="isConditionOpen = !isConditionOpen" class="cursor-pointer flex items-center mt-2 mb-3 hover:bg-pink-100 w-fit py-1 px-2 rounded-md">
                            <p class="text-base text-colorBase font-medium">
                                Terms & Conditions
                            </p>
                            <img v-if="!isConditionOpen" class="w-5 p-0.5 bg-white border rounded-full hover:bg-pink-50 ml-1" src="../svg/downArrow.svg">
                            <img v-if="isConditionOpen" class="w-5 p-0.5 bg-white border rounded-full hover:bg-pink-50 ml-1" src="../svg/upArrow.svg">
                        </div>
                        <transition name="termsAndCondition">
                            <ul v-if = 'isConditionOpen' class="p-2.5 space-y-1 w-fit bg-pink-50 rounded [&>li]:text-base [&>li]:font-normal [&>li]:text-gray-700">
                                <li>
                                    <a href="#">
                                        Condition number one
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Condition number one
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Condition number one
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Condition number one
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Condition number one
                                    </a>
                                </li>
                            </ul>
                        </transition>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>

.termsAndCondition-enter-active,
.termsAndCondition-leave-active {
    transition: all 0.4s ease;
}


.termsAndCondition-enter-from,
.termsAndCondition-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.modal-enter-active {
    transition: all 0.2s ease-out;
}

.modal-enter-from, .modal-leave-to {
    opacity: o;
    transform: scale(0.9);
}

.modal {
    position: fixed;
    /* z-index: 999; */
    top: 30%;
    width: 550px;
    height: 350px;
    padding: 10px 15px;
    overflow: auto;
    background: white;
    border-radius: 10px;
}

</style>
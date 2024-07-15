<script setup>
import { ref, watchEffect, watch } from 'vue';


const parseMenuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
const menuItems = ref(parseMenuItems);

const incrimentItem = (item) => {
   const incriment =  ++item.quantity;
    item.quantity = incriment;
    saveItemsInLocalStorage();
}

const decrimentItem = (item) => {
    const decriment = --item.quantity;
    item.quantity = decriment;
    saveItemsInLocalStorage();
}

const saveItemsInLocalStorage = () => {
    localStorage.setItem(('menuItems'), JSON.stringify(menuItems.value));
};

watch(() => {
    saveItemsInLocalStorage();
    
});

</script>


<template>
    <section v-if="!menuItems.length" class="border border-gray-200 rounded sticky top-32 z-0">
        <div class="w-full h-[400px] overflow-y-auto">
            <div class="flex mt-5 mx-5">
                <button class="w-full border border-gray-200 bg-white rounded text-pink-500 text-base font-medium py-4 text-center">
                    Delivery
                </button>
                <button class="w-full bg-gray-50 rounded text-gray-700 text-base font-medium py-4 text-center">
                    Pick-up
                </button>
            </div>
            <div class="grid place-items-center w-full h-full">
                <img class="w-32 h-32" src="../images/menuCart-logo.png">
            </div>
        </div>
        <div class="py-2 px-5 border-t shadow-lg">
           <div class="flex justify-between ">
                <p class="text-base font-semibold text-gray-800">
                    Total
                    <span class="text-sm font-normal">
                        (Incl.VAT)
                    </span>
                </p>
                <p class="text-base font-sans font-medium text-gray-800">
                   TK 0
                </p>
           </div>
           <button class="w-full py-2 mt-2 text-center bg-gray-300 text-white rounded text-base font-normal">
                Review payment and address
           </button>
        </div>
    </section>

    <section v-if="menuItems.length" class="border border-gray-200 rounded sticky top-32 z-0">
        <div class="w-full h-[400px] overflow-y-auto">
            <div class="flex mt-5 mx-5">
                <button class="w-full border border-gray-200 bg-white rounded text-pink-500 text-base font-medium py-4 text-center">
                    Delivery 12
                </button>
                <button class="w-full bg-gray-50 rounded text-gray-700 text-base font-medium py-4 text-center">
                    Pick-up
                </button>
            </div>

            <div v-for="item in menuItems" :key="item.id" class="">
                <div class="flex justify-between">
                    <img class="w-10 h-10" :src="item.image">
                    <p>
                        {{ item.name }}
                    </p>
                    <div class="">
                        <button @click="incrimentItem(item)" class="bg-green-300 w-5">
                            +
                        </button>

                        <button @click="decrimentItem(item)" class="bg-red-300 w-5">
                            -
                        </button>
                    </div>
                    <p>
                        {{ item.quantity }}
                    </p>
                </div>
            </div>
        </div>
        <div class="py-2 px-5 border-t shadow-lg">
           <div class="flex justify-between ">
                <p class="text-base font-semibold text-gray-800">
                    Total
                    <span class="text-sm font-normal">
                        (Incl.VAT)
                    </span>
                </p>
                <p class="text-base font-sans font-medium text-gray-800">
                   TK 0
                </p>
           </div>
           <button class="w-full py-2 mt-2 text-center bg-gray-300 text-white rounded text-base font-normal">
                Review payment and address
           </button>
        </div>
    </section>
</template>


<style>

</style>
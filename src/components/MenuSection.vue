<script setup>
import { reactive, ref, watch, onMounted, onUnmounted  } from 'vue';
import MenuCart from './MenuCart.vue';
import axios from 'axios';

const italianItems = ref([]);
const asianItems = ref([]);
const americanItems = ref([]);
const thaiItems = ref([]);

const parseMenuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
const menuItems = ref(parseMenuItems);

const italianMenus = () => {
    axios.get('https://dummyjson.com/recipes?limit=5&select=name,caloriesPerServing,instructions,image')
    .then (response => {
        italianItems.value = response.data.recipes
    })
};

const asianMenus = () => {
    axios.get('https://dummyjson.com/recipes?limit=4&skip=5&select=name,caloriesPerServing,instructions,image')
    .then(response => {
        asianItems.value = response.data.recipes
    })
};

const americanMenus = () => {
    axios.get('https://dummyjson.com/recipes?limit=6&skip=9&select=name,caloriesPerServing,instructions,image')
    .then(response => {
        americanItems.value = response.data.recipes
    })
};

const thaiMenus = () => {
    axios.get('https://dummyjson.com/recipes?limit=8&skip=10&select=name,caloriesPerServing,instructions,image')
    .then(response => {
        thaiItems.value = response.data.recipes
    })
};

italianMenus();
asianMenus();
americanMenus();
thaiMenus();

const selectItems = (foodItem) => {
    const index = menuItems.value.findIndex( item => item.id == foodItem.id )
    if( index !== -1 ){
        menuItems.value[index].quantity++;
    }else{
        menuItems.value.push( {
                ...foodItem,
                quantity : 1,
                showDeletBtn : true
            }
        )
    }
    saveItemsInLocalStorage();
};

const saveItemsInLocalStorage = () => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems.value));
};

const updatedMenuItems = (updatedMenu) => {
    menuItems.value = updatedMenu;
    saveItemsInLocalStorage();
}

</script>

<template>
    <section class="w-full bg-white mt-10">
        <div class="w-[1250px] m-auto ">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-8 mb-5">
                    <div class="">
                        <h3 class="text-gray-800 text-lg font-semibold pb-3">
                            Italian
                            <small class="text-gray-600 text-sm font-normal block">
                                Most order right now.
                            </small>
                        </h3>
                        <div class="grid grid-cols-12 gap-3 ">
                            <div v-for="italianItem in italianItems" :key="italianItem.id" class="col-span-6 cursor-pointer hover:bg-pink-100 duration-200 hover:shadow p-3 border border-gray-200 rounded">
                                <div @click="selectItems(italianItem)" class="grid grid-cols-12">
                                    <div class="col-span-9">
                                        <h3 class="text-gray-800 text-base font-medium">
                                            {{ italianItem.name }}
                                        </h3>
                                        <p class="text-gray-700 text-sm font-medium pb-2 font-sans">
                                           price : {{ italianItem.caloriesPerServing }}
                                        </p>
                                       
                                        <p class="text-gray-600 text-sm font-normal pr-1 pb-1">
                                            {{ italianItem.instructions[1] }}
                                        </p>
                                    </div>
                                    <div class="col-span-3 relative">
                                        <img :src="italianItem.image" class="w-24 h-24 ml-auto">
                                        <div class="absolute w-6 h-6 bottom-2 right-2 cursor-pointer bg-white hover:bg-pink-50 duration-75 rounded-full">
                                            <img src="../svg/plus.svg" class="grid place-items-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <h3 class="text-gray-800 text-lg font-semibold pb-3">
                            Asian
                        </h3>
                        <div class="grid grid-cols-12 gap-3 ">
                            <div v-for="asianItem in asianItems" :key="asianItem.id" class="col-span-6 cursor-pointer hover:bg-pink-100 duration-200 hover:shadow p-3 border border-gray-200 rounded">
                                <div @click="selectItems(asianItem)" class="grid grid-cols-12 ">
                                    <div class="col-span-9">
                                        <h3 class="text-gray-800 text-base font-medium">
                                            {{ asianItem.name }}
                                        </h3>
                                        <p class="text-gray-700 text-sm font-medium pb-2 font-sans">
                                           price : {{ asianItem.caloriesPerServing }}
                                        </p>
                                       
                                        <p class="text-gray-600 text-sm font-normal pr-1 pb-1">
                                            {{ asianItem.instructions[1] }}
                                        </p>
                                    </div>
                                    <div class="col-span-3 relative">
                                        <img :src="asianItem.image" class="w-24 h-24 ml-auto">
                                        <div class="absolute w-6 h-6 bottom-2 right-2 cursor-pointer bg-white hover:bg-pink-50 duration-75 rounded-full">
                                            <img src="../svg/plus.svg" class="grid place-items-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <h3 class="text-gray-800 text-lg font-semibold pb-3">
                            American
                        </h3>
                        <div class="grid grid-cols-12 gap-3 ">
                            <div v-for="americanItem in americanItems" :key="americanItem.id" class="col-span-6 cursor-pointer hover:bg-pink-100 duration-200 hover:shadow p-3 border border-gray-200 rounded">
                                <div @click="selectItems(americanItem)" class="grid grid-cols-12 ">
                                    <div class="col-span-9">
                                        <h3 class="text-gray-800 text-base font-medium">
                                            {{ americanItem.name }}
                                        </h3>
                                        <p class="text-gray-700 text-sm font-medium pb-2 font-sans">
                                           price : {{ americanItem.caloriesPerServing }}
                                        </p>
                                       
                                        <p class="two-line text-gray-600 text-sm font-normal pr-1 pb-1">
                                            {{ americanItem.instructions[4] }}
                                        </p>
                                    </div>
                                    <div class="col-span-3 relative">
                                        <img :src="americanItem.image" class="w-24 h-24 ml-auto">
                                        <div class="absolute w-6 h-6 bottom-2 right-2 cursor-pointer bg-white hover:bg-pink-50 duration-75 rounded-full">
                                            <img src="../svg/plus.svg" class="grid place-items-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5">
                        <h3 class="text-gray-800 text-lg font-semibold pb-3">
                            Mexican 
                        </h3>
                        <div class="grid grid-cols-12 gap-3 ">
                            <div v-for="thaiItem in thaiItems" :key="thaiItem.id" class="col-span-6 cursor-pointer hover:bg-pink-100 duration-200 hover:shadow p-3 border border-gray-200 rounded">
                                <div @click="selectItems(thaiItem)" class="grid grid-cols-12 ">
                                    <div class="col-span-9">
                                        <h3 class="text-gray-800 text-base font-medium">
                                            {{ thaiItem.name }}
                                        </h3>
                                        <p class="text-gray-700 text-sm font-medium pb-2 font-sans">
                                           price : {{ thaiItem.caloriesPerServing }}
                                        </p>
                                       
                                        <p class="two-line text-gray-600 text-sm font-normal pr-1 pb-1">
                                            {{ thaiItem.instructions[4] }}
                                        </p>
                                    </div>
                                    <div class="col-span-3 relative">
                                        <img :src="thaiItem.image" class="w-24 h-24 ml-auto">
                                        <div class="absolute w-6 h-6 bottom-2 right-2 cursor-pointer bg-white hover:bg-pink-50 duration-75 rounded-full">
                                            <img src="../svg/plus.svg" class="grid place-items-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-span-4 ">
                    <MenuCart :menuItems = 'menuItems' @updatedItem = 'updatedMenuItems' />
                </div>
            </div>
            
        </div>
    </section>
</template>


<style>




</style>
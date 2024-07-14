<script setup>
import { reactive, ref } from 'vue';
import MenuCart from './MenuCart.vue';
import axios from 'axios';


const italianItems = ref([]);
const asianItems = ref([]);
const americanItems = ref([]);
const Items = ref([]);

// const cuisineItems = ref([]);
// const uniqueCuisines = ref([]);
// const cuisineSet = new Set();

// axios.get('https://dummyjson.com/recipes?limit=10')
// .then(response => {
//     cuisineItems.value = response.data.recipes

//     for (let i = 0; i < cuisineItems.value.length; i++) {
//         const cuisine = cuisineItems.value[i].cuisine;
//         if (!cuisineSet.has(cuisine)) {
//             cuisineSet.add(cuisine);
//             uniqueCuisines.value.push(cuisine);
//         }
//     }
// })

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

italianMenus();
asianMenus();
americanMenus();


const selectItalianItems = (italianItem) => {
    const index = Items.value.findIndex( items => items.id == italianItem.id )
    if( index !== -1 ){
        Items.value[index].quantity++;
    }else{
        Items.value.push( {
                ...italianItem,
                quantity : 1
            }
        )
    }
    saveItemsInLocalstroage();
};

const selectAsianItems = (italianItem) => {
    const index = Items.value.findIndex( items => items.id == italianItem.id )
    if( index !== -1 ){
        Items.value[index].quantity++;
    }else{
        Items.value.push( {
                ...italianItem,
                quantity : 1
            }
        )
    }
    saveItemsInLocalstroage();
};

const selectAmericanItems = (italianItem) => {
    const index = Items.value.findIndex( items => items.id == italianItem.id )
    if( index !== -1 ){
        Items.value[index].quantity++;
    }else{
        Items.value.push( {
                ...italianItem,
                quantity : 1
            }
        )
    }
    saveItemsInLocalstroage();
};


const saveItemsInLocalstroage = () => {
    localStorage.setItem('Items', JSON.stringify(Items.value));
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
                                <div @click="selectItalianItems(italianItem)" class="grid grid-cols-12">
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
                                <div @click="selectAsianItems(asianItem)" class="grid grid-cols-12 ">
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
                                <div @click="selectAmericanItems(americanItem)" class="grid grid-cols-12 ">
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
                </div>
                <div class="col-span-4 ">
                    <MenuCart/>
                </div>
            </div>
            
        </div>
    </section>
</template>


<style>

.two-line{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}


</style>
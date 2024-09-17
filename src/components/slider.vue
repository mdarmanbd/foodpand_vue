<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';


const italianItems = ref([]);
const currentIndex = ref(0);

const props = defineProps([
    'menuItems'
])

const menuItems = props.menuItems;

const emit = defineEmits(['updatedSlideItems'])

// Fetch the data
const italianMenus = () => {
    axios.get('https://dummyjson.com/recipes?limit=5&select=name,caloriesPerServing,instructions,image')
    .then(response => {
        italianItems.value = response.data.recipes;
    });
};

italianMenus();

const sliderItems = computed(() => {
   return italianItems.value.slice(currentIndex.value, currentIndex.value + 3);
   
})
const previousItem = () => {
    if(currentIndex.value > 0){
        currentIndex.value--;
    }
}
const nextItem = () => {
    if (currentIndex.value < italianItems.value.length - 3) {
         currentIndex.value++;
     }
}

const selectSliderItem = (italianItem) => {
    const index = menuItems.findIndex( item => item.id === italianItem.id )
    if(index !== -1 ){
        menuItems[index].quantity++;
        emit('updatedSlideItems', menuItems)

    }else{
        menuItems.push({
            ...italianItem,
            quantity : 1,
            showDeletBtn : true
        })
        emit('updatedSlideItems', menuItems)
    }
}

</script>


<template>
  <div class="bg-gray-100  w-full">
    <div class="flex items-center px-3 py-4">
        <div class="w-10/12">
            <h2 class="text-black font-semibold text-lg">
                Popular with your order
            </h2>
            <p class="text-gray-600 font-base text-base">
                Based on what other customers bought together
            </p>
        </div>
        <div class="flex items-center justify-center space-x-1">
            <div @click="previousItem()" class="cursor-pointer w-8 h-8 border border-gray-600 rounded-full grid place-items-center">
                <img class="w-5" src="../svg/previous.svg">
            </div>
            <div @click="nextItem()" class="cursor-pointer w-8 h-8 border border-gray-600 rounded-full grid place-items-center">
                <img class="w-5 " src="../svg/next.svg">
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-1 mt-4">
        <div class="pb-4 px-3" v-for="italianItem in sliderItems" :key="italianItem.id">
            <div @click="selectSliderItem(italianItem)" class="relative cursor-pointer">
                <img :src="italianItem.image" class="w-24 h-24 rounded-lg">
                <div class="absolute w-6 h-6 bottom-2 right-8 bg-white hover:bg-pink-50 duration-75 rounded-full">
                    <img src="../svg/plus.svg" class="grid place-items-center">
                </div>
            </div>
            
            <span class="block text-gray-500 py-1.5 text-sm font-medium font-sans">
                TK : {{ italianItem.caloriesPerServing }}
            </span>
            <span class="block text-xs text-gray-500 font-normal leading-tight">
                {{ italianItem.name }}
            </span>
        </div>
    </div>
    <div class="bg-gray-50 pt-3">
        <ul class="border-b border-pink-300 pb-4">
            <li class="text-gray-600 text-base font-normal flex justify-between items-center pb-1.5 px-3">
                <p>Subtotal</p>
                <p class="font-sans">Tk 00</p>
            </li>
            <li class="text-gray-600 text-base font-normal flex justify-between items-center pb-1.5 px-3">
                <p>Standard delivery 
                    <span class="block text-gray-500 text-sm">
                        Welcome gift: free delivery
                    </span>
                </p>
                <p class="text-pink-500">Free</p>
            </li>
            <li class="text-gray-600 text-base font-normal flex justify-between items-center pb-1.5 px-3">
                <p>Service fee</p>
                <p class="font-sans">Tk 01</p>
            </li>
            <li class="text-gray-600 text-base font-normal flex justify-between items-center pb-1.5 px-3">
                <p>Container charges</p>
                <p class="font-sans">Tk 50</p>
            </li>
            <li class="text-gray-600 text-base font-normal flex justify-between items-center pb-1.5 px-3">
                <p>Vat</p>
                <p class="font-sans">Tk 87</p>
            </li>
        </ul>
        <div class="py-4 px-3 border-b border-pink-300">
            <div class="flex items-start space-x-3">
                <img class="w-6" src="../svg/kitchen.svg">
                <p class="text-gray-600 text-base font-normal w-[55%]">
                    Cutlery
                    <span class="block text-gray-400 text-sm">
                        If available, your order will come with cutlery
                    </span>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<style>

</style>
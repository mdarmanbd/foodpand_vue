<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';


const italianItems = ref([]);
const currentIndex = ref(0);

// const props = defineProps([
//     'menuItems'
// ])

// const menuItems = props.menuItems;

const parseMenuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
const menuItems = ref(parseMenuItems);

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

    const index = menuItems.value.findIndex( item => item.id === italianItem.id )
    // console.log(italianItem.id);
    // console.log(index);
    if(index !== -1){
        console.log("item don't have");
    }else{
        console.log("Item have");
    }
    

}

</script>


<template>
  <div class="bg-gray-100 px-3 py-4 w-full">
    <div class="flex items-center">
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
        <div class="py-4" v-for="italianItem in sliderItems" :key="italianItem.id">
            <div @click="selectSliderItem(italianItem)" class="relative cursor-pointer">
                <img :src="italianItem.image" class="w-24 h-24 rounded-lg">
                <div class="absolute w-6 h-6 bottom-2 right-8 bg-white hover:bg-pink-50 duration-75 rounded-full">
                    <img src="../svg/plus.svg" class="grid place-items-center">
                </div>
            </div>
            
            <span class="block text-gray-500 py-1.5 text-sm font-medium">
                TK : {{ italianItem.caloriesPerServing }}
            </span>
            <span class="block text-xs text-gray-500 font-normal leading-tight">
                {{ italianItem.name }}
            </span>
        </div>
    </div>
  </div>
</template>

<style>

</style>
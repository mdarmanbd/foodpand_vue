<script setup>
// import { ref } from 'vue';
// import axios from 'axios';

// const italianItems = ref([]);
// const italianMenus = () => {
//     axios.get('https://dummyjson.com/recipes?limit=5&select=name,caloriesPerServing,instructions,image')
//     .then (response => {
//         italianItems.value = response.data.recipes
//     })
// };

// italianMenus();


import { ref, computed } from 'vue';
import axios from 'axios';

const italianItems = ref([]);
const currentIndex = ref(0);

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
    <div class="grid grid-cols-3 gap-3 mt-4">
        <div v-for="italianItem in sliderItems" :key="italianItem.id">
            <img :src="italianItem.image" class="w-24 h-24 ">
        </div>
    </div>
  </div>
</template>




<style>

</style>
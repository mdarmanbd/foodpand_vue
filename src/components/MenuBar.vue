
<script setup>
import { ref } from 'vue';
import axios from 'axios';


const menuItemNames = ref([]);
const uniqueCuisines = ref([]);
const cuisineCounts = ref({});


axios.get('https://dummyjson.com/recipes?limit=30&select=cuisine')
.then(response => {
    const cuisineList = response.data.recipes.map(recipe => recipe.cuisine)
    const cuisineCount = [];

    for(let i = 0; i < cuisineList.length; i++) {
      const cuisine = cuisineList[i];
      if(cuisineCount[cuisine]){
        cuisineCount[cuisine]++;
      }else{
        cuisineCount[cuisine] = 1;
      }
    }
    uniqueCuisines.value = Object.keys(cuisineCount);
    cuisineCounts.value = cuisineCount
    
});

const scrollableList = ref(null);

const scrollLeft = () => {
  if (scrollableList.value) {
    scrollableList.value.scrollLeft -= 100;
    // console.log(scrollableList.value.scrollLeft)
  }
};

const scrollRight = () => {
  if (scrollableList.value) {
    scrollableList.value.scrollLeft += 100; 
    // console.log(scrollableList.value.scrollLeft)
  }
};



</script>

<template>
  <section class="w-full bg-white py-3 shadow-lg">
    <div class="w-[1250px] m-auto ">
        <div class="flex items-center space-x-5 overflow-x-hidden">
            <input type="text" class="w-64 bg-gray-100 rounded-xl py-1.5 px-3 focus:outline-none text-base text-gray-700" placeholder="search in menu">
            <div class="flex items-center space-x-5 overflow-x-hidden overflow-y-hidden relative">
              <button @click="scrollLeft" class="absolute left-0 z-1 bg-pink-100 w-6 rounded-full gird place-items-center">
                &lt;
              </button>
              <ul class="flex space-x-3 overflow-x-auto no-scrollbar px-5" ref="scrollableList">
                <li v-for="cuisine in uniqueCuisines" :key="cuisine" class="min-w-fit text-base font-normal text-gray-700">
                  {{ cuisine }} ({{ cuisineCounts[cuisine] }})
                </li>
              </ul>
              <button @click="scrollRight" class="absolute right-0 z-1 bg-pink-100 rounded-full w-6 grid place-items-center">
                &gt;
              </button>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

</style>





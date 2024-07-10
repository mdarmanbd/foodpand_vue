<script setup>
import { ref } from 'vue';
import axios from 'axios';

const menuItemNames = ref('');

axios.get('https://dummyjson.com/recipes')
.then(respon => {
    menuItemNames.value = respon.data.recipes
    console.log( menuItemNames.value)
})



</script>


<template>
  <section class="w-full bg-white py-3 shadow-lg">
    <div class="w-[1250px] m-auto ">
        <div class="flex items-center space-x-5 overflow-x-hidden">
            <input type="text" class="w-64  bg-gray-100 rounded-xl py-1.5 px-3 focus:outline-none text-base text-gray-700" placeholder="search in menu">
            <div v-for=" itemName in menuItemNames " :key="itemName.id" class="">
                <ul>
                    <li>
                        {{ itemName.cuisine }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>


<style scoped>

</style>
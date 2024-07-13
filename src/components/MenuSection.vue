<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const items = ref([]);
const uniqueItems = ref([]);

axios.get('https://dummyjson.com/recipes?limit=10')
.then(response => {
    items.value = response.data.recipes
    console.log(items.value)

    for(let i = 0 ; i < items.value.length; i++ ){
        if(items.value[i].cuisine == uniqueItems[i].cuisine ){
            uniqueItems[i].cuisine 
        }else{
            uniqueItems[i] = items.value[i].cuisine
        }
    }
})

console.log(uniqueItems.value)

</script>


<template>
    <section class="w-full bg-white mt-10">
        <div class="w-[1250px] m-auto ">
            <div class="grid grid-cols-12">
                <div class="col-span-8 bg-pink-300">
                    <h3>
                        Hello world 
                    </h3>
                </div>
                <div class="col-span-4 bg-pink-100">
                    <h3>
                        Hello world 2
                    </h3>
                </div>
            </div>
            
        </div>
    </section>
</template>


<style>

</style>
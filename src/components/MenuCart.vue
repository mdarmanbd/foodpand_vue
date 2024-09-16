<script setup>
import slider from './slider.vue';

const props = defineProps([
    'menuItems'
])


const emit = defineEmits(['updatedItem'])

const incrimentItem = (item) => {
    item.quantity++;
    item.showDeletBtn = false;
   emit('updatedItem', props.menuItems);
}

const decrimentItem = (item) => {
    item.quantity--;
    if(item.quantity < 2){
        item.showDeletBtn = true;
    }
    else{
        item.showDeletBtn = false;
    }
    emit('updatedItem', props.menuItems);   
}

const perItemPrice = (item) => {
    let itemPrice = item.caloriesPerServing * item.quantity;
    return(itemPrice)
}

const deletItem = (item) => {
    let menuItems = props.menuItems;
    const index = menuItems.indexOf(item);
    menuItems.splice(index, 1);
    emit('updatedItem', props.menuItems); 
}

const totalPrice = ()=>{
    let total = 0;
    let menuItems = props.menuItems;
    for(let item of menuItems){
        total = total + (item.caloriesPerServing * item.quantity);
    }
    return(total);
}

</script>

<template>
    <section class="border border-gray-200 rounded sticky top-32 z-0">
        <div class="w-full h-[400px] overflow-y-auto">
            <div class="flex mt-5 mx-5">
                <button class="w-full border border-gray-200 bg-white rounded text-pink-500 text-base font-medium py-4 text-center">
                    Delivery
                </button>
                <button class="w-full bg-gray-50 rounded text-gray-700 text-base font-medium py-4 text-center">
                    Pick-up
                </button>
            </div>
            <div v-if="!menuItems.length" class="grid place-items-center w-full h-full">
                <img class="w-32 h-32" src="../images/menuCart-logo.png">
            </div>
            <h5 v-if="menuItems.length" class="text-lg font-medium text-black pt-5 pb-3 pl-5">
                Your items
            </h5>
            <div v-for="item in menuItems" :key="item.id" class="px-5">
                <div class="flex justify-between items-center border-b pb-5 pt-5">
                    <div class="flex">
                        <img class="w-14 h-14 rounded-lg" :src="item.image">
                        <div class="flex flex-col pl-3">
                            <p class="text-pink-500 text-sm font-normal pb-3">
                                {{ item.name }} 
                            </p>
                            <p class="text-base font-mono font-medium text-gray-600">
                              {{ perItemPrice(item) }}
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center border border-pink-400 rounded-2xl px-3 w-24">
                        <button v-if="!item.showDeletBtn" @click="decrimentItem(item)" class="text-pink-600 text-xl font-bold ">
                            -
                        </button>
                        <button v-if="item.showDeletBtn" @click="deletItem(item)" class="text-pink-600 text-xl font-bold ">
                            <img src="../svg/delet.svg" alt="delet.svg">
                        </button>
                        <p class="text-base text-gray-600 font-medium">
                            {{ item.quantity }}
                        </p> 
                        <button @click="incrimentItem(item)" class="text-pink-600 text-xl font-bold ">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--- slider start --->
        <div class="w-full">
            <slider :menuItems = 'props.menuItems' />
        </div>
        <!--- slider end --->
        <div class="py-2 px-5 border-t shadow-lg">
           <div class="flex justify-between ">
                <p class="text-base font-semibold text-gray-800">
                    Total
                    <span class="text-sm font-normal">
                        (Incl.VAT)
                    </span>
                </p>
                <p class="text-base font-sans font-medium text-gray-800">
                   TK : {{ totalPrice() }} 
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
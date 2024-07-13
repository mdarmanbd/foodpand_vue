<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Dummy data similar to what you're working with
const array01 = [
  { id: 1, cuisine: 'Italian' },
  { id: 2, cuisine: 'Asian' },
  { id: 3, cuisine: 'American' },
  { id: 4, cuisine: 'Italian' },
  { id: 5, cuisine: 'Mexican' },
  { id: 6, cuisine: 'Mediterranean' },
  { id: 7, cuisine: 'Italian' },
  { id: 8, cuisine: 'Asian' },
  { id: 9, cuisine: 'Italian' },
  { id: 10, cuisine: 'Italian' }
];

const array02 = [
  "Italian", "Asian", "American", "Italian", "Mexican", "Mediterranean", "Italian", "Asian", "Italian", "Italian"
];

const uniqueCuisines = ref([]);
const cuisineCounts = ref({});

// Process the arrays
const processArrays = () => {
  const cuisineMap = new Map();

  array02.forEach(cuisine => {
    if (cuisineMap.has(cuisine)) {
      cuisineMap.set(cuisine, cuisineMap.get(cuisine) + 1);
    } else {
      cuisineMap.set(cuisine, 1);
    }
  });

  uniqueCuisines.value = Array.from(cuisineMap.keys());
  cuisineCounts.value = Object.fromEntries(cuisineMap);

  console.log(uniqueCuisines.value); // Logs unique cuisines
  console.log(cuisineCounts.value);  // Logs counts of each cuisine
};

// Call the function to process arrays
processArrays();

</script>

<template>
  <div>
    <h1>Unique Cuisines</h1>
    <ul>
      <li v-for="cuisine in uniqueCuisines" :key="cuisine">
        {{ cuisine }} (Count: {{ cuisineCounts[cuisine] }})
      </li>
    </ul>
  </div>
</template>

<script setup>
// https://pokeapi.co/api/v2/pokemon?limit=151
import BaseButton from "./base-button.vue";
import { computed, defineProps, defineEmits, ref, reactive, onBeforeUnmount } from "vue";

const emits = defineEmits(["change-region"]);

const props = defineProps({
  region: {
    type: String,
    default: "Kantossss",
  },
});

const regionName = ref("Kanto");

const state = reactive({
  elementType: "lightining",
});

const elementTypeAllCaps = computed(() => {
  return state.elementType.toUpperCase() + props.region;
});

const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(
  (response) => response.json()
);

const changeRegionName = function () {
  return (regionName.value = "Hoenn");
};


onBeforeUnmount(()=> {
  console.log('To this thing')
})
</script>

<template>
  <h2>{{ regionName }}</h2>
  <BaseButton>Baaaaza</BaseButton>
  <h3>{{ elementTypeAllCaps }}</h3>
  <h4>{{ regionNameLowerCase }}</h4>
  <button @click="changeRegionName">Change region name</button>
  <pre>{{ pokedex }}</pre>
</template>

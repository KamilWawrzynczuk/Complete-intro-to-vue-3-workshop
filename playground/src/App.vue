<script setup>
// https://pokeapi.co/api/v2/pokemon?limit=151
import BaseCounter from "./components/base-counter.vue";
import UserCard from "./components/user-card.vue";
import { ref } from "vue";

const colorPreference = ref("black");
</script>

<template>
  <div class="wrapper">
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference" />
    <BaseCounter />
    <UserCard :user="{ name: 'kamil', food: 'Pizza' }" />
  </div>
</template>

<style>
html {
  background-color: papayawhip;
}

.wrapper {
  background-color: v-bind(colorPreference);
}

.button {
  border: 10px solid red;
  font-size: 25px;
}
</style>

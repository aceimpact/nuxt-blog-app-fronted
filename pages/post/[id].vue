<template>
  <v-container>
    <div>タイトル： {{ post.title }}</div>
    <div>本文： {{ post.content }}</div>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const route = useRoute();
const { id } = route.params;

const {
  data: post,
  error,
  refresh,
} = await useAsyncData(`post-${id}`, () => $fetch("http://localhost:1337/posts/" + id));
</script>

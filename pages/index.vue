<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id">
        <v-card>
          <NuxtLink :to="`/post/${post.id}`">
            <v-img :src="`http://localhost:1337${post.cover[0].url}`" height="200px"></v-img>
            <v-card-title>
              {{ post.title }}
            </v-card-title>

            <v-card-text>
              {{ post.content }}
            </v-card-text>
          </NuxtLink>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const url = "http://localhost:1337/posts";

const { data: posts, error, refresh } = await useAsyncData("getBlogData", () => $fetch("http://localhost:1337/posts"));

if (error.value) {
  console.error(error.value);
}

console.log(posts.value);
</script>

<style lang="scss" scoped>
a {
  color: #000;
  text-decoration: none;
}
</style>

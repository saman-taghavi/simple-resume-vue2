<template>
  <v-card flat color="transparent">
    <v-card-title class="font-weight-black" primary-title>
      {{ title }}
    </v-card-title>
    <v-card-text class="text-justify">
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "shortInfo",
  props: {
    title: {
      type: String,
      default: "No title",
    },
  },
};
</script>

<style></style>

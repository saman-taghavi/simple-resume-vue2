<template>
  <v-app>
    <v-main>
      <first-resume />
    </v-main>
  </v-app>
</template>
<script>
import firstResume from "@/components/firstResume.vue";
export default {
  name: "home",
  components: {
    firstResume,
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <v-card CL color="blue" flat>
        <v-card-title class="d-flex justify-center px-0" primary-title>
          <v-avatar class="rounded-circle" color="grey" size="164" tile>
            <v-img
              src="https://avatars.githubusercontent.com/u/66922536"
            ></v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text class="text-center mx-auto">
          <h4 class="text-h4 white--text">{{ name }}</h4>
          <h5 class="mt-5 text-subtitle-2">
            {{ shortInfo }}
          </h5>
        </v-card-text>
      </v-card>

      <v-container fluid> </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      name: "saman taghavi",
      shortInfo: "I love football, tech and fantasy novels",
    };
  },
};
</script>

<style></style>

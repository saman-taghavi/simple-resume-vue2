<template>
  <v-card flat color="transparent">
    <v-card-title class="font-weight-black" primary-title>
      {{ skillSetName }}
      {{ $vuetify.breakpoint.name }}
    </v-card-title>
    <v-card-text class="text-justify">
      <v-row dense justify-md="start" align="center">
        <v-col
          cols="6"
          sm="3"
          class="d-flex justify-center"
          v-for="skill in skillSet"
          :key="skill.name"
        >
          <v-progress-circular
            :rotate="-90"
            :size="100"
            :width="7"
            :value="skill.proficency"
            color="primary"
          >
            <div class="ma-5 text-center">{{ skill.name }}</div>
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "skills",
  props: {
    skillSet: {
      type: Array,
      default: () => [{ name: "default", proficency: 100 }],
    },
    skillSetName: {
      type: String,
      default: "skill Set Name",
    },
  },
};
</script>

<style></style>

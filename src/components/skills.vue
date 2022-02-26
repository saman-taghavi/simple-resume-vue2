<template>
  <v-card flat color="transparent">
    <v-card-title class="font-weight-black" primary-title>
      {{ skillSetName }}
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
            :width="3"
            :value="skill.proficency"
            :color="getColor(skill)"
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
  mounted() {
    let colors = [
      "warning",
      "success",
      "accent",
      "error",
      "secondary",
      "primary",
    ];
    this.skillSet.map((item) => {
      let percent = item.proficency;
      let intervalTime = 400;
      if (percent > 40) {
        intervalTime = 80;
      }
      item.proficency = 0;
      let newYearCountdown = setInterval(function () {
        item.proficency++;
        if (item.proficency % 10 === 0) {
          item.color = colors[Math.floor(Math.random() * colors.length)];
        }

        if (percent <= item.proficency) {
          clearInterval(newYearCountdown);
        }
      }, intervalTime);
    });
  },
  methods: {
    getColor(item) {
      if (item?.color) {
        return item.color;
      }
      return "primary";
    },
  },
};
</script>

<style></style>

<template>
  <v-card flat color="transparent">
    <v-card-title class="font-weight-black" :class="titleClass" primary-title>
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
            :color="progressColor"
            :class="skillClass"
            class=""
            :style="progressUnderlayStyle"
          >
            <div
              class="ma-5 text-center"
              :style="skillTextClassStyle"
              :class="skillTextClass"
            >
              {{ skill.name }}
            </div>
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
    progressColor: {
      type: String,
      default: "primary",
    },
    progressUnderlayStyle: {
      type: Object,
      default: () => {
        return {
          "--underlay-stroke": "transparent",
        };
      },
    },
    titleClass: {
      type: String,
      default: "",
    },
    skillClass: {
      type: String,
      default: "",
    },
    skillTextClass: {
      /*
      set skill text class
      */
      type: String,
      default: "",
    },
    skillTextClassStyle: {
      /*
      set skill text class
      */
      type: String,
      default: "",
    },
  },
  mounted() {
    this.skillSet.map((item) => {
      let percent = item.proficency;
      let intervalTime = 400;
      if (percent > 40) {
        intervalTime = 80;
      }
      item.proficency = 0;
      let newYearCountdown = setInterval(function () {
        item.proficency++;

        if (percent <= item.proficency) {
          clearInterval(newYearCountdown);
        }
      }, intervalTime);
    });
  },
  methods: {},
};
</script>

<style scoped>
::v-deep .v-progress-circular__underlay {
  stroke: var(--underlay-stroke);
}
</style>

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

      <v-container fluid>
        <v-row>
          <v-col md="6" cols="12">
            <v-card flat color="transparent">
              <v-card-title class="font-weight-black" primary-title>
                {{ about.me }}
              </v-card-title>
              <v-card-text class="text-justify">
                {{ about.text }}
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="6" cols="12">
            <v-card flat color="transparent">
              <v-card-title class="font-weight-black" primary-title>
                skills
              </v-card-title>
              <v-card-text class="text-justify">
                <v-row dense>
                  <v-col
                    cols="3"
                    class="py-2"
                    v-for="skill in skills"
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
          </v-col>
        </v-row>
      </v-container>
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
      about: {
        me: "About me",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae leo consequat, sollicitudin lacus vitae, bibendum sapien. Praesent quis enim non tortor ultricies varius. Fusce vitae scelerisque tellus, a tincidunt diam. Nam nec vestibulum nibh, sit amet egestas nisi. Quisque faucibus, urna et elementum accumsan, massa augue gravida tortor, vel vestibulum lorem neque at sapien. Duis lobortis vitae ante a tristique. Aenean ac quam quis lacus finibus aliquam. Nulla id purus est. Proin quis lacus fringilla, cursus purus suscipit, dignissim mauris. Mauris viverra pulvinar gravida.",
      },
      skills: [
        { name: "python", proficency: 45 },
        { name: "javaScript", proficency: 80 },
        { name: "numpy", proficency: 10 },
        { name: "pandas", proficency: 20 },
        { name: "vue", proficency: 40 },
        { name: "vuetify", proficency: 70 },
      ],
    };
  },
};
</script>

<style></style>

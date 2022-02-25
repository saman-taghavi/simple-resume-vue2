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
            <short-info :title="about.me">
              {{ about.text }}
            </short-info>
          </v-col>
          <v-col md="6" cols="12">
            <skills skillSetName="skills" :skillSet="skills"></skills>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" cols="12">
            <short-info title=" Work Experience">
              <div v-for="(work, index) in workExperience" :key="index">
                <p class="font-weight-black black-text ma-0 mt-3">
                  {{ work.place }}
                </p>
                <p class="ma-0">{{ work.position }}</p>
                <p class="ma-0">{{ work.duration }}</p>
              </div></short-info
            >
          </v-col>
          <v-col md="6" cols="12">
            <skills
              skillSetName="Language skills"
              :skillSet="languageSkills"
            ></skills>
          </v-col>
        </v-row>
        <v-row>
          
          <v-col md="6" cols="12">
            <short-info title="Education">
              <div v-for="(edu, index) in educationHistory" :key="index">
                <p class="font-weight-black black-text ma-0 mt-3">
                  {{ edu.place }}
                </p>
                <p class="ma-0">{{ edu.degree }},{{ edu.field }}</p>
                <p class="ma-0">{{ edu.duration }}</p>
              </div>
            </short-info>
          </v-col>
          <v-col md="6" cols="12">
            <short-info title="Achivments">
              <div v-for="(achive, index) in Achivments" :key="index">
                <p class="font-weight-black black-text ma-0 mt-3">
                  {{ achive.title }}
                </p>
                <p class="ma-0">{{ achive.info }}</p>
                <p class="ma-0">{{ achive.from }}</p>
              </div>
            </short-info>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="6">
            <short-info title="Contact Info">
              <p class="font-weight-black black-text ma-0">
                {{ contatctInfo.location }}
              </p>
              <p class="font-weight-black black-text ma-0">
                {{ contatctInfo.email }}
              </p>
              <v-btn
                text
                flat
                target="_blacn"
                :href="contatctInfo.websiteUrl"
                class="font-weight-black black-text ma-0"
              >
                <v-icon left> microsoft-github </v-icon>
                {{ contatctInfo.websiteName }}
              </v-btn>
            </short-info>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import skills from "@/components/skills.vue";
import shortInfo from "@/components/shortInfo.vue";
export default {
  name: "home",
  components: {
    skills,
    shortInfo,
  },
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
      workExperience: [
        {
          position: "Junior BPMS developer",
          place: "Pascal System Pooya",
          duration: "from Azar of 1398 to Day 1399",
        },
        {
          position: "Junior Front-End developer",
          place: "pelak 42",
          duration: "from khordad of 1400 to Aban 1400",
        },
      ],
      languageSkills: [
        { name: "Persian", proficency: 100 },
        { name: "English", proficency: 80 },
        { name: "Spanish", proficency: 10 },
      ],
      educationHistory: [
        {
          place: "Ferdowsi University of Mashhad",
          duration: "from 1394 to 1398",
          field: "English Language and Literature",
          degree: "B.A",
        },
        {
          place: "Isfahan University",
          duration: "Currently studying here",
          field: "Computational Linguistics",
          degree: "M.Sc",
        },
      ],
      Achivments: [
        { title: "The Best", info: "Honorary title", from: " from myself" },
      ],
      contatctInfo: {
        location: "Isfahan, Iran",
        email: "samantaghavisani@gmail.com",
        websiteUrl: "https://github.com/saman-taghavi",
        websiteName: "github page",
      },
    };
  },
};
</script>

<style></style>

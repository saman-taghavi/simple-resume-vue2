<template>
  <v-app>
    <v-main>
      <v-card color="blue" flat>
        <v-btn @click="changeLang" icon color="primary">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
        <v-card-title class="d-flex justify-center px-0" primary-title>
          <v-avatar class="rounded-circle" color="grey" size="164" tile>
            <v-img
              src="https://avatars.githubusercontent.com/u/66922536"
            ></v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text class="text-center mx-auto">
          <h4 class="text-h4 white--text">{{ myName }}</h4>
          <h5 class="mt-5 text-subtitle-2">
            {{ shortInfo }}
          </h5>
        </v-card-text>
      </v-card>

      <v-container fluid>
        <v-row>
          <v-col md="6" cols="12">
            <short-info :title="$t(about.me)">
              {{ $t(about.text) }}
            </short-info>
          </v-col>
          <v-col md="6" cols="12">
            <skills
              :skillSetName="$t('Skills')"
              :skillSet="translatedSkills"
            ></skills>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" cols="12">
            <short-info :title="$t('Work Experience')">
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
              :skillSetName="$t('Language skills')"
              :skillSet="translatedLanguageSkills"
            ></skills>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" cols="12">
            <short-info :title="$t('Education')">
              <div
                v-for="(edu, index) in translatedEducationHistory"
                :key="index"
              >
                <p class="font-weight-black black-text ma-0 mt-3">
                  {{ edu.place }}
                </p>
                <p class="ma-0">{{ edu.degree }},{{ edu.field }}</p>
                <p class="ma-0">{{ edu.duration }}</p>
              </div>
            </short-info>
          </v-col>
          <v-col md="6" cols="12">
            <short-info :title="$t('Achivments')">
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
            <short-info :title="$t('Contact Info')">
              <p class="font-weight-black black-text ma-0">
                {{ $t(contatctInfo.location) }}
              </p>
              <p class="font-weight-black black-text ma-0">
                {{ $t(contatctInfo.email) }}
              </p>
              <v-btn
                left
                text
                target="_blacn"
                :href="contatctInfo.websiteUrl"
                class="font-weight-black black-text text-caption"
              >
                <v-icon left large> mdi-github</v-icon>
                <p class="font-weight-black black-text ma-0">
                  {{ $t(contatctInfo.websiteName) }}
                </p>
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
      about: {
        me: "About me",
        text: "AboutText",
      },
      skills: [
        { name: "python", proficency: 45 },
        { name: "javaScript", proficency: 80 },
        { name: "numpy", proficency: 10 },
        { name: "pandas", proficency: 20 },
        { name: "vue", proficency: 40 },
        { name: "vuetify", proficency: 70 },
      ],

      languageSkills: [
        { name: "Persian", proficency: 100 },
        { name: "English", proficency: 80 },
        { name: "Spanish", proficency: 10 },
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
        websiteName: "my github page",
      },
    };
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "fa" : "en";
      this.$vuetify.rtl = this.$vuetify.rtl === true ? false : true;
    },
  },
  computed: {
    myName() {
      return this.$i18n.t("myName");
    },
    shortInfo() {
      return this.$i18n.t("shortInfo");
    },
    translatedSkills() {
      return this.skills.map((item) => ({
        name: this.$t(item.name),
        proficency: item.proficency,
      }));
    },
    translatedLanguageSkills() {
      return this.languageSkills.map((item) => ({
        name: this.$t(item.name),
        proficency: item.proficency,
      }));
    },
    translatedWorkExperience() {
      return this.workExperience.map((item) => ({
        duration: this.$t(item.duration),
        position: this.$t(item.position),
        place: this.$t(item.place),
      }));
    },
    translatedEducationHistory() {
      return this.educationHistory.map((item) => ({
        duration: this.$t(item.duration),
        place: this.$t(item.place),
        degree: this.$t(item.position),
        field: this.$t(item.field),
      }));
    },
    translatedAchivments() {
      return this.Achivments.map((item) => ({
        from: this.$t(item.from),
        info: this.$t(item.info),
        title: this.$t(item.title),
      }));
    },
  },
};
</script>

<style></style>
<i18n>
{
  "en": {
    "myName":"saman taghavi sani",
    "shortInfo": "I love football, tech and fantasy novels",
    "AboutText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae leo consequat, sollicitudin lacus vitae, bibendum sapien. Praesent quis enim non tortor ultricies varius. Fusce vitae scelerisque tellus, a tincidunt diam. Nam nec vestibulum nibh, sit amet egestas nisi. Quisque faucibus, urna et elementum accumsan, massa augue gravida tortor, vel vestibulum lorem neque at sapien. Duis lobortis vitae ante a tristique. Aenean ac quam quis lacus finibus aliquam. Nulla id purus est. Proin quis lacus fringilla, cursus purus suscipit, dignissim mauris. Mauris viverra pulvinar gravida."
  },
  "fa": {
    "myName":"سامان تقوی ثانی",
    "shortInfo": "دوست دار فوتبال ، تکنولوژی و رمان های پر از شمشیر و جادو",
    "About me":"درباره من",
    "AboutText":"یک متن طولانی درباره من",
    "Skills":"مهارت هام",
    "Language skills":"زبان هایی که یاد دارم",
    "Work Experience":"سوابق کاری",
    "Education":"تحصیلات",
    "Achivments":"افتخارات",
    "Contact Info":"راه های ارتباط با من",
    "Persian":"فارسی",
    "my github page":"صفحه گیت هاب من",
    "python":"پایتون"
  }
}

</i18n>

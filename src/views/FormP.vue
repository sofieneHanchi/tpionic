<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>Formulaire</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label>Civilité</ion-label>
        <ion-select v-model="civilite">
          <ion-select-option v-for="(cil, ind) in civT" :key="ind" :value="cil">{{ cil }}</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label>Nom : </ion-label>
        <ion-input v-model="nom" type="text" placeholder="Nom"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Prenom : </ion-label>
        <ion-input v-model="prenom" type="text" placeholder="Prenom"></ion-input>
      </ion-item>
      <ion-content>
        <ion-item>
          Specialité :

          <ion-radio-group value="specialite" v-model="specialite">
            <ion-item v-for="(spec, ind) in specialites" :key="ind" class="input_r">
              <ion-radio :value="spec"></ion-radio>
              <ion-label>{{ spec }}</ion-label>
            </ion-item>
          </ion-radio-group>
        </ion-item>

        <ion-item>
          Matieres :
          <ion-item v-for="(mat, ind) in matieres" :key="ind" class="input_r">
            <ion-checkbox @IonChange="Tmatiere.push($event.target.value)" :value="mat"></ion-checkbox>
            <ion-label>{{ mat }} </ion-label>
          </ion-item>
        </ion-item>
        <ion-item>
          <ion-button class="primary" router-direction="forward" @click="afficher()">Ajouter</ion-button>
        </ion-item>
      </ion-content>
    </ion-content>
  </ion-app>
</template>
<script>
import {
  IonApp,
  IonInput,
  IonSelect,
  IonCheckbox,
  IonSelectOption,
  IonRadio,
  IonRadioGroup,
  IonButton,
  IonLabel,
  IonItem,
  IonContent,
  IonHeader,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "formP",
  components: {
    IonApp,
    IonInput,
    IonSelect,
    IonCheckbox,
    IonRadio,
    IonSelectOption,
    IonRadioGroup,
    IonButton,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
  },
  data() {
    return {
      civT: [],
      nom: "",
      prenom: "",
      civilite: "",
      specialite: "",
      specialites: [],
      Tmatiere: [],
      matieres: [],
    };
  },
  props: {
    nom1: String,
  },
  methods: {
    afficher() {
      let Data = JSON.stringify({ civilite: this.civilite, nom: this.nom, prenom: this.prenom, specialite: this.specialite, matieres: this.Tmatiere });
      Data = JSON.parse(Data);
      this.axios.post("http://localhost:3000/visiteurs", Data)
      this.router.push({
        name: "affichage",

        params: {
          civilite: this.civilite,
          nom: this.nom,
          prenom: this.prenom,
          specialite: this.specialite,
          Tmatiere: this.Tmatiere,
        },
      });
    },
    fetchdata() {
      this.$http.get("http://localhost:3000/civilite").then((response) => {
        this.civT = response.data;
      });
      this.$http.get("http://localhost:3000/specialite").then((response) => {
        this.specialites = response.data;
      });
      this.$http.get("http://localhost:3000/matieres").then((response) => {
        this.matieres = response.data;
      });
    },
  },
  created() {
    this.fetchdata();
  },

  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>
<style>
ion-title {
  font-weight: bolder;
  color: white;
  text-align: center;
}

/* ion-item {
  margin-left: 550px !important;

  width: 500px;
} */
.input_r {
  display: inline-block;
}

ion-radio {
  margin: 5px;
}
</style>

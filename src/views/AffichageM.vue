<template>
  <ion-app>
    <ion-content>
      <ion-label>
        <ion-item v-if="prenom && nom && civilite">
          <h1>Bonjour</h1>
        </ion-item>
        <ion-item>
          <h1>{{ civilite }} {{ nom }} {{ prenom }} <br /></h1>
        </ion-item>
        <ion-item v-if="specialite">Votre specialité est : {{ specialite }}</ion-item>
        <ion-item v-if="Tmatiere.length > 0">Vos Matieres sont :
          <ion-text v-for="(mat, ind) in Tmatiere" :key="ind">
            {{ mat }},
          </ion-text>
          <br />
          <ion-item> </ion-item>
        </ion-item>
      </ion-label>
      <ion-text> </ion-text>
    </ion-content>
  </ion-app>
</template>

<script>
import { defineComponent } from "vue";
import { IonApp, IonText, IonContent, IonItem } from "@ionic/vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "affichageM",
  props: {
    nom: String,
    prenom: String,
    civilite: String,
    specialite: String,
    Tmatiere: Array,
  },
  components: {
    IonApp,
    IonText,
    IonItem,
    IonContent,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

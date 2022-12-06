<template>

    <ion-app>
        <ion-content class="ion-margin">
            <ion-grid class="ion-margin">
                <ion-row>
                    <ion-col>Nom</ion-col>
                    <ion-col>Specialité</ion-col>
                </ion-row>
                <ion-row v-for="(v, ind) in visiteurs" :key="ind" class="ion-activatable ripple-parent">
                    <ion-ripple-effect></ion-ripple-effect>
                    <ion-col>{{ v.nom }} {{ v.prenom }}</ion-col>
                    <ion-col>{{ v.specialite }} </ion-col>
                    <ion-row>

                        <ion-item button>
                            <ion-router-link :href="'/etudiants/' + v.id">

                                <p>Modifier</p>
                            </ion-router-link>

                        </ion-item>



                        <ion-item button @click="supprimerEtudiant(v.id)">
                            <p>Supprimer</p>
                        </ion-item>
                    </ion-row>
                </ion-row>

            </ion-grid>
            <ion-item>
            </ion-item>

        </ion-content>
    </ion-app>
</template>
<style>
.ripple-parent {
    position: relative;
    overflow: hidden;
}

ion-grid {
    --ion-grid-column-padding: 10px;
    border-collapse: collapse;
    border-style: hidden;
}

ion-row:first-child {
    background-color: #2dd36f;
    font-weight: bold;
}

ion-col {
    border: 1px solid black;
    border-bottom: 0;
    border-right: 0;
}

ion-col:last-child {
    border-right: 1px solid black;
}

ion-row:last-child {
    border-bottom: 1px solid black;
}
</style>
<script>
import { defineComponent } from "vue";
import { IonApp, IonText, IonContent, IonItem, IonRippleEffect } from "@ionic/vue";
import { useRouter } from "vue-router";
export default defineComponent({
    name: "EtudiantP",
    components: {
        IonRippleEffect,
        IonApp,
        IonItem,
        IonContent,
    }
    ,


    data() {
        return {
            visiteurs: []
        }

    },
    methods: {
        fetchdata() {
            this.$http.get("http://localhost:3000/visiteurs").then((response) => {
                this.visiteurs = response.data;
            });
            console.log(this.visiteurs)
        },
        supprimerEtudiant(id) {
            this.axios.delete(`http://localhost:3000/visiteurs/${id}`);

        },
        modifier(id) {
            this.router.push({
                name: "modifier",
                params: {
                    id: this.id
                },
            });
        }
    },
    created() {
        this.fetchdata();
    },
    setup() {
        const router = useRouter();
        return { router };
    }
});
</script>

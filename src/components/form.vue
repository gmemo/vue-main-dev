<template>
  <div class="pt-3">
    <v-row class=" d-flex justtify-center">
      <v-col cols="6 ">
        <v-text-field
          label="Name"
          outlined
          v-model="name"
          @keyup.enter="addUser"
        ></v-text-field>
      </v-col>
      <v-col cols="6 ">
        <v-text-field
          label="Email"
          outlined
          v-model="email"
          @keyup.enter="addUser"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
          <v-btn large color="primary" @click="addUser">Add</v-btn>
      </v-col>
    </v-row>
    <transition-group name="fade">
        <v-card class="mx-auto pa-3 ma-2 text-center" max-width="400" v-for="user in users" :key="user.id">
            <v-row>
                <v-col cols="8">
                    <v-list-item-title class="headline mb-1">
                        {{user.name}}
                    </v-list-item-title>
                </v-col>
                <v-col cols="4">
                    <v-btn icon color="red" @click="deleteUser(user.id)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </transition-group>
  </div>
</template>

<script>

import {db} from '../firebase/db'
export default {
    data() {
        return{
            name: '',
            email: ''
        }
    },
    methods: {
        async addUser () {
            if(this.name) {
                await db.collection("users").add({ name: this.name, email: this.email});
                this.name = "";
                this.email = "";
            }
        },
        deleteUser(id) {
            db.collection("users").doc(id).delete();
        }
    },
    firestore: {
        users: db.collection("users")
    }
};
</script>

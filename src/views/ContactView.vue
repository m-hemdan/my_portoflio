<template>
  <div>
    <img class="video" src="@/assets/img8.png" />
    <v-divider></v-divider>
    <h3 class="text-center mt-10">
      Please fill in this form and I will contact you soon.
    </h3>
    <v-sheet class="mx-auto mt-10 mb-10" width="800">
      <v-form @submit.prevent v-model="invalid" ref="form">
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="First name"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-textarea
          :rules="subTextRules"
          v-model="subText"
          :counter="100"
          label="Your Message"
        ></v-textarea>
        <v-btn :disabled="!invalid" color="success" type="submit" @click="addMessage" block
          >Submit</v-btn
        >
        <v-btn
          block
          color="success"
          class="mr-5 bold--text pa-2"
          v-if="loading"
        >
          <v-progress-circular
            indeterminate
            color="white"
          ></v-progress-circular>
        </v-btn>
        <h5 class="warningClass text-center mt-5" v-if="failedAdd">
          Sorry, there is something wrong
        </h5>
        <h5 class="warningClass text-center mt-5" v-if="repeatMessage">
          You have already sent a message, please wait 
        </h5>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase.js'
export default {
  data: () => ({
    firstName: "",
  
    firstNameRules: [
      (value) => {
        if (value?.length >= 10) return true;
        return "First name must be at least 3 characters.";
      },
    ],

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    subText: "",
    loading: false,
    failedAdd: false,
    description:''
    ,repeatMessage:false
  }),
  methods:{
   async  addMessage(){
     const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if(doc.data().email == this.email)
        { this.repeatMessage=true
        }
        else
        {
          this.addNewMessage()
          
        }
      });

    

    },
 async   addNewMessage(){
        const colRef = collection(db, 'users')
      // data to send
      const dataObj = {
        firstName: this.firstName,
        email: this.email,
        message: this.description,
       createdAt: new Date().getTime().toString(),
      }

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj)

      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    }
  }
};
</script>
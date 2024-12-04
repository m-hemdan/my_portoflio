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
        <v-btn
          :disabled="!invalid"
          color="success"
          type="submit"
          @click="addMessage"
          block
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
        <h5 class="warningClass text-center" v-if="failedAdd">
          Sorry, there is something wrong
        </h5>
        <h5 class="warningClass text-center mt-5" v-if="repeatMessage">
          You have already sent a message, please wait
        </h5>
      </v-form>
    </v-sheet>
    <div class="pa-4 text-center">
      <v-dialog max-width="500" v-model="dialogSuccess" persistent>
        <v-card>
          <v-card-text>
            <h3 class="addClass">You sent your message successfully</h3>
          </v-card-text>
          <div class="text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/506/390/original/bright-green-tick-checkmark-icon-free-png.png"
              class="images"
            />
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close Dialog" @click="reset"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
export default {
  data: () => ({
    dialogSuccess: true,
    loading: false,
    firstName: "",

    firstNameRules: [
      (value) => {
        if (value?.length >= 10) return true;
        return "First name must be at least 10 characters.";
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
    description: "",
    repeatMessage: false,
  }),
  methods: {
    async addMessage() {
      const querySnapshot = await getDocs(collection(db, "users"));
      this.loading = true;
      querySnapshot.forEach((doc) => {
        if (doc.data().email == this.email) {
          this.repeatMessage = true;
          this.loading = false;
        } else {
          this.addNewMessage();
        }
      });
    },
    async addNewMessage() {
      const colRef = collection(db, "users");
      // data to send
      const dataObj = {
        firstName: this.firstName,
        email: this.email,
        message: this.description,
        createdAt: new Date().getTime().toString(),
      };

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj);
      this.dialogSuccess = true;
      this.loading = false;
      // access auto-generated ID with '.id'
      console.log("Document was created with ID:", docRef.id);
    },
    reset() {
      this.dialogSuccess = false;
      this.$refs.form.reset();
      this.loading = false;
    },
  },
};
</script>
<style>
.images {
  width: 300px;
  height: 300px;
}
</style>
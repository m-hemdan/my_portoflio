<template>
  <div>
    <img class="video" src="@/assets/img2.png" />

    <div class="about">
      <v-row class="justify-around">
        <v-col
          cols="12"
          md="6"
          lg="6"
          xs="12"
          v-animate-onscroll="'animated fadeInLeft'"
        >
          <h3 class="text-center">Agnostic RTL Alignment</h3>
          <p class="text-subtitle-2 textDescription align-self-center">
            Among all the other web design businesses in Toronto, Canada, ours
            is the most dependable and competent. Our most potent instrument is
            our undivided attention to our clients, and we give them exactly
            what they require, nothing more or less. But we will undoubtedly
            exceed our clients' expectations.
          </p>
          <v-row justify="center">
            <v-btn size="large" class="mt-5 btn-text">Know More about US</v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" lg="6" xs="12">
          <img
            v-animate-onscroll="'animated fadeInRight'"
            src="@/assets/img4.png"
            class="imgDescription"
          />
        </v-col>
      </v-row>
    </div>
   

  <PortofolioView></PortofolioView>
  </div>
</template>
<script>
import PortofolioView from "../components/PortofolioView.vue"


export default {
  components: {PortofolioView}
  
  
}
</script>
<style scoped>
.video {
  width: 100% !important;
  height: 480px !important;
}
.about {
  margin-top: 100px;
  background: linear-gradient(
    90deg,
    rgba(42, 42, 43, 1) 1%,
    rgba(49, 166, 27, 0.48792016806722693) 100%,
    rgba(213, 199, 70, 1) 100%
  );
  color: whitesmoke;
}
.textDescription {
  font-size: 24px !important;
  font-family: "Times New Roman", Times, serif;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 30px;
}
.imgDescription {
  width: 70%;
  height: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.301), 0 6px 20px 0 rgba(0, 0, 0, 0.34);
}
.btn-text:hover {
  color: blue;
  background: rgba(230, 230, 87, 0.834);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.301), 0 6px 20px 0 rgba(0, 0, 0, 0.34);
}
</style>
<template>
  <div>
    
    <v-img class="explore"  :lazy-src='loadSrc' :src="src" ></v-img>
    <v-divider></v-divider>

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
        <v-col cols="12" md="6" lg="6" xs="12" justify="center">
          <img
            v-animate-onscroll="'animated fadeInRight'"
            lazy-src="@/assets/load.svg"
            src="@/assets/img4.png"
            class="imgDescription"
          />
        </v-col>
      </v-row>
    </div>

<v-divider></v-divider>
    <PortofolioView></PortofolioView>
   <v-divider></v-divider>
    <v-container>
      <v-title
        ><strong><h1>How do I work?</h1></strong></v-title
      >
      <div>
        <div class="d-flex">
          <v-expansion-panels v-model="panel"  multiple class="expandPanels">
            <v-expansion-panel class="panel">
              <v-expansion-panel-title><h2>Info gathering</h2></v-expansion-panel-title>
              <v-expansion-panel-text class="subPanel"> The first step of every successful website is to collect all the information that will help us develop a beautiful website. </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel class="panel">
              <v-expansion-panel-title><h2>Planing</h2></v-expansion-panel-title>
              <v-expansion-panel-text class="subPanel"> We provide one-on-one customer service, allowing us to get the most out of you in terms of your ideas, customization, preferred designs, and your own specifications. </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel class="panel">
              <v-expansion-panel-title><h2>Design</h2></v-expansion-panel-title>
              <v-expansion-panel-text class="subPanel"> We thoroughly understand the importance of a website being both visually appealing and functional.  </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="panel">
              <v-expansion-panel-title><h2>Customizing</h2></v-expansion-panel-title>
              <v-expansion-panel-text class="subPanel"> We will customize your website to exceed your expectations.  </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </v-container>
    <v-divider></v-divider>
   
  </div>
</template>
<script>
import PortofolioView from "../components/PortofolioView.vue";
import FooterView from "../components/FooterView.vue";

export default {
  components: { PortofolioView, FooterView },
  data: () => ({
    panel: [0, 1, 2, 3],
    src:require('@/assets/img2.png'),
    loadSrc:require('@/assets/load.svg')
  }),
};
</script>
<style scoped>

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
  width: 90%;
  height: 350px;
  margin-left: 50px;
  margin-right: 50px !important ;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.301), 0 6px 20px 0 rgba(0, 0, 0, 0.34);
}
.btn-text:hover {
  color: blue;
  background: rgba(230, 230, 87, 0.834);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.301), 0 6px 20px 0 rgba(0, 0, 0, 0.34);
}
.expandPanels{
   margin-top: 50px;


}
.panel{

 
  color: rgb(39, 57, 39);
  padding: 2px !important;
    
}
.subPanel{

  background: rgba(28, 100, 77, 0.145);
}

</style>
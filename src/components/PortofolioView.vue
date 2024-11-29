

<template>
      <div class="portfolio ">
      <v-container>
        <v-title><strong><h1>Explore our previous work</h1></strong></v-title>
        <h2 >Portfolio</h2>
        <v-row v-if="getPortfolioList" >
          <v-col v-for="item in getPortfolioList" :key="item" cols="12" lg="4" md="6" sm="12">
        <v-card  class="mx-auto cardProfile" max-width="344" v-animate-onscroll="item.animate">
          <v-img
           class="img_card"
            height="200px"
            :src="item.img"
            cover
          ></v-img>

          <v-card-title> {{item.text}} </v-card-title>

          <v-card-subtitle> deploy date: {{item.date}} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" text="Explore" :href="item.link"></v-btn>

            <v-spacer></v-spacer>

            <v-btn
              text="linkedIn"
              :href="item.link"
            ><v-icon> mdi-github</v-icon> github</v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="true">
              <v-divider></v-divider>

              <v-card-text>
               {{item.subText}}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script>
export default {
 
  data:()=>({
    show:false
  }),
  computed:{
    getPortfolioList(){
      return this.$store.state.portfolioList
    }
  }

};
</script>
<style scoped>

.portfolio{
margin-top:  100px;
}
.cardProfile{
    margin-top: 50px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.301), 0 6px 20px 0 rgba(0, 0, 0, 0.34);
     animation-duration: 3s !important;
}
.img_card{
   
    margin: 5px !important;
    
}
.img_card:hover{
    margin: 0 !important;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.301), 0 6px 20px 0 rgba(0, 0, 0, 0.34);
  
}

</style>
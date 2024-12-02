<template>
  <div class="hidden-md-and-down">
    <v-toolbar class="toolbar">
      <v-title>
        <v-btn>
          <v-icon>mdi-phone</v-icon>
          <span class="title_text"> +1 365-440-2065</span>
        </v-btn>
        <v-btn>
          <v-icon>mdi-email</v-icon>
          <span class="title_text"> marwaFaisal@myyahoo.com</span>
        </v-btn>
        <v-btn>
          <v-icon>mdi-map-marker</v-icon>
          <span class="title_text"> Mississauga, Ontario, Canada</span>
        </v-btn>
      </v-title>
      <v-spacer></v-spacer>

      <v-btn
        icon
        onclick="window.location.href='https://www.facebook.com/profile.php?id=61568881900204';"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn
        icon
        onclick="window.location.href='https://www.linkedin.com/in/marwa-hemdan-a80512292/';"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn
        icon
        onclick="window.location.href='https://github.com/m-hemdan/my_portoflio/';"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card
      ><v-row
        ><v-col
          ><v-card-title
            ><img class="img ml-12" src="@/assets/img3.png" /></v-card-title
        ></v-col>
        <v-col>
          <div
            class="d-flex justify-end sheet animate__animated animate__fadeIn slow"
          >
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/" class="routerLink">
                <h3><v-icon>mdi-home-outline</v-icon> Home</h3>
              </router-link>
            </v-sheet>
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/about" class="routerLink"
                ><h3>
                  <v-icon>mdi-information-outline</v-icon> About
                </h3></router-link
              >
            </v-sheet>
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/portfolio" class="routerLink">
                <h3><v-icon>mdi-laptop</v-icon> Portoflio</h3>
              </router-link>
            </v-sheet>
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/contact" class="routerLink">
                <h3><v-icon>mdi-contacts-outline</v-icon> Contact</h3>
              </router-link>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
  <div class="hidden-lg-and-up">
    <v-layout class="toolbar">
      <v-app-bar prominent class="toolbar">
        <template v-slot:prepend>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title> <h5>the Design Sphere</h5></v-app-bar-title>
        <v-spacer></v-spacer>

        <v-btn
          icon
          onclick="window.location.href='https://www.facebook.com/profile.php?id=61568881900204';"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn
          icon
          onclick="window.location.href='https://www.linkedin.com/in/marwa-hemdan-a80512292/';"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>

        <v-btn
          icon
          onclick="window.location.href='https://github.com/m-hemdan/my_portoflio/';"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list density="compact" nav>
          <v-card-title
            ><img class="img ml-12" src="@/assets/img3.png"
          /></v-card-title>

          <v-list-item>
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/" class="routerLink">
                <h3><v-icon>mdi-home-outline</v-icon> Home</h3>
              </router-link>
            </v-sheet>
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/about" class="routerLink"
                ><h3>
                  <v-icon>mdi-information-outline</v-icon> About
                </h3></router-link
              >
            </v-sheet>
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/portfolio" class="routerLink">
                <h3><v-icon>mdi-laptop</v-icon> Portoflio</h3>
              </router-link>
            </v-sheet>
            <v-sheet class="ma-2 pa-2 routerLinkHover">
              <router-link to="/contact" class="routerLink">
                <h3><v-icon>mdi-contacts-outline</v-icon> contact</h3>
              </router-link>
            </v-sheet>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
    </v-layout>
  </div>

  <router-view />
  <FooterView></FooterView>
</template>
<script>
import FooterView from "./components/FooterView.vue";
export default {
  components: { FooterView },
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.toolbar {
  background-color: #212d39 !important;
  color: aliceblue !important;
}
.title_text {
  font-size: 12px;
}
.imgLogo {
  height: 100px;
}
.img {
  width: 110px;
  height: 110px;
}
.sheet {
  margin-top: 20px !important;
  margin-right: 30px;
}
.routerLink {
  text-decoration: none;
  color: #212d39;
}
.routerLinkHover:hover {
  background-color: #212d39;
  border-radius: 6px;
}
.routerLink:hover {
  color: whitesmoke !important;
}
</style>


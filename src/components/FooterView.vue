
<template>
  <v-footer class="footer text-center d-flex flex-column">
    <div>
      <v-btn
        class="mx-4"
        variant="text"
        icon
        onclick="window.location.href='https://www.facebook.com/profile.php?id=61568881900204';"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn
        class="mx-4"
        variant="text"
        icon
        onclick="window.location.href='https://www.linkedin.com/in/marwa-hemdan-a80512292/';"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn
        class="mx-4"
        variant="text"
        icon
        onclick="window.location.href='https://github.com/m-hemdan/my_portoflio/';"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn class="mx-4" variant="text"></v-btn>
    </div>

    <div class="pt-0">
      <v-row class="justify-space-between">
        <v-col cols="12" lg="6" md="6" sm="12">
          <v-btn variant="text" class="mt-10">
            <v-icon>mdi-phone</v-icon>
            <span > +1 365-440-2065</span>
          </v-btn>
          <br>
          <v-btn variant="text">
            <v-icon>mdi-email</v-icon>
            <span > marwaFaisal@myyahoo.com</span>
          </v-btn>
          <br>
          <v-btn variant="text">
            <v-icon>mdi-map-marker</v-icon>
            <span > Mississauga, Ontario, Canada</span>
          </v-btn>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12">
          <a target="_blank" href="https://maps.app.goo.gl/83o2p3A1rWJrynpj7">
            <img src="@/assets/img7.png" width="350px" class="mt-2" />
          </a>
          <a href="https://maps.app.goo.gl/83o2p3A1rWJrynpj7">ssss</a>
        </v-col>
      </v-row>
    </div>

    <v-divider></v-divider>

    <div class="px-4 py-2 bg-black text-center w-100">
      spheredesign.ca© All rights reserved
    </div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
}
</style>
<!--     <a href="https://maps.app.goo.gl/83o2p3A1rWJrynpj7">ssss</a> -->

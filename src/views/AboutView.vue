<template>
  <div class="about">
    <v-container>
      <v-card class="mx-auto" subtitle="Let's introduce" width="100%">
        <template v-slot:title>
          <span class="text-pink"><h3>About me _____</h3></span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          <h4>
            My name is Marwa. I am a web developer with 4 years experience in
            programming. I have a bachelor’s degree in Computer Science and
            Information System , I have 5 years of experience in Vue Js, HTML,
            PHP, CSS, and Firebase . I am capable of creating beautiful
            e-commerce websites and transforming any outdated website into a
            fantastic mobile-friendly one that is simple to update. I am
            confident that all of the experience I have accumulated from my
            training, education, and work on many projects can support you on
            your path to success.
          </h4>
        </v-card-text>
      </v-card>
      <v-container class="text-center">
      

        <v-btn
          class="red-lighted-2 ma-5 resumeBtn"
          outlined
          :href="pdf"
          download
        >
          Download My resume <v-icon>mdi-download</v-icon>
        </v-btn>
       <div ><embed  :src='pdf' type="application/pdf" width="100%" height="900px"></div>
      </v-container>
    </v-container>
  </div>
</template>
<script>
// import PdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
import PDFViewer from "pdf-viewer-vue";
export default {
  components: {
    // PdfApp,
    PDFViewer,
  },
  data: () => ({
    pdf: "/files/MarwaResume.pdf",
  }),
};
</script>
<style>
.resumeBtn {
  color: white;
  background: #f06292;
}
.resumeBtn:hover {
  color: #f06292;
  background: rgba(255, 192, 203, 0.304);
}
</style>
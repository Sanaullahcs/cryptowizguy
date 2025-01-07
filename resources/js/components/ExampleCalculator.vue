<template>
  <layout>
    <div class="col-10 col-md-12 navbar-text-div mt-1">
      <h3 class="text-center navbar-text exmplecalch1" style="">
        <span class="font-italic font-weight-bold">Crypto Wiz Guy<sup>®</sup></span>
        presents <br />
        <span class="text-success font-weight-bold"
          >The Selling-for-PROFIT Example Calculator</span
        >
        <!-- <p
          class="text-center mt-1 mb-0 mobile-only"
          style="color: black; font-size: 11px"
        >
          <a href="#">For "How to use this tool." See blog</a>
        </p> -->
      </h3>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <button
        style="
          width: 400px;
          font-size: 20px;
          background-color: #4472c4 !important;
          color: white;
          border: none;
          border-radius: 10px;
          height: 50px;
        "
        @click="goToSpecificRoute"
      >
        Access the live calculator—Subscribe now!
      </button>
    </div>
    <!-- <div class="mt-3" id="desktop">
      <div class="text-center" style="font-size: 1.3rem">
        <label style="color: black" class="desktop-only">
          <a href="#">For "How to use this tool." See here</a>
        </label>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="info-text text-center">
              <label style="margin-bottom: 0px">
                IMPORTANT: Save as PDF or print before closing, resetting, reloading, or
                leaving this page.
              </label>
              <label
                class="font-weight-bold w-100"
                style="text-align: center; vertical-align: top"
              >
                Crypto Wiz Guy does not save your work.
              </label>
              <label class="mt-2">
                IMPORTANT: See here for entering Investor's output data into Coinbase. The
                calculator does not make a sale or place an order on Coinbase.
              </label>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div> -->
    <div class="d-flex justify-content-center align-items-center">
      <img :src="caclculatorimage" alt="calculator image" class="exmple-calc" />
    </div>
  </layout>
</template>
<script>
import Layout from "./Layout.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import caclculatorimage from "../../assets/calculator1.png";

export default {
  components: {
    Layout,
  },
  beforeUnmount() {},
  created() {},
  mounted() {},
  data() {
    return {
      caclculatorimage: caclculatorimage,
    };
  },
  watch: {},
  methods: {
    goToSpecificRoute() {
      // This pushes to the desired route
      this.$router.push({ name: "subscription-plan" });
      // Or you can use path if you prefer:
      // this.$router.push('/path/to/your/route');
    },
  },
  computed: {},
};
</script>
<style scoped>
.exmple-calc {
  max-width: 100%;
  width: 80%;
}
.exmplecalch1 {
  color: black;
  font-size: 2rem;
  margin-top: 18% !important;
}
@media screen and (max-width: 770px) {
  .exmplecalch1 {
    margin-top: 36% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px !important;
  }
}
@media screen and (max-width: 550px) {
  .exmplecalch1 {
    margin-top: 52% !important;
  }
}
@media screen and (max-width: 400px) {
  .exmplecalch1 {
    margin-top: 68% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

<!-- <template>
        <router-view></router-view>
</template> -->

<template>
  <div id="app">
    <template v-if="showSplash && isHomeRoute">
      <div class="splash-screen">
        <div class="splash-h1-top-div text-center mt-1">
          <h1 class="splash-h1-top">
            With the
            <span class="splash-h1-top-gr">Crypto Wiz Guy® Calculator and Resources</span>
            you can
          </h1>
        </div>
        <div class="logo-container">
          <!-- Chat icons as images with text quotes -->
          <div class="chat-icon-container">
            <img
              :src="chatIcon1"
              ref="topLeftIcon"
              class="chat-icon-img chat-icon chat-icon-top-left slide-right"
            />
            <img
              :src="chatIcon1Hover"
              class="chat-icon-hover-img chat-icon chat-icon-top-left"
            />
            <span class="chat-icon-text chat-icon-top-left-txt"
              >plan to buy below the current Market price</span
            >
          </div>
          <div class="chat-icon-container">
            <img
              :src="chatIcon2"
              class="chat-icon-img chat-icon chat-icon-top-right slide-right"
            />
            <img
              :src="chatIcon2Hover"
              class="chat-icon-hover-img chat-icon chat-icon-top-right"
            />
            <span class="chat-icon-text chat-icon-top-right-txt"
              >plan your Net profit % target</span
            >
          </div>
          <div class="chat-icon-container">
            <img
              :src="chatIcon3"
              class="chat-icon-img chat-icon chat-icon-bottom-left slide-top"
            />
            <img
              :src="chatIcon3Hover"
              class="chat-icon-hover-img chat-icon chat-icon-bottom-left"
            />
            <span class="chat-icon-text chat-icon-bottom-left-txt"
              >plan your exact Proceeds $ target</span
            >
          </div>
          <div class="chat-icon-container">
            <img
              :src="chatIcon4"
              class="chat-icon-img chat-icon chat-icon-bottom-right slide-left"
            />
            <img
              :src="chatIcon4Hover"
              class="chat-icon-hover-img chat-icon chat-icon-bottom-right"
            />
            <span class="chat-icon-text chat-icon-bottom-right-txt"
              >plan to sell above the current Market price</span
            >
          </div>
          <div class="chat-icon-container">
            <img
              :src="chatIcon5"
              class="chat-icon-img chat-icon chat-icon-center slide-left"
            />
            <img
              :src="chatIcon5Hover"
              class="chat-icon-hover-img chat-icon chat-icon-center"
            />
            <span class="chat-icon-text chat-icon-center-txt"
              >plan your exact Proceeds % target</span
            >
          </div>
          <div class="chat-icon-container">
            <img
              :src="chatIcon6Hover"
              class="chat-icon-hover-img chat-icon chat-icon-6-top-left"
            />
            <img
              :src="chatIcon6"
              class="chat-icon-img chat-icon chat-icon-6-top-left slide-top"
            />
            <span class="chat-icon-text chat-icon-6-top-left-txt"
              >plan your Net profit $ target</span
            >
          </div>
          <div class="chat-icon-container">
            <img
              :src="chatIcon6Hover"
              class="chat-icon-hover-img chat-icon chat-icon-bottom-1-left"
            />
            <img
              :src="chatIcon7"
              class="chat-icon-img chat-icon chat-icon-bottom-1-left slide-top"
            />
            <span class="chat-icon-text chat-icon-bottom-1-left-txt">
              Learn how to “Limit sell” on Coinbase</span
            >
          </div>

          <div class="chat-icon-container">
            <img
              :src="chatIcon6Hover"
              class="chat-icon-hover-img chat-icon chat-icon-bottom-2-right"
            />
            <img
              :src="chatIcon8"
              class="chat-icon-img chat-icon chat-icon-bottom-2-right slide-top"
            />
            <span class="chat-icon-text chat-icon-bottom-2-right-txt"
              >Learn how to “Limit buy” on Coinbase</span
            >
          </div>
          <!-- End of chat icons -->
          <img :src="logoSrc" alt="Your App Logo" class="img-splash" />
        </div>
        <div class="logo-text-div">
          <h1 class="splash-heading">Crypto Wiz Guy®</h1>
          <p class="slagon">Calculator</p>
        </div>
        <button @click="hideSplash" class="splash-btn btn-primary">Enter</button>

        <div class="bottom-splash-h1-div">
          <h1 class="bottom-h1-splash">
            know the outcome <i> <b>before</b></i> you buy or sell cryptocurrency
          </h1>
        </div>
      </div>
    </template>

    <router-view v-else></router-view>
  </div>
</template>

<script>
import chatIcon1 from "./../../assets/chatIcon1.svg";
import chatIcon2 from "./../../assets/chatIcon2.svg";
import chatIcon3 from "./../../assets/chatIcon3.svg";
import chatIcon4 from "./../../assets/chatIcon4.svg";
import chatIcon5 from "./../../assets/chatIcon5.svg";
import chatIcon6 from "./../../assets/chatIcon6.svg";

import chatIcon7 from "./../../assets/chatIcon7.svg";
import chatIcon8 from "./../../assets/chatIcon8.svg";

import chatIcon1Hover from "./../../assets/chatIcon1Hover.svg";
import chatIcon2Hover from "./../../assets/chatIcon2Hover.svg";
import chatIcon3Hover from "./../../assets/chatIcon3Hover.svg";
import chatIcon4Hover from "./../../assets/chatIcon4Hover.svg";
import chatIcon5Hover from "./../../assets/chatIcon5Hover.svg";
import chatIcon6Hover from "./../../assets/chatIcon6Hover.svg";

import logoSrc from "./../../assets/logo.png";
import Splash from "./SplashScreen.vue"; // If using custom component
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    Splash, // If using custom component
  },
  data() {
    return {
      chatIcon1: chatIcon1,
      chatIcon2: chatIcon2,
      chatIcon3: chatIcon3,
      chatIcon4: chatIcon4,
      chatIcon5: chatIcon5,
      chatIcon6: chatIcon6,
      chatIcon7: chatIcon7,
      chatIcon8: chatIcon8,
      chatIcon1Hover: chatIcon1Hover,
      chatIcon2Hover: chatIcon2Hover,
      chatIcon3Hover: chatIcon3Hover,
      chatIcon4Hover: chatIcon4Hover,
      chatIcon5Hover: chatIcon5Hover,
      chatIcon6Hover: chatIcon6Hover,

      showSplash: true,
      logoSrc: logoSrc, // Initially show the splash screen
    };
  },
  computed: {
    isHomeRoute() {
      const route = useRoute();
      return route.path === "/"; // Adjust based on your home route path
    },
  },

  methods: {
    hideSplash() {
      this.showSplash = false;
    },
  },
};
</script>
<style scoped>
/*
.chat-icon-img {
  transition: transform 0.3s ease-in-out;  Smooth transition
}

.chat-icon-img:hover {
  transform: scale(1.1);
}
*/

.chat-icon-hover-img {
  display: none;
}

.slagon {
  font-family: Laila;
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  color: #005703 !important;
  margin-top: -15px;
}
.bottom-h1-splash {
  font-size: 1.5vw;
  line-height: 1.5vw;
  color: black;
}
.bottom-splash-h1-div {
  position: absolute;
  bottom: 20px;
}
.splash-h1-top {
  font-size: 1.5vw;
  line-height: 1.5vw;
  color: black;
}
.splash-h1-top-div {
  position: absolute;
  top: 30px;
}

.splash-h1-top-gr {
  color: #005703 !important;
  font-weight: bold;
  font-style: italic;
}
/* Show the second image when hovering over its parent container */
/*
.chat-icon-container:hover .chat-icon-hover-img {
  display: block;
}
.chat-icon-container:hover .chat-icon-top-left-txt {
  color: white !important;
}
.chat-icon-container:hover .chat-icon-top-right-txt {
  color: white !important;
}
.chat-icon-container:hover .chat-icon-bottom-left-txt {
  color: white !important;
}
*/
/* Hide the first image when hovering over its parent container */
/*
.chat-icon-container:hover .chat-icon-img {
  display: none;
}
.chat-icon-container:hover .chat-icon-bottom-right-txt {
  color: white !important;
}
.chat-icon-container:hover .chat-icon-center-txt {
  color: white !important;
}

.chat-icon-container:hover .chat-icon-6-top-left-txt {
  color: white !important;
}*/

.logo-container {
  position: relative;
  width: 20%;
}
.chat-icon {
  position: absolute;
}

/* Positioning each chat icon */
.chat-icon-top-left {
  position: absolute;
  top: 61%;
  right: 97%;
  width: 54%;
}
.chat-icon-top-right:hover {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-top-left-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-top-left {
  opacity: 1 !important;
}
/*
.slide-right {
  animation: slideFromRight 1.5s ease-in-out forwards;
}
.slide-left {
  animation: slideFromLeft 1.5s ease-in-out forwards;
}
.slide-top {
  animation: slideFromBottom 1.5s ease-in-out forwards;
}
*/
.chat-icon-bottom-1-left {
  position: absolute;
  top: 108%;
  right: -47%;
  width: 54%;
}

.chat-icon-bottom-1-left-txt {
  opacity: 0;
  position: absolute;
  top: 118%;
  left: 145%;
  font-size: 1.3vw;
  margin-left: -47%;
  line-height: 1.3vw;
  text-align: center;
}

.chat-icon-bottom-2-right {
  position: absolute;
  top: 108%;
  right: 94%;
  width: 54%;
}

.chat-icon-bottom-2-right-txt {
  opacity: 0;
  position: absolute;
  top: 118%;
  right: 102%;
  font-size: 1.3vw;
  margin-left: -43%;
  line-height: 1.3vw;
  text-align: center;
}
.chat-icon-6-top-left {
  position: absolute;
  top: -30%;
  right: 58%;
  width: 54%;
}
.chat-icon-6-top-left:hover {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-bottom-1-left-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-bottom-2-right-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-6-top-left-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-6-top-left {
  opacity: 1 !important;
}
.chat-icon-top-right {
  position: absolute;
  top: 10%;
  right: 96%;
  width: 54%;
}
.chat-icon-top-right:hover {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-top-right-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-top-right {
  opacity: 1 !important;
}
.chat-icon-bottom-left {
  position: absolute;
  bottom: 91%;
  left: 55%;
  width: 54%;
}
.chat-icon-bottom-left :hover {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-bottom-left-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-bottom-left {
  opacity: 1 !important;
}
.chat-icon-bottom-right {
  position: absolute;
  bottom: 1%;
  left: 94%;
  width: 54%;
}

.chat-icon-bottom-right :hover {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-bottom-right-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-bottom-right {
  opacity: 1 !important;
}

.chat-icon-center {
  position: absolute;
  top: 10%;
  left: 91%;
  width: 54%;
}
.chat-icon-center :hover {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-center-txt {
  opacity: 1;
}
.chat-icon-container:hover .chat-icon-center {
  opacity: 1 !important;
}
.chat-icon-top-left-txt {
  opacity: 0;
  position: absolute;
  top: 67%;
  right: 103%;
  font-size: 1.3vw;
  margin-left: -47%;
  line-height: 1.3vw;
  text-align: center;
}

.chat-icon-6-top-left-txt {
  position: absolute;
  top: -18%;
  right: 59%;
  font-size: 1.3vw;
  line-height: 1.3vw;
  margin-left: -7%;
  opacity: 0;
}

.chat-icon-top-right-txt {
  opacity: 0;
  position: absolute;
  top: 21%;
  right: 102%;
  font-size: 1.3vw;
  line-height: 1.3vw;
  margin-left: -46%;
  text-align: center;
}
.chat-icon-bottom-left-txt {
  position: absolute;
  bottom: 103%;
  left: 61%;
  font-size: 1.3vw;
  line-height: 1.3vw;
  margin-right: -18%;
}
.chat-icon-bottom-right-txt {
  opacity: 0;
  position: absolute;
  bottom: 5%;
  left: 99%;
  margin-right: -44%;
  font-size: 1.3vw;
  text-align: center;
  line-height: 1.3vw;
}

.chat-icon-center-txt {
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 122%;
  transform: translate(-50%, -50%);
  font-size: 1.3vw;
  line-height: 1.3vw;
  margin-right: -40%;
}
.splash-screen {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.splash-heading {
  color: #005703 !important;
  font-style: italic;
  font-weight: 900 !important;
  font-size: 2.5vw !important;
}
.logo-text-div {
  margin-bottom: 30px;
}
.splash-btn {
  font-size: 25px !important;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 100px;
  width: 12%;
  border: none !important;
  border-radius: 50px;
}
.img-splash {
  opacity: 0.4; /* Initially hide the logo */
  animation: logo-scale 5s ease-in-out forwards; /* Animation properties */
  animation-delay: 0.1s; /* Add a delay for a smoother transition */
  width: 85%;
}
@keyframes slideFromBottom {
  from {
    opacity: 0;
    transform: translateY(100%); /* Start from off-screen bottom */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Animate to the original position */
  }
}

@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%); /* Start from off-screen left */
  }
  to {
    opacity: 1;
    transform: translateX(0%); /* Animate to the original position */
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(100%); /* Start from off-screen right */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* Animate to the original position */
  }
}

@keyframes text-scale {
  from {
    opacity: 0.5;
    transform: scale(0.5); /* Start from size 0 */
  }
  to {
    opacity: 1;
    transform: scale(1); /* Animate to full size */
  }
}
@keyframes logo-scale {
  from {
    opacity: 0.5;
    transform: scale(0.5); /* Start from size 0 */
  }

  to {
    opacity: 1;
    transform: scale(1); /* Animate to full size */
  }
}
@media screen and (max-width: 991px) {
  .img-splash {
  }
  .logo-container {
    width: 37%;
  }
  .chat-icon-text {
    font-size: 2vw;
  }
  .chat-icon-top-left-txt {
    font-size: 2.1vw;
    line-height: 2vw;
    top: 72%;
    right: 102%;
  }

  .chat-icon-top-right-txt {
    font-size: 2.1vw;
    line-height: 2vw;
  }
  .chat-icon-bottom-left-txt {
    font-size: 2.1vw;
    line-height: 2vw;

    left: 63%;
    bottom: 105%;
  }
  .chat-icon-bottom-right-txt {
    font-size: 2.1vw;
    line-height: 2vw;
  }

  .chat-icon-center-txt {
    font-size: 2.1vw;
    line-height: 2vw;
  }
  .chat-icon-6-top-left-txt {
    font-size: 2.1vw !important;
    line-height: 2vw;
    top: -18%;
    right: 69%;
  }
  .chat-icon-bottom-2-right-txt {
    font-size: 2.1vw;
    line-height: 2vw;
  }
  .chat-icon-bottom-1-left-txt {
    font-size: 2.1vw;
    line-height: 2vw;
    left: 142%;
    margin-left: -43%;
  }
}
</style>

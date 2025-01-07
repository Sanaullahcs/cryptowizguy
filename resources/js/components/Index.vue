<template>
  <layout class="Container-size">
    <div v-if="shouldShowButton && loggedIn" style="position: relative">
      <button @click="showModalbtc = true" class="sticky-button btn-primary">
        Verify Status
      </button>
    </div>

    <header>
      <div class="header-main">
        <div class="header-main-sub">
          <p v-if="loggedIn" class="signedin_user">Signed in user: {{ email }}</p>
          <h1 class="header-heading">Master the art of intelligent crypto trading.</h1>
          <p class="header-p">
            Enhance your proficiency in crypto investments and trades.
          </p>
        </div>
        <div class="">
          <button
            v-if="!loggedIn"
            class="signin-btn"
            :class="{ active: activeButton === 'signin' }"
            @click="handleSignInClick"
          >
            Sign In
          </button>
          <button
            v-if="!loggedIn"
            class="signup-btn"
            :class="{ active: activeButton === 'signup' }"
            @click="handleSignUpClick"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
    <!-- <section class="vedio-style"> -->
    <!-- <div class="vedio-style">
                <video
                    :key="src"
                    :width="width"
                    :height="height"
                    controls
                    style="border-radius: 20px"
                >
                    <source :src="vidsrc" :type="type" />
                </video>
            </div> -->

    <!-- <iframe
          src="https://www.youtube.com/embed/IluTgOHHKyE?si=am6wEd3-KC3zbL8w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                         gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> -->
    <!-- <iframe
        class="vedio-style-frame"
        width="1050"
        height="500"
        src="https://www.youtube.com/embed/IluTgOHHKyE?si=am6wEd3-KC3zbL8w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                         gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> -->
    <!-- </section> -->

    <section>
      <div class="video-style">
        <iframe
          class="video-style-frame"
          width="80%"
          height="0"
          style="border: none"
          src="https://www.youtube.com/embed/IluTgOHHKyE?si=am6wEd3-KC3zbL8w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
               gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- <section
            class="buy-crypto-sec"
            :style="{ backgroundImage: `url(${buycryptoback})` }"
        >
            <div class="buy-crypto-cont row m-0">
                <div
                    class="d-flex justify-content-center col-12 col-md-12 col-lg-6 col-lg-6"
                >
                    <div class="buy-crypto-text">
                        <h1 class="buy-crypto-h1">
                            Learn and plan to BUY crypto intelligently
                        </h1>
                        <div class="crypto-p-btn">
                            <p class="buy-crypto-p">
                                With an easy, short narrated video tutorial that
                                teaches you to how to set up an Advanced Limit
                                Buy on Coinbase.com and lets you set the coin
                                price you want to pay so you can buy below the
                                current market price.
                            </p>
                            <button class="buy-crypto-btn">Read More</button> 
                        </div>
                    </div>
                </div>
                <div class="text-center col-12 col-md-12 col-lg-6 col-lg-6 m-0">
                    <img
                        :src="buyCryptoimg"
                        alt="buy crypto"
                        class="learn-resource"
                    />
                </div>
            </div>
        </section> -->
    <div
      clas="hr-container"
      style="
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      "
    >
      <hr style="border: 2px dashed #000000; width: 70%; text-align-center" />
    </div>

    <section class="sel-crypto-sec">
      <div
        class="sel-crypto-cont row m-0"
        :style="{ backgroundImage: `url(${selcryptoback})` }"
      >
        <div class="text-center col-12 col-md-12 col-lg-6 col-lg-6 m-0">
          <img :src="selCryptoimg" alt="buy crypto" class="learn-resource" />
        </div>
        <div class="d-flex justify-content-center col-12 col-md-12 col-lg-6 col-lg-6">
          <div class="buy-crypto-text">
            <h1 class="buy-crypto-h1">Learn and plan to SELL crypto intelligently</h1>
            <div class="crypto-p-btn">
              <p class="buy-crypto-p">
                teach you how to set the coin price you want to achieve your goals and
                sell above the current market price.
              </p>
              <!-- <button class="buy-crypto-btn">Read More</button> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      clas="hr-container"
      style="
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      "
    >
      <hr style="border: 2px dashed #000000; width: 70%; text-align-center" />
    </div>

    <section class="buy-crypto-sec" :style="{ backgroundImage: `url(${buycryptoback})` }">
      <div class="buy-crypto-cont row m-0">
        <div class="d-flex justify-content-center col-12 col-md-12 col-lg-6 col-lg-6">
          <div class="buy-crypto-text">
            <h1 class="LearRes-crypto-h1">Learn and plan from the Resources page</h1>
            <div class="crypto-p-btn">
              <p class="buy-crypto-p">
                and real-world explanatory videos of actual trades based on the Outputs of
                the Calculator and links to helpful, focused pages with relevant subjects
                to help you understand the vocabulary and concepts of intelligently buying
                and selling cryptocurrency.
              </p>
              <!-- <button class="buy-crypto-btn">Read More</button> -->
            </div>
          </div>
        </div>
        <div class="text-center col-12 col-md-12 col-lg-6 col-lg-6 m-0">
          <img :src="LearnResimg" alt="buy crypto" class="learn-resource" />
        </div>
      </div>
    </section>

    <section :style="{ backgroundImage: `url(${EasySecback})` }" class="Easy-main-sec">
      <div>
        <div class="row easy-div-sec">
          <h1 class="easy-sec-h1 mb-4">IT’S EASY!</h1>
          <div class="p-ul-width">
            <p class="easy-p">
              After you explore the website and watch some videos you are ready to go!
              Just:
            </p>
            <ul class="easy-ul">
              <li class="easy-li">
                Join this website with your email address, user name, etc.
              </li>
              <li class="easy-li">Agree to the terms of service and user agreement</li>
              <li class="easy-li">
                Sign in and enter the One Time Password sent to your email
              </li>
              <li class="easy-li">
                From the three-bar menu, choose and explore Resources, (recommended) or
                the Crypto Wiz Guy® Calculator
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="spend-div-1">
        <div class="mb-4">
          <h1 class="spend-sec-h1 mb-4">BUY</h1>
          <ul class="spend-sec-ul">
            <li class="spend-sec-li">
              Use the Crypto Wiz Guy® Calculator to target the cryptocurrency at a price
              you choose.
            </li>
            <li class="spend-sec-li">
              Use the Crypto Wiz Guy® Calculator to target the cryptocurrency at a price
              you choose.
            </li>
          </ul>
        </div>

        <div
          clas="hr-container"
          style="
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin-top: 4%;
            margin-bottom: 4%;
          "
        >
          <hr style="border: 2px dashed #000000; width: 70%; text-align-center" />
        </div>

        <div class="mb-4">
          <h1 class="spend-sec-h1 mb-4">Sell</h1>
          <ul class="spend-sec-ul">
            <li class="spend-sec-li">
              Enter your Advanced limit sell order on Coinbase.com
            </li>
            <li class="spend-sec-li">
              Cancel the order at no cost to you if you decide you do not want to sell at
              the coin price you chose.
            </li>
          </ul>
        </div>
        <div
          clas="hr-container"
          style="
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin-top: 4%;
            margin-bottom: 4%;
          "
        >
          <hr style="border: 2px dashed #000000; width: 70%; text-align-center" />
        </div>

        <div class="mb-4">
          <h1 class="spend-sec-h1 mb-4">Spend NO TIME trying to time the market</h1>
          <ul class="spend-sec-ul">
            <li class="spend-sec-li">Be patient and let the money come to you.</li>
            <li class="spend-sec-li">Have fun and be careful out there!</li>
          </ul>
        </div>
        <div class="disclamer-div">
          <div class="disclamer-icon-h1">
            <img :src="alertIcon" alt="alert" class="alert-icon-margen" />

            <h1 class="disclamer-div-h1">Disclaimer!</h1>
          </div>
          <div class="disclamer-div-p">
            <p class="disclamer-p">
              Information provided is for general educational purposes only and is not
              intended to constitute investment or other advice on financial products.
              Such information is not, and should not be read as, an offer or
              recommendation to buy or sell or a solicitation of an offer or
              recommendation to buy or sell any particular digital asset or to use any
              particular investment strategy. Crypto Wiz Guy® and its affiliates
              (collectively “ Crypto Wiz Guy®”) makes no representations as to the
              accuracy, completeness, timeliness, suitability, or validity of any
              information and will not be liable for any errors, omissions, or delays in
              this information or any losses, injuries, or damages arising from its
              display or use. Investing in crypto comes with risk. Please carefully
              consider whether trading or holding cryptocurrencies is suitable for you
              given your financial situation.
            </p>
          </div>
        </div>
      </div>
    </section>
  </layout>
  <!-- btc status Modal -->
  <div
    v-if="showModalbtc"
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    "
    @click.self="showModal = false"
  >
    <div
      style="
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 500px;
        max-width: 80%;
        text-align: center;
      "
    >
      <h2>Verify Your Status</h2>
      <p style="font-size: 20px">
        Only Bitcoin users: Verify your status by entering the correct username on
        Coinbase.
      </p>
      <form @submit.prevent="verifyBTCName">
        <input
          type="text"
          v-model="btc_username"
          placeholder="Enter BTC Username"
          style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 20px;
          "
        />
        <div style="display: flex; justify-content: space-between">
          <button
            type="submit"
            style="
              padding: 10px 20px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 18px;
            "
          >
            Verify
          </button>
          <button
            type="button"
            @click="showModalbtc = false"
            style="
              padding: 10px 20px;
              background-color: #6c757d;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-size: 18px;
            "
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- Response Modal for Success/Error -->
  <div
    v-if="showResponseModal"
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1001;
    "
    @click.self="closeResponseModal"
  >
    <div
      style="
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 300px;
        max-width: 80%;
        text-align: center;
      "
    >
      <h2>{{ isSuccess ? "Success" : "Error" }}</h2>
      <p>{{ responseMessage }}</p>
      <button
        @click="closeResponseModal"
        :style="{
          backgroundColor: isSuccess ? '#28a745' : '#dc3545',
          padding: '10px 20px',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }"
      >
        Close
      </button>
    </div>
  </div>

  <div>
    <div v-show="showModal" id="openModal1" class="modalDialog1">
      <div class="overlay">
        <a href="#" title="Close" class="close1" @click="closeModal">X</a>
        <div class="modal-head1">
          <div class="modal-header1">
            flame
            <h2 class="modal-title1 text-white" id="purchaseLabel">
              <span>Wait! Before you go..</span>
            </h2>
          </div>
          <div class="modal-body1">
            <p class="text-white" style="font-size: 19px">
              Get an exclusive {{ discount }}% off on Your First Order with coupon: (
              <strong>{{ couponName }}</strong> ) *
            </p>
            <div class="middle-section1">
              <div class="hero connect-page">
                <div class="container">
                  <div class="hero-body">
                    <div class="campaign campaign-0">
                      <div class="counter timer">
                        <div class="counter-boxes">
                          <div class="count-box">
                            <h1 class="value text-white day">
                              {{ days }}
                            </h1>
                            <span>Days</span>
                          </div>
                          <div class="count-box">
                            <h1 class="value text-white hour">
                              {{ hours }}
                            </h1>
                            <span>Hours</span>
                          </div>
                          <div class="count-box">
                            <h1 class="value text-white minute">
                              {{ minutes }}
                            </h1>
                            <span>Minutes</span>
                          </div>
                          <div class="count-box">
                            <h1 class="value text-white second">
                              {{ seconds }}
                            </h1>
                            <span>Seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="heading text-white">
              Hurry up! This offer is valid for the next
              {{ days }} {{ hours }} {{ minutes }} {{ seconds }} only.
            </p>
          </div>
        </div>
      </div>
      <div class="modal-backdrop1" @click="closeModal"></div>
    </div>
  </div>
  <footer class="footer-site">
    <div class="container">
      <div class="copyright-text">
        © 2024 Crypto Wiz Guy LLC, all U.S. and international rights reserved
      </div>
    </div>
  </footer>
</template>
<script>
import Layout from "./Layout.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import { useToast } from "vue-toastification";
import Platform from "./../../assets/platform.png";
import Star from "./../../assets/star.png";
import faq from "./../../assets/faqs.png";
import buyCryptoimg from "./../../assets/cryptoimg1.png";
import buycryptoback from "./../../assets/buycryptobaack.svg";
import selcryptoback from "./../../assets/selcryptoback.svg";
import selCryptoimg from "./../../assets/learcryptoimg.png";

import LearnResimg from "./../../assets/LearnResourc.png";
import EasySecback from "./../../assets/easySec.svg";

import alertIcon from "./../../assets/alertIcon.svg";
import bigScreenLogo from "./../../assets/bigScreenLogo.svg";

export default {
  name: "Home",

  components: {
    Layout,
  },
  beforeUnmount() {},
  created() {
    // this.fetchExpiryDate();
  },
  mounted() {
    this.loggedIn =
      localStorage.getItem("user") && localStorage.getItem("verification") ? true : false;
    const userData = localStorage.getItem("user");

    console.log("userdata", userData);

    const verificationData = localStorage.getItem("verification");
    this.plan_id = localStorage.getItem("plan_id");
    if (userData && verificationData) {
      const user = JSON.parse(userData);
      // Assuming verification is a boolean value in local storage

      const isVerified = JSON.parse(verificationData);
      this.userId = user.id;
      this.isKickstarter = user.is_kickstarter;
      console.log("isKickstarter", this.isKickstarter);
      console.log("isKickstarter", this.userId);
      // this.fetchExpiryDate();
      // this.setupCountdown(1705780800000, 1802649540000);
      // setTimeout(() => {
      //     this.showModal = true;
      // }, 10000);
      // Perform an action when both user data and verification are present and valid
      if (user && isVerified) {
        // Your logic here
        this.isAdmin = user.is_admin;
        this.email = user.email;
        // Perform other actions or set other flags as needed
      } else {
        console.log("User data or verification is invalid.");
      }
    } else {
      console.log("User not logged in or not verified.");
    }
    this.getbtcverification();

    if (!this.isIntervalSet) {
      this.intervalId = setInterval(this.cleanOldEmails, 3600000); // Every hour
      this.isIntervalSet = true;
    }
  },

  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.isIntervalSet = false;
    }
  },
  data() {
    return {
      loggedIn: false,
      plan_id: "",
      videoSource: "/assets/video/demo-video.mkv",
      buyCryptoimg: buyCryptoimg,
      buycryptoback: buycryptoback,
      LearnResimg: LearnResimg,
      selcryptoback: selcryptoback,
      selCryptoimg: selCryptoimg,
      EasySecback: EasySecback,
      alertIcon: alertIcon,
      intervalId: null,
      isIntervalSet: false,
      bigScreenLogo: bigScreenLogo,
      Platform,
      Star,
      successMessage: null,
      errorMessage: null,
      faq,
      btcSubscription: false,
      showModalbtc: false,
      isKickstarter: 0,
      userId: null,
      showModal: false,

      showResponseModal: false, // State for showing the response modal
      responseMessage: "", // To store the response message
      isSuccess: false,
      btcexpirationindex: false,
      shouldShowButton: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      couponName: "",
      discount: "",
      vidsrc: "/assets/video/demo-video.mkv",
      type: "video/mp4",
      width: 1150,
      height: 600,
      activeButton: "signin",
    };
  },
  watch: {},
  methods: {
    async cleanOldEmails() {
      try {
        const response = await axios.post("/api/emails/clean-old");
        console.log(response.data.message);
      } catch (error) {
        console.error("Error cleaning old emails:", error);
      }
    },
    async verifyBTCName() {
      const btc_userdata = {
        btc_username: this.btc_username,
        btc_userid: this.userId,
      };

      try {
        const response = await axios.post("/api/verify-btc-username", btc_userdata);
        this.responseMessage = response.data.message;
        this.isSuccess = response.status === 200 || response.status === 201;

        const btcSubscriptionValue = true;

        localStorage.setItem(`btcSubscription_${this.userId}`, true);
        console.log(`btcSubscription set for user ${this.userId}`);
        this.successMessage = "Your Bitcoin name are verified";
        this.showResponseModal = true;
        this.showModalbtc = false;
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          this.responseMessage = error.response.data.message;
          this.errorMessage = "Failed, Please try again later!";
        } else if (error.response && error.response.status) {
          this.responseMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        } else {
          this.responseMessage = "An unexpected error occurred.";
        }
        this.isSuccess = false;
        this.showResponseModal = true;
        this.showModalbtc = false;
      }
    },
    closeModal() {
      this.showModalbtc = false;
      this.responseMessage = "";
      this.btc_username = "";
    },
    closeResponseModal() {
      this.showResponseModal = false;
      this.responseMessage = "";
      this.btc_username = "";
      if (this.isSuccess) {
        this.closeModal(); // Close the main modal if the operation was successful
      }
    },

    async getbtcverification() {
      const userId = this.userId;
      console.log("BTC verification for user", userId);

      try {
        const response = await axios.post("/api/getbtcverification", {
          userId,
        });

        if (response.status === 200) {
          const btcStatus = response.data.btcStatus;
          const verifyBtcAt = response.data.btcexpiry
            ? new Date(response.data.btcexpiry)
            : null;
          const currentDate = new Date();
          const coinBaseName = response.data.coinbase_username;

          // Debug logs
          console.log("API Response:", response.data);
          console.log("BTC Status:", btcStatus);
          console.log("Verification Date:", verifyBtcAt);
          console.log("Current Date:", currentDate);
          console.log("Coinbase Username:", coinBaseName);

          // Check if Coinbase username is valid
          if (coinBaseName === null || coinBaseName.trim() === "") {
            console.log("Coinbase username is invalid or null. Button should be hidden.");
            this.shouldShowButton = false;
          } else {
            // If Coinbase username is valid, check other conditions
            const isBtcVerified = btcStatus === 1;
            const isVerificationRecent = verifyBtcAt
              ? currentDate - verifyBtcAt < 365 * 24 * 60 * 60 * 1000
              : false;

            console.log("Is BTC Verified:", isBtcVerified);
            console.log("Is Verification Recent:", isVerificationRecent);

            // Show button if any condition is false
            this.shouldShowButton = !(isBtcVerified && isVerificationRecent);
          }

          this.btcexpirationindex = this.shouldShowButton && this.loggedIn;

          console.log("shouldShowButton:", this.shouldShowButton);
          console.log("btcexpirationindex:", this.btcexpirationindex);
        } else {
          console.log("Failed to verify BTC status");
          this.shouldShowButton = false;
          this.btcexpirationindex = this.shouldShowButton && this.loggedIn;
        }
      } catch (e) {
        console.error("Unable to fetch Bitcoin verification", e);
        this.shouldShowButton = false;
        this.btcexpirationindex = this.shouldShowButton && this.loggedIn;
      }
    },

    async fetchExpiryDate() {
      try {
        const requestData = {
          params: {
            userid: this.userId,
            kickstarter: this.isKickstarter,
          },
        };

        const response = await axios.get("/api/discount-show", requestData);

        console.log("discount response", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching expiry date:", error);
        return null; // Handle error gracefully
      }
    },

    async setupCountdown() {
      // Fetch the expiry date using the API call
      const discountDetails = await this.fetchExpiryDate();
      if (discountDetails) {
        const { name, expiry_date, discount } = discountDetails;
        this.couponName = name;
        this.discount = discount;
        this.expiry_date = expiry_date;
      }
      // Parse the expiry date to milliseconds
      const startTimeMillis = new Date().getTime();
      const endTimeMillis = new Date(this.expiry_date).getTime();

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      function calculateRemaining() {
        const now = new Date().getTime();
        return now >= startTimeMillis && now < endTimeMillis ? endTimeMillis - now : 0;
      }

      let previousGap = calculateRemaining();

      setInterval(() => {
        const gap = calculateRemaining();
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        this.days = textDay;
        this.hours = textHour;
        this.minutes = textMinute;
        this.seconds = textSecond;

        if ((previousGap > day && gap <= day) || (previousGap > 0 && gap === 0)) {
          setTimeout(() => {
            window.location.reload();
          }, 30000 + Math.random() * 90000);
        }

        previousGap = gap;
      }, 1000);
    },

    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

    setActive(button) {
      this.activeButton = button;
      console.log("button are active", this.activeButton);
    },
    handleSignInClick() {
      this.setActive("signin");
      this.$router.push("/login");
    },
    handleSignUpClick() {
      this.setActive("signup");
      this.$router.push("/register");
    },
  },
  computed: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Laila:wght@300;400;500;600;700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Laila:wght@300;400;500;600;700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
.Container-size {
  max-width: 100% !important;
}
</style>

<style scoped>
.button-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.signin-btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  transition: z-index 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
}
.signup-btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  transition: z-index 0.5s ease-in-out;

  transition: width 0.5s ease-in-out;
}
.signin-btn {
  width: 128px !important;
  height: 51px;
  border: 2px solid black;
  border-radius: 50px;

  background: none !important;
  color: black;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.82px;
  text-align: center;
}
.signup-btn {
  width: 128px !important;
  height: 51px;
  border: 2px solid black;
  border-radius: 50px;

  background: none !important;
  color: black;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 500;
  line-height: 21.82px;
  margin-left: -20px;
}
.signin-btn:hover {
  z-index: 1;
  width: 135px !important;

  background-color: rgba(24, 59, 86, 1) !important;
  border: none !important;
  color: #ffffff !important;
}

.signup-btn:hover {
  z-index: 2;
  width: 135px !important;

  background-color: rgba(24, 59, 86, 1) !important;
  border: none !important;
  color: #ffffff !important;
}
.footer-site {
  margin-bottom: -20px;
  background-color: ;
}
.disclamer-p {
  font-family: Nunito;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}
.disclamer-div {
  background-color: rgba(24, 59, 86, 1);
  margin-top: 5%;
  padding: 5%;
  border-radius: 30px;
}
.alert-icon-margen {
  margin-bottom: 0.5%;
}
.disclamer-icon-h1 {
  display: flex;
  justify-content: Center;
  gap: 10px;
  margin-bottom: 2%;
}
.disclamer-div-h1 {
  color: rgba(255, 255, 255, 1) !important;
  font-family: Laila;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
}
.disclamer-div-p {
}
.spend-div-1 {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 7%;
  padding-right: 5%;
}
.spend-sec-h1 {
  font-family: Laila;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  color: #183b56;
}
.spend-sec-ul {
  font-family: Nunito;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: rgba(121, 121, 121, 1);
}
.Easy-main-sec {
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 7%;
  padding-right: 5%;
}
.easy-sec-h1 {
  font-family: Laila;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #ffffff;
}
.easy-div-sec {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.easy-p {
  font-family: Nunito;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
}
.p-ul-width {
  width: 89% !important;
}
.easy-ul {
  font-family: Nunito;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  width: 80%;
}
.easy-li {
  font-family: Nunito;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
}
.sel-crypto-sec {
  width: 100%;
  background-repeat: no-repeat;
  max-height: 100%;

  margin-top: 130px;
  padding-bottom: 50px;
}
.buy-crypto-sec {
  width: 100%;
  background-repeat: no-repeat;
  max-height: 100%;

  margin-top: 5%;
  padding-bottom: 5%;
}
.buy-crypto-text {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 70%;
}
.learn-resource {
  width: 75% !important;
}
.crypto-p-btn {
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.buy-crypto-cont {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sel-crypto-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.LearRes-crypto-h1 {
  font-family: Laila;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  color: #183b56;
  width: 70%;
}
.buy-crypto-h1 {
  font-family: Laila;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
  color: #183b56;
  width: 90%;
}
.buy-crypto-p {
  font-family: Nunito;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: rgba(24, 59, 86, 0.7);
}
.buy-crypto-btn {
  width: 150px;
  height: 51px;
  font-family: Nunito;
  font-size: 16px;
  color: #183b56;
  font-weight: 500;
  border-radius: 50px;
  border: 1px solid #183b56;
  background: none !important;
}
/* modal code */
.Container-size {
  max-width: 100% !important;
}

.video-style {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  height: 80%;
  margin-bottom: -40%;
  /* Set padding-bottom to maintain the aspect ratio (height/width) of the video */
  padding-bottom: 56.25%; /* Aspect ratio: 9:16 (500/1050 * 100) */
  z-index: 99;
}

.video-style iframe {
  position: absolute;
  top: -30%;
  left: 22%;
  width: 80%;
  height: 60%;
}

.flame span {
  height: 300px;
  width: 100%;
  background-image: url("https://dl.dropbox.com/s/r2s8s2r17wi0xm6/flame.png?dl=0");
  background-position: 0 -1000px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fire 4s linear infinite;
}

@keyframes fire {
  0% {
    background-position: 0% -50%;
  }
  100% {
    background-position: 0% -25%;
  }
}

.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}

@media screen and (max-width: 1204px) {
  .vedio-style-frame {
    width: 80% !important;
  }
}
@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

@media screen and (min-width: 1204px) {
  .container {
    max-width: 1140px;
  }
  .container {
    max-width: 1140px;
  }
}

@media screen and (max-width: 768px) {
  .hero {
    min-height: auto;
  }
  .spend-sec-h1 {
    font-size: 30px;
    line-height: 40px;
  }
  .easy-li {
    font-size: 20px !important;
    line-height: 27px !important;
  }
  .easy-p {
    font-size: 18px !important;
    line-height: 27px !important;
  }
}
@media screen and (min-width: 1317) {
  .hero .hero-body {
    padding: 2rem 0;
  }
}

@media screen and (max-width: 768px) {
  .hero .hero-body {
    padding: 2rem 0;
  }
}
.section.pair .pair-steps .step .step-number .value {
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
}

.hero .hero-body .counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}

@media screen and (max-width: 768px) {
  .hero .hero-body .counter {
    margin: 2rem 0 0;
  }
}
.sticky-button {
  position: fixed;
  bottom: 20px; /* Adjust the distance from the bottom as needed */
  right: 20px; /* Adjust the distance from the right as needed */
  z-index: 1000; /* Ensures the button is on top of other content */
  background-color: #007bff; /* Adjust color as needed */
  color: #fff; /* Adjust text color as needed */
  border: none;
  font-size: 20px !important;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.hero .hero-body .counter .title {
  color: #9c9c9c;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px #0003;
}

.hero .hero-body .counter .counter-boxes {
  display: flex;
  flex-direction: row;
}

.hero .hero-body .counter .counter-boxes .count-box {
  background-color: #1a1c1ccc;
  box-shadow: 0 5px 10px #0000004d;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-right: 4px;
  text-shadow: 0 1px 0 #0000004d;
  padding: 5px;
}

@media screen and (max-width: 768px) {
  .hero .hero-body .counter .counter-boxes .count-box {
    width: 70px;
    height: 70px;
  }
}

.hero .hero-body .counter .counter-boxes .count-box h1 {
  color: #fff;
  padding: 8px 0 0;
  margin: 0;
  font-size: 2.5rem;
  line-height: 2rem;
}

@media screen and (max-width: 768px) {
  .hero .hero-body .counter .counter-boxes .count-box h1 {
    font-size: 2rem;
  }
}

.hero .hero-body .counter .counter-boxes .count-box span {
  color: #9c9c9c;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  .hero .hero-body .counter .counter-boxes .count-box span {
    font-size: 10px;
    letter-spacing: 0;
  }
}
@media screen and (max-width: 991px) {
  .crypto-p-btn {
    margin-left: 0px !important;
  }

  .LearRes-crypto-h1 {
    width: 100% !important;
  }
  .sel-crypto-cont {
    flex-direction: column-reverse;
  }
  .p-ul-width {
    width: 100% !important;
  }
  .easy-ul {
    width: 100% !important;
  }
}

.hero .hero-body .counter .counter-boxes .count-box:last-of-type {
  margin-right: 0;
}

.container {
  width: 100%;
}

.modal-backdrop {
  display: none;
}
.modalDialog1 {
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  opacity: 1;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: auto;

  /*	background:rgba(0,0,0,0.8);*/
}
.modal-backdrop1 {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
.modalDialog1:target {
  opacity: 1;
  pointer-events: auto;
}
.modalDialog1 .overlay {
  width: 50%;
  position: relative;
  margin: 5% auto;
  padding: 40px 50px;
  border-radius: 0;
  background: #000000a8;
  z-index: 9999;
}
.close1 {
  background: #dc241e;
  color: #ffffff;
  line-height: 25px;
  position: absolute;
  right: -12px;
  text-align: center;
  top: -10px;
  text-decoration: none;
  font-weight: bold;
  opacity: 1;
  width: 37px;
  height: 36px;
  border-radius: 50%;
  padding: 6px 1px;
}
.modal-backdrop1.in {
  opacity: 0;
}
.close1:focus,
.close1:hover {
  background: black;
  color: white;
  opacity: 1;
  text-decoration: none;
}
.modal-body1 .coupon-btn1,
.modal-body1 .thanks-btn1 {
  background: #dc241e;
  width: 36%;
  float: left;
  display: inline-block;
  margin: 30px 20px 20px;
  color: #fff;
  cursor: pointer;
  font-family: "Oswald", sans-serif;
}
.modal-head1 {
  text-align: center;
}
.modal-body1 .coupon-btn1 {
  background: gray;
}
body.modal-open {
  overflow: auto;
  padding-right: 0 !important;
}
.heading {
  display: table;
  width: 100%;
}
.signedin_user {
  margin-top: 70px;
  font-size: 25px;
  font-weight: 700px;
}
.open {
  background: #00bcd4;
  padding: 8px 30px;
  font-size: 23px;
  color: white;
  border-radius: 3px;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}

/* end modal code */

footer.footer-site {
  background: rgba(24, 59, 86, 1);
  padding: 12px 0px 12px 0px;
}

footer.footer-site p {
  font-weight: 600;
  max-width: 320px;
  color: #000;
}

footer.footer-site p span {
  font-weight: 400;
  font-size: 14px;
  color: #000;
}

.copyright-text {
  font-family: Nunito;
  font-size: 22px !important;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

footer.footer-site ul {
  list-style: none;
  padding: 0;
  margin-top: 22px;
}

footer.footer-site a {
  text-decoration: unset;
  font-size: 14px;
  color: #000;
  line-height: 30px;
}

footer.footer-site h3 {
  font-size: 17px;
  font-weight: 700;
  color: #000;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
}

.faq-answer {
  display: none;
  padding-left: 30px;
}

.icon-wrapper .icon {
  margin-right: 10px;
  background: #4473c5;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  position: relative;
}

.icon-wrapper .icon span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
.text-size {
  font-size: 31px;
  color: #000;
  margin-bottom: 0;
  font-weight: 400;
  padding-bottom: 15px;
  line-height: 37px;
}

.card button .icon::before {
  content: "\f106";
  font-family: "Font Awesome 5 Free";
  color: #ffff;
  position: absolute;
  right: 6px;
  font-size: 23px;
  top: -1px;
  font-weight: 800;
}

.faq-answer p {
  margin-top: 12px;
}

.card button.collapsed .icon::before {
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  color: #ffff;
  position: absolute;
  right: 6px;
  font-size: 20px;
  top: 2px;
  font-weight: 800;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

section.banner-sect h1,
section.trial h1 {
  font-size: 15px;
  font-weight: 700;
  color: #000;
}

section.banner-sect p,
section.trial p {
  color: #000;
  font-size: 16px;
  max-width: 1024px;
  margin: auto;
}

.bg-light-blue {
  background: #cbe8fa;
  border-radius: 25px;
  padding: 30px 26px;
  margin-bottom: 25px;
}

.bg-light-blue h3 {
  font-size: 16px;
  font-weight: 700;
}

.bg-light-blue p {
  line-height: 18px;
}

section.platform-work {
  background: #cce7fa;
  padding: 60px 0 !important;
}

section.platform-work h2 {
  font-size: 36px;
  font-weight: 700;
  color: #000;
}

section.platform-work p {
  font-size: 14px;
  color: #000;
  /* max-width: 350px; */
}

.side-icon {
  background: #fff;
  padding: 14px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 14px;
}

.bg-white-block {
  /* max-width: 360px; */
  list-style: none;
  padding: 0px;
}

.side-icon h3 {
  font-size: 14px;
  color: #000;
  font-weight: 700;
  margin: 0;
}

.side-icon p {
  font-size: 12px !important;
  margin: 0;
}

h2 {
  font-size: 36px;
  font-weight: 700;
  color: #000;
}

.card-sect {
  border: 1px solid #87a5da;
  border-radius: 12px;
  padding: 20px 40px;
  text-align: center;
  max-width: 32%;
  margin: auto;
  margin-bottom: 12px;
}

.card-sect h3 {
  font-size: 16px;
  color: #000;
  font-weight: 700;
}

section.faqs-sect {
  background: #cce7fa;
  padding: 60px 0;
  margin: 100px 0;
}

section.faqs-sect p {
  font-size: 14px;
  color: #000;
}

section.faqs-sect .row .col-12.col-sm-12.col-md-6.col-lg-6:first-child {
  max-width: 450px;
  margin-right: auto;
}

section.partners-sect {
  margin: 100px 0;
}

section.partners-sect p {
  color: #000;
  font-size: 14px;
  max-width: 600px;
  margin: auto;
}

.mw-wwh {
  max-width: 943px;
}

video#video-style {
  width: 100%;
  max-width: 947px;
  border: 2px solid #cce7fa;
}
.header-heading {
  font-family: Laila;

  font-size: 3.75rem;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  width: 60% !important;
  color: #161515;
  text-align: center;
}
.header-p {
  font-family: Nunito;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  color: black;
  margin-left: 5%;
  margin-right: 5%;
}
.header-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  background-color: white;
  height: 120vh;
  max-width: 100%;
  padding-bottom: 10%;
}
.header-main-sub {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background-color: white;
  margin-top: 6%;
}
@media (max-width: 1550px) {
  .header-heading {
    font-size: 2.6rem;
    line-height: 50px;
  }
}
@media (max-width: 767.9px) {
  section#wwwwh {
    margin-top: 0rem !important;
  }
  .underline-text {
    text-decoration: underline;
    font-size: 1.75rem !important;
  }
  .header-heading {
    font-size: 2rem !important;
    width: 80% !important;
    line-height: 40px;
    margin-top: 10%;
  }
  .text-size {
    font-size: 20px;
    background-color: none;
    color: #000;
    margin-bottom: 0;
    font-weight: 400;
    padding-bottom: 15px;
    line-height: 37px;
  }
  .header-p {
    font-size: 20px;
  }

  .buy-crypto-h1 {
    font-size: 2rem !important;
    line-height: 40px;
  }
  .buy-crypto-p {
    font-size: 20px !important;
    line-height: 29px;
  }
  .learn-resource {
    margin-top: 4%;
  }
  .LearRes-crypto-h1 {
    font-size: 2rem !important;
  }
  .easy-sec-h1 {
    font-size: 2rem !important;
    line-height: 40px;
  }
  .spend-sec-ul {
    font-size: 20px;
    line-height: 27px;
  }
  .disclamer-div-h1 {
    font-size: 2rem !important;
    line-height: 40px;
  }
  .disclamer-p {
    font-size: 20px !important;
    line-height: 27px;
  }
}
</style>

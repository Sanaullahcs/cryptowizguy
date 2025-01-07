<template>
  <FreeTrail></FreeTrail>
  <header class="header-sect">
    <div class="custom-container" style="min-width: 100%; margin: 0">
      <!-- <div
            F v-if="loggedIn && $route.path === '/'"
                class="text-center userEmail"
            >
                <span><strong>Sign in to :</strong> {{ email }}</span>    
            </div> -->
      <!-- Navbar -->
      <nav
        class="navbar navbar-expand-lg navbar-light navbar-small-screen"
        style="
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
        "
      >
        <!-- Brand -->
        <a
          class="navbar-brand small-screen-logo"
          href="javascript:void()"
          @click="refreshPage"
        >
          <img :src="Logo" alt="logo" class="img-logo" />
        </a>

        <!-- Toggler/collapsible Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="" :class="{ 'icon-white-text': isHomePage }"
            ><i class="fa fa-bars" aria-hidden="true"></i
          ></span>
        </button>

        <!-- Navbar links -->
        <div
          class="collapse navbar-collapse w-100 navbar-small-back"
          :class="{ 'icon-white-text': isHomePage }"
          style="width: 100%; z-index: 1"
          id="navbarNav"
        >
          <div class="spaceFlex">
            <ul
              class="navbar-nav nav-fonts"
              style="gap: 1rem"
              :class="{ 'white-text': isHomePage }"
            >
              <!-- Conditional rendering for user email -->
              <!-- <li class="nav-item" v-if="loggedIn && $route.path === '/'">
              <span class="nav-link userEmail">
                <strong>Sign in to :</strong> {{ email }}
              </span>
            </li> -->
              <!-- Links for Home, About Us, Contact, and other pages -->
              <li class="nav-item home-page" :class="{ active: $route.path === '/' }">
                <a class="nav-link" href="javascript:void()" @click="$router.push('/')"
                  >Home</a
                >
              </li>
              <li
                class="nav-item 'other-page'"
                :class="{ active: $route.path === '/about' }"
              >
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/about')"
                  >About Us</a
                >
              </li>
              <!-- <li
              class="nav-item"
              v-if="loggedIn && !plan_id"
              :class="{ active: $route.path === '/subscription-plan' }"
            >
              <a
                class="nav-link"
                href="javascript:void()"
                @click="$router.push('/subscription-plan')"
                >Subscription Plans</a
              >
            </li> -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Subscriptions
                </a>
                <div
                  class="dropdown-menu dropdown-back-color"
                  aria-labelledby="navbarDropdown"
                >
                  <ul :class="{ 'white-text': isHomePage }" class="dotted-list">
                    <li
                      v-if="
                        !loggedIn ||
                        (!isExpired && !btcUserSubscription && !isKickstarterexpired)
                      "
                      class="nav-item text_manu"
                      :class="{
                        active: $route.path === '/subscription-plan',
                      }"
                    >
                      <router-link
                        :to="{
                          path: '/subscription-plan',
                        }"
                        class="dropdown-item sub-menu"
                        >Subscription Plans</router-link
                      >
                    </li>
                    <li
                      class="nav-item text_manu"
                      v-if="loggedIn && isExpired && !isCoinbaseUser"
                      :class="{
                        active: $route.path === '/user-subscription',
                      }"
                    >
                      <router-link
                        :to="{
                          path: '/user-subscription',
                        }"
                        class="dropdown-item sub-menu"
                        >User Subscription</router-link
                      >
                    </li>

                    <li
                      class="nav-item text_manu"
                      v-if="
                        (loggedIn &&
                          (isCoinbaseUser || isKickstarterexpired) &&
                          btcUserSubscription) ||
                        isKickstarterexpired
                      "
                      :class="{
                        active: $route.path === '/user-btc-subscription',
                      }"
                    >
                      <router-link
                        :to="{
                          path: '/user-btc-subscription',
                        }"
                        class="dropdown-item sub-menu"
                        >User Subscription</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>

              <!-- <li
                class="nav-item"
                :class="{
                  active: $route.path === '/subscription-plan',
                }"
              >
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/subscription-plan')"
                  >Subscription Plans</a
                >
              </li>
              <li
                class="nav-item"
                v-if="loggedIn && plan_id"
                :class="{
                  active: $route.path === '/user-subscription',
                }"
              >
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/user-subscription')"
                  >User Subscription</a
                >
              </li> -->
              <!-- <li
              v-if="loggedIn"
              class="nav-item"
              :class="{ active: $route.path === 'payment-plan' }"
            >
              <a
                class="nav-link"
                href="javascript:void()"
                @click="$router.push('/payment-plan')"
                >Payment Plans</a
              >
            </li> -->
              <!-- <li
              class="nav-item"
              :class="{ active: $route.path === '/newsubscriptionplans' }"
            >
              <a
                class="nav-link"
                href="javascript:void()"
                @click="$router.push('/newsubscriptionplans')"
                >Pricing Plans</a
              >
            </li> -->
              <li
                class="nav-item"
                :class="{
                  active: $route.path === '/examplecalculator',
                }"
              >
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/examplecalculator')"
                  >Example Calculator</a
                >
              </li>

              <!-- <li
                class="nav-item"
                :class="{
                  active: $route.path === '/calculator',
                }"
                v-if="loggedIn"
              >
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/calculator')"
                  >Live Calculator
                </a>
              </li> -->

              <li
                class="nav-item"
                :class="{
                  active: $route.path === '/calculator',
                }"
                v-if="loggedIn & (isExpired || isKickstarterexpired || btcexpiration)"
              >
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/calculator')"
                  >Live Calculator
                </a>
              </li>
            </ul>
            <div>
              <a
                class="navbar-brand big-screen-logo"
                href="javascript:void()"
                @click="refreshPage"
              >
                <img
                  :src="bigScreenLogo"
                  alt="logo"
                  class="img-logo newlogomain"
                  style="max-width: 200px"
                />
                <!-- <img :src="Logo" alt="logo" class="img-logo" /> -->
              </a>
              <!-- <span class="logo-name"> Crypto Wiz Guy®</span> -->
            </div>
            <ul
              class="navbar-nav ml-2 nav-fonts"
              style="gap: 1rem"
              :class="{ 'white-text': isHomePage }"
            >
              <li
                class="nav-item"
                :class="{
                  active: $route.path === '/dashboard',
                }"
                v-if="loggedIn && (isAdmin === 1 || isSuperAdmin === 1)"
              >
                <a class="nav-link" href="javascript:void()" @click="redirectToDashboard"
                  >Admin Dashboard</a
                >
              </li>
              <li class="nav-item" :class="{ active: $route.path === '/resource' }">
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/resource')"
                  >Resources</a
                >
              </li>
              <li class="nav-item" :class="{ active: $route.path === '/contact' }">
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/contact')"
                  >Contact</a
                >
              </li>
              <!-- Add other navbar items as needed -->
              <li class="nav-item" :class="{ active: $route.path === '/faqs' }">
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/faqs')"
                  >FAQs</a
                >
              </li>

              <!-- Link for My Account -->
              <li
                class="nav-item"
                v-if="loggedIn"
                :class="{
                  active: $route.path === '/my-account',
                }"
              >
                <a
                  class="nav-link"
                  href="javascript:void()"
                  @click="$router.push('/my-account')"
                  >Your Account</a
                >
              </li>
              <!-- Buttons for Sign In, Register, and Logout -->
              <!-- <li class="nav-item" v-if="!loggedIn">
                <button
                  class="btn btn-primary btn-sm mr-2 ml-3 mb-1 logIn_Regester_btn"
                  @click="$router.push('/login')"
                >
                  Sign in
                </button>
              </li>
              <li class="nav-item" v-if="!loggedIn">
                <button
                  class="btn btn-primary btn-sm mr-2 ml-2 mb-1 logIn_Regester_btn"
                  @click="$router.push('/register')"
                >
                  Register
                </button>
              </li> -->
              <li class="nav-item" v-if="loggedIn">
                <button
                  class="btn btn-primary btn-sm mr-2 ml-2 mb-1 logIn_Regester_btn"
                  @click="logout"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <!-- <div -->
    <!-- class="col-12 col-sm-12 col-md-4 col-lg-12 text-center pt-3 pb-3 video-container"
    v-if="$route.path === '/'" > -->
    <!-- <iframe
        width="1050"
        height="500"
        src="https://www.youtube.com/embed/IluTgOHHKyE?si=am6wEd3-KC3zbL8w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                         gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> -->
    <!-- </div> -->
    <div
      class="col-12 col-sm-12mw-wwh m-auto col-md-4 col-lg-6 text-sm-center"
      v-if="$route.path === '/'"
    >
      <!-- <h2>Crypto Wiz Guy® LLC Buying and Selling Calculator.</h2> -->
      <!-- <p class="paragraph-text">
        Do you know how you can plan and buy cryptocurrency below the current
        market (spot) price?. Do you know how you can plan and sell
        cryptocurrency below the current market (spot) price?. Crypto Wiz Guy®
        will teach you to do it yourself !
      </p> -->
    </div>
  </header>
</template>

<script>
import Logo from "./../../assets/logo.png";
import FreeTrail from "./FreeTrail.vue";
import bigScreenLogo from "./../../assets/newlogo.png";
export default {
  name: "Header",
  components: {
    FreeTrail,
  },
  beforeUnmount() {},
  created() {},
  data() {
    return {
      loggedIn: false,
      trial_days_difference: "",
      isAdmin: null,
      isSuperAdmin: null,
      email: null,
      Logo: Logo,
      bigScreenLogo: bigScreenLogo,
      plan_id: "",
      userId: null,
      expiryDate: null,
      isExpired: false,
      isKickstarterexpired: false,
      btcexpiration: false,
      subscribedflag: false,
      btcSubscriptionflage: false,
      btcUserSubscription: false,
      isCoinbaseUser: false,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  mounted() {
    this.loggedIn =
      localStorage.getItem("user") && localStorage.getItem("verification") ? true : false;
    const userData = localStorage.getItem("user");
    const userId = localStorage.getItem("user.id");

    console.log("this.isCoinbaseUser", this.isCoinbaseUser);
    const verificationData = localStorage.getItem("verification");
    this.plan_id = localStorage.getItem("plan_id");
    // this.subscribedflag = localStorage.getItem("subscribed");
    // console.log("this.subscribedfla", this.subscribedflag);
    // this.btcSubscriptionflage = localStorage.getItem("btcSubscription");

    console.log("this.isCoinbaseUser", this.isCoinbaseUser);
    this;
    if (userData && verificationData) {
      const user = JSON.parse(userData);
      // Assuming verification is a boolean value in local storage
      const isVerified = JSON.parse(verificationData);
      // Perform an action when both user data and verification are present and valid
      if (user && isVerified) {
        // Your logic here
        this.isAdmin = user.is_admin;
        this.isSuperAdmin = user.is_superadmin;
        this.email = user.email;
        this.userId = user.id;

        // this.isCoinbaseUser = user.coinbase_username ? true : false;

        this.subscribedflag = localStorage.getItem(`subscribed_${this.userId}`);
        console.log("this.subscribedflag", this.subscribedflag);

        this.btcSubscriptionflage = localStorage.getItem(
          `btcSubscription_${this.userId}`
        );
        console.log("this.btcSubscriptionflage", this.btcSubscriptionflage);
        // Perform other actions or set other flags as needed
      } else {
        console.log("User data or verification is invalid.");
      }
    } else {
      console.log("User not logged in or not verified.");
    }
    this.getSubscriptionExpiry();
    this.getKickstarterStatus();
    this.getbtcverification();
  },
  watch: {},
  methods: {
    async getSubscriptionExpiry() {
      if (!this.userId) {
        console.error("User ID is not set.");
        return;
      }
      try {
        const response = await axios.post("/api/get-sub-expiry", {
          userId: this.userId,
        });
        const isActive = response.data.subscription_active_status == 1;
        const endDateString = response.data.ends_at;
        const formattedEndDateString = endDateString.replace(" ", "T");
        const endDate = new Date(formattedEndDateString);
        const currentDate = new Date();

        console.log(currentDate, endDate);
        this.isExpired = isActive && currentDate <= endDate;
        console.log(this.isExpired);
      } catch (error) {
        console.error(
          "Error fetching subscription expiry:",
          error.response ? error.response.data : error.message
        );
      }
    },

    async getbtcverification() {
      const userId = this.userId;
      console.log("BTC verification for user", userId);

      try {
        const response = await axios.post("/api/getbtcverification", {
          userId,
        });

        if (response.status === 200 || response.status === 201) {
          const btcStatus = response.data.btcStatus;
          const btcexpiry = response.data.btcexpiry;
          this.isCoinbaseUser = response.data.coinbase_username ? true : false;
          const verifyBtcAt = btcexpiry ? new Date(btcexpiry) : null;
          const currentDate = new Date();

          if (
            btcStatus == 1 &&
            verifyBtcAt &&
            currentDate - verifyBtcAt < 365 * 24 * 60 * 60 * 1000
          ) {
            console.log("BTC verified and within a year", response.data);
            this.btcexpiration = true;
          } else {
            console.log(
              "BTC is either not verified or the verification is older than a year."
            );
            this.btcexpiration = false;
          }

          // Combine the conditions for btcUserSubscription
          //   this.btcUserSubscription = this.btcexpiration && this.btcSubscriptionflage;
          this.btcUserSubscription = this.btcexpiration;
          console.log("userbtc", this.btcUserSubscription);
        } else {
          console.log("Failed to verify BTC status");
          this.btcexpiration = false;
        }
      } catch (e) {
        console.error("Unable to fetch Bitcoin verification", e);
        this.btcexpiration = false;
      }
    },
    refreshPage() {
      this.$root.showSplash = true; // Set showSplash to true
      window.location.href = "/"; // Refresh the page
    },
    async getKickstarterStatus() {
      if (!this.userId) {
        console.error("User ID is not set.");
        return;
      }
      try {
        const response = await axios.post("/api/get-kickstarter-status", {
          userId: this.userId,
        });
        const isUsed = response.data.kickstarter_free_isused;

        console.log("Kickstarter free subscription is used:", isUsed);
        this.isKickstarterexpired = isUsed === 1;
        // this.isExpired = isUsed === 1;
        // console.log("Subscription is expired:", this.isExpired);
      } catch (error) {
        console.error(
          "Error fetching kickstarter status:",
          error.response ? error.response.data : error.message
        );
      }
    },

    showWarningMessage(event) {
      // Display a warning message when leaving the page
      event.preventDefault();
      event.returnValue = ""; // For modern browsers

      // Customize the message shown to the user
      return "Are you sure you want to leave this page? Changes you made may not be saved.";
    },
    redirectToDashboard() {
      // Redirect to the admin dashboard
      this.$router.push("/dashboard");
    },
    goToPreviousPage() {
      const currentRoute = this.$route;
      const routeName = currentRoute.name;

      if (routeName === "Calculator") {
        console.log("Calculator");
        const confirmed = window.confirm(
          "Are you sure you want to leave this page? Changes you made may not be saved.?"
        );
        if (confirmed) {
          this.$router.go(-1);
        } else {
          // Handle 'No' button click or cancel
          console.log('User clicked "No" or cancelled');
          // Perform actions if the user clicks 'No' or cancels
        }
      } else {
        window.removeEventListener("beforeunload", this.showWarningMessage);
        this.$router.go(-1);
      }
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("varification");
      localStorage.removeItem("varification");
      localStorage.removeItem("trial_days_difference");
      if (this.$route.path != "/") this.$router.push("/");
      else location.reload();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Laila:wght@300;400;500;600;700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");
.dotted-list {
  list-style-type: disc;
}
.sub-menu:hover {
  color: rgba(24, 59, 86, 1);
  background-color: transparent !important;
}
.dropdown-back-color {
  background-color: #ffffff;
}
.logo-name {
  font-family: Laila;
  font-size: 30px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  color: rgba(249, 213, 117, 1);
}

.icon-white-text {
  color: black !important;
}

.navbar-nav {
}
/* end modal */
.nav-link {
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}
.w-100 {
  width: 100% !important;
}
.white-text .nav-link {
  color: #000000 !important;
}

.black-text .nav-link {
  color: #000000 !important;
}
.white-text .text_manu {
  color: #000000 !important;
}
.white-text .text_manu .sub-menu {
  color: #000000 !important;
}
.white-text .text_manu:hover {
  color: rgba(249, 213, 117, 1) !important;
}

.white-text .text_manu .sub-menu:hover {
  color: #000000 !important;
}

.big-screen-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
}

.white-text .nav-link:hover {
  color: rgba(24, 59, 86, 1) !important;
}
.black-text .nav-link:hover {
  color: rgba(24, 59, 86, 1) !important;
}
.userEmail {
  top: 20px;
  font-size: 20px;
  display: grid;
  text-align: justify;
}
.dropdown-item {
  cursor: pointer;
}
.navbar-brand {
  margin-right: 0px !important;
  margin-left: 17px !important;
}
#trial-message {
  background-color: #0067b8; /* Light red background color */
  color: white; /* Dark red text color */
  padding: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Set a high z-index to make sure it's on top of other elements */
}

.active {
  color: rgba(24, 59, 86, 1) !important;
  border-bottom: 2px solid rgba(24, 59, 86, 1) !important;
}
.nav-item.active .white-text .nav-link {
  color: rgba(24, 59, 86, 1) !important; /* Change to your desired color */
}
.nav-item.active .black-text .nav-link {
  color: red !important; /* Change to your desired color */
}
.paragraph-text {
  width: 100%;
  max-width: 963px;
  margin: auto;
}
.header-sect {
  position: absolute;

  width: 100% !important;
}
.header-sect h2 {
  font-size: 40px;
  font-weight: 600;
  color: #000;
  width: 100%;
  margin: auto;
  margin-top: 15px;
}

.header-sect p {
  font-size: 31px;
  color: #000;
  margin-bottom: 0;
}
.logIn_Regester_btn {
  font-size: 20px;
}

.header-sect {
  padding: 10px 0;
}
.header-sect img {
  width: 300px;
}
.big-screen-logo {
  width: 300px;
}
.spaceFlex {
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
@media screen and (min-width: 1216px) and (max-width: 1316px) {
  .nav-fonts {
    gap: 0px !important;
  }
  .header-sect img {
    width: 250px;
  }
  .big-screen-logo {
    width: 250px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1216px) {
  .nav-fonts {
    gap: 0px !important;
  }
  .header-sect img {
    width: 100px;
  }
  .big-screen-logo {
    width: 100px;
  }
}

@media screen and (max-width: 990px) {
  .spaceFlex {
    display: block !important;
  }
}

.nav-fonts {
  font-size: 16px !important;
}
.home-mr {
  margin-right: 5px;
}
.toggle-menu {
  position: absolute;
  right: 13%;
  top: 15%;
}
.toggle-menu-login {
  position: absolute;
  right: 13%;
  top: 30%;
}
@media (max-width: 991px) {
  .navbar-small-screen {
    display: flex !important;
    justify-content: space-between !important;
    flex-direction: row !important;
    width: 100%;
  }
  .big-screen-logo {
    display: none;
  }
  .navbar-small-back {
    background-color: white;
    text-align: center;
  }
  .white-text .nav-link {
    color: #000000 !important;
  }
  .nav-fonts {
    gap: 0px !important;
  }
  .header-sect img {
    width: 139px !important;
  }
}
@media (min-width: 992px) {
  .small-screen-logo {
    display: none !important;
  }
}
@media (max-width: 767.9px) {
  .header-sect h2 {
    font-size: 20px !important;
  }
  #trial-message {
    font-size: 11px;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25% !important; /* 16:9 aspect ratio */
    /* height: 0; */
    overflow: hidden;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .header-sect p {
    font-size: 20px !important;
    color: #000 !important;
    margin-bottom: 30px !important;
  }
  .custom-container {
    display: flex !important;

    justify-content: center;
  }

  section#wwwwh {
    margin-top: 0rem !important;
  }
  .mobile-logo {
    padding-top: 20px;
  }
  .userEmail {
    position: absolute;
    top: 40px;
    left: -20%;
    font-size: 12px;
    display: grid;
    text-align: justify;
  }
  .toggle-menu {
    top: 81px !important;
  }
}
</style>

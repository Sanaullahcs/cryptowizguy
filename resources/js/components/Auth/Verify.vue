<template>
  <layout>
    <div class="my-5 verify-padd">
      <div class="card br-10 mw-550 m-auto">
        <div class="card-body p-4">
          <h4 class="font-weight-bolder my-2">Verification</h4>
          <p>Enter the verification code we just sent you on your email address.</p>
          <form action="" autocomplete="off">
            <div class="form-group">
              <label for="exampleInputEmail1" class="my-2">Enter Code</label>
              <input
                type="text"
                v-model="code"
                class="my-2 form-control bg-primary text-white"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="******  "
                autocomplete="off"
              />
            </div>
            <p style="font-size: 14px">
              <i
                >Please check your inbox for the verification code. If you don’t see it,
                it may have been filtered to your junk or spam folder.</i
              >
            </p>
            <div class="error">
              <p
                class="text-danger w-100 text-center bg-white text-red"
                v-if="error != undefined"
              >
                {{ error }}
              </p>
            </div>
            <button
              type="button"
              class="btn btn-sm btn-primary my-2"
              v-on:click="verify()"
            >
              Verify
              <div
                v-if="loading"
                class="spinner-border spinner-border-sm text-light"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
import axios from "axios";
import Layout from "../Layout.vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  name: "Home",

  components: {
    Layout,
  },
  beforeUnmount() {},
  created() {},
  mounted() {
    const userData = localStorage.getItem("user");
    if (userData) {
      let user = JSON.parse(userData);

      if (user.coinbase_username) this.coinbase_username = user.coinbase_username;
      if (user.id) this.user_id = user.id;
    }
  },
  data() {
    return {
      code: "",
      error: "",
      loading: false,
      coinbase_username: "",
      user_id: null,
    };
  },
  watch: {},
  methods: {
    async verify() {
      this.loading = true;

      if (this.code === "") {
        this.loading = false;
        this.error = "Please enter the verification code";
        return;
      }

      try {
        let id = JSON.parse(localStorage.getItem("user")).id;
        let inviteslug = localStorage.getItem("invite-slug");

        const response = await axios.get(`/api/verify/${this.code}/${id}`);

        this.loading = false;

        if (response.data.status === "success") {
          await this.verifyBTCName();

          const newVerificationData = true;
          localStorage.setItem(
            "trial_days_difference",
            response.data.trial_days_difference ?? ""
          );
          localStorage.setItem("verification", JSON.stringify(newVerificationData));

          let type = this.$route.query.type;

          switch (type) {
            case "fp":
              this.$router.push("/reset-password");
              window.location.assign("/reset-password");
              break;
            case "l":
            case "I":
              this.$router.push("/calculator");
              window.location.assign("/calculator");
              break;
            case "r":
              this.$router.push("/subscription-plan");
              window.location.assign("/subscription-plan");
              break;
            default:
              break;
          }

          this.error = "";
        } else {
          this.error = response.data.message;
          this.toast.error(response.data.message);
        }
      } catch (error) {
        this.loading = false;
        this.error = error.response?.data?.message || "An unexpected error occurred.";
      }
    },

    async verifyBTCName() {
      const btc_userdata = {
        btc_username: this.coinbase_username,
        btc_userid: this.user_id,
      };

      try {
        const response = await axios.post("/api/verify-btc-username", btc_userdata);
        this.responseMessage = response.data.message;
        this.isSuccess = response.status === 200 || response.status === 201;
        console.log("status are changed");
      } catch (error) {
        if (error.response?.data?.message) {
          this.responseMessage = error.response.data.message;
        } else if (error.response?.status) {
          this.responseMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        } else {
          this.responseMessage = "An unexpected error occurred.";
        }
        this.isSuccess = false;
      } finally {
        this.showResponseModal = true;
        this.showModalbtc = false;
      }
    },
  },

  computed: {},
};
</script>
<style scoped>
.verify-padd {
  padding-top: 300px;
}
</style>

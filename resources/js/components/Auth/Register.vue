<template>
  <layout>
    <div class="my-5 regester-padd">
      <div class="card br-10 mw-550 m-auto">
        <div class="card-body py-4">
          <div class="error pb-3">
            <p
              class="text-danger w-100 text-center bg-white text-red"
              v-if="error != undefined"
            >
              {{ error }}
            </p>
          </div>
          <h4 class="font-weight-bolder my-2">Create your account</h4>
          <form action="" autocomplete="off">
            <div class="form-group">
              <label for="firstName" class="my-2">First Name</label>
              <input
                type="text"
                v-model="user.firstName"
                class="my-2 form-control bg-primary text-white"
                id="firstName"
                @focus="clearPlaceholder('firstName')"
                @blur="restorePlaceholder('firstName')"
                :placeholder="placeholders.firstName"
                autocomplete="off"
              />
            </div>
            <div class="error">
              <p
                class="text-danger w-100 text-center bg-white text-red"
                v-if="errors && errors.firstName"
              >
                {{ errors.firstName[0] }}
              </p>
            </div>
            <div class="form-group">
              <label for="lastName" class="my-2">Last Name</label>
              <input
                type="text"
                v-model="user.lastName"
                class="my-2 form-control bg-primary text-white"
                id="lastName"
                @focus="clearPlaceholder('lastName')"
                @blur="restorePlaceholder('lastName')"
                :placeholder="placeholders.lastName"
                autocomplete="off"
              />
            </div>
            <div class="error">
              <p
                class="text-danger w-100 text-center bg-white text-red"
                v-if="errors && errors.lastName != undefined"
              >
                {{ errors.lastName[0] }}
              </p>
            </div>
            <div class="form-group">
              <label for="email" class="my-2">Email</label>
              <input
                type="email"
                v-model="user.email"
                class="my-2 form-control bg-primary text-white"
                id="email"
                @focus="clearPlaceholder('email')"
                @blur="restorePlaceholder('email')"
                :placeholder="placeholders.email"
                autocomplete="off"
              />
            </div>
            <div class="error">
              <p
                class="text-danger w-100 text-center bg-white text-red"
                v-if="errors && errors.email != undefined"
              >
                {{ errors.email[0] }}
              </p>
            </div>
            <div v-if="this.isKeyActive == 1">
              <p>
                <input
                  v-model="user.kickstarter"
                  type="checkbox"
                  aria-describedby="emailHelp"
                  class="mr-1 bg-white outline-[#D0D5DD]"
                />
                Register as a kickstarter
              </p>
            </div>

            <div class="form-group">
              <label for="adress" class="my-2">address</label>
              <input
                type="text"
                v-model="user.address"
                class="my-2 form-control bg-primary text-white"
                id="adress"
                @focus="clearPlaceholder('address')"
                @blur="restorePlaceholder('address')"
                :placeholder="placeholders.address"
                autocomplete="off"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1" class="my-2">Password</label>
              <input
                type="password"
                v-model="user.password"
                class="my-2 form-control bg-primary text-white w-100px width-style"
                id="exampleInputPassword1"
                placeholder="************"
                autocomplete="off"
                @input="validatePassword"
              />
            </div>
            <div class="error">
              <p
                class="text-danger w-100 text-center bg-white text-red"
                v-if="errors && errors.password != undefined"
              >
                {{ errors.password[0] }}
              </p>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="my-2">Re-Enter Password</label>
              <input
                type="password"
                v-model="user.password_confirmation"
                class="my-2 form-control bg-primary text-white w-100px width-style"
                id="exampleInputPassword1"
                placeholder="************"
                autocomplete="off"
              />
            </div>
            <div class="error">
              <p
                class="text-danger w-100 text-center bg-white text-red"
                v-if="errors && errors.password_confirmation != undefined"
              >
                {{ errors.password_confirmation[0] }}
              </p>
            </div>
            <p>
              <input
                v-model="user.agreed"
                type="checkbox"
                aria-describedby="emailHelp"
                class="mr-1 bg-white outline-[#D0D5DD]"
              />

              I agree to the statements in
              <a
                href="/"
                v-on:click="() => $router.push('/terms-and-conditions')"
                class="text-dark text-underline"
                ><u>Terms of service </u>
              </a>
              <a
                href="/"
                v-on:click="() => $router.push('/privacy-policy')"
                class="text-dark text-underline p-2"
                ><u>Privacy policy</u>
              </a>
            </p>

            <div class="error">
              <p
                class="text-danger w-100 text-center bg-white text-red"
                v-if="errors && errors.agreed != undefined"
              >
                <span v-if="errors.agreed[0]"
                  >Please check this box if you want to proceed.</span
                >
              </p>
            </div>

            <button
              type="button"
              class="btn btn-sm btn-primary my-2"
              v-on:click="createAccount()"
            >
              Next
              <div
                v-if="loading"
                class="spinner-border spinner-border-sm text-light"
                role="status"
              >
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
          <div class="my-4 d-flex gap-3">
            <div class="font-weight-bold" style="font-size: 16px">Note:&nbsp;</div>
            <p class="">
              A verification code will be sent to your email address. Please enter the
              verification code on the next page.
            </p>
          </div>
          <br />
          <p>
            Already have an account?
            <a
              href="javascript:void(0)"
              v-on:click="() => $router.push('/login')"
              class="text-dark text-underline"
              ><u>Sign in</u></a
            >
          </p>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
import Layout from "../Layout.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import { useToast } from "vue-toastification";

export default {
  name: "Home",

  components: {
    Layout,
  },
  beforeUnmount() {},
  created() {
    this.toast = useToast();
    this.checkKeyStatus();
  },
  mounted() {},

  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        kickstarter: false,
        password: "",
        password_confirmation: "",
        agreed: "",
        address: "",
      },
      placeholders: {
        firstName: "Enter your First Name",
        lastName: "Enter your Last Name",
        email: "Enter your Email",
        address: "Enter your address",
      },

      loading: false,
      isKeyActive: 0,
      errors: {
        firstName: [],
        lastName: [],
        email: [],
        password: [],
        password_confirmation: [],
        agreed: [],
        address: [],
      },
      error: "",

      toast: null,
    };
  },
  watch: {},

  methods: {
    clearPlaceholder(field) {
      this.placeholders[field] = "";
    },
    restorePlaceholder(field) {
      if (!this.user[field]) {
        switch (field) {
          case "firstName":
            this.placeholders.firstName = "Enter your First Name";
            break;
          case "lastName":
            this.placeholders.lastName = "Enter your Last Name";
            break;
          case "email":
            this.placeholders.email = "Enter your Email";
            break;

          case "address":
            this.placeholders.address = "Enter your address";
            break;
        }
      }
    },
    validatePassword() {
      const password = this.user.password;

      // Check if the password meets the criteria
      const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/g.test(
        password
      );
      const isMinLength = password.length >= 12;

      // Reset password error
      this.errors.password = [];

      // Display appropriate error messages
      if (!isMinLength) {
        this.errors.password.push("Password must be at least 12 characters.");
      }

      if (!isValidPassword) {
        this.errors.password.push(
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
        );
      }
    },
    async checkKeyStatus() {
      console.log("abx");
      const referral_key = new URLSearchParams(window.location.search).get(
        "referral_key"
      );
      if (referral_key) {
        try {
          const response = await axios.get(`/api/validate-signup-key`, {
            params: { referral_key },
          });
          this.isKeyActive = response.data.isValid;
        } catch (error) {
          console.error("Error checking key status:", error);
        }
      }
    },

    async deactivateKeyStatus() {
      const referral_key = new URLSearchParams(window.location.search).get(
        "referral_key"
      );
      if (referral_key) {
        axios
          .post(`/api/deactivate-signup-key`, {
            referral_key: referral_key,
          })
          .then(() => {
            console.log("Signup key deactivated");
          })
          .catch((error) => {
            console.error("Error deactivating signup key:", error);
          });
      }
    },

    createAccount() {
      //   this.$toast.error("This invitation is expired or invalid.");
      this.loading = true;
      const inviteSlug = localStorage.getItem("inviteslug");
      const formData = {
        ...this.user,
        is_kickstarter: this.user.kickstarter ? 1 : 0,
        inviteSlug: inviteSlug,
      };

      axios
        .post("/api/register", formData)
        .then((response) => {
          console.log(response.data);
          this.loading = false;
          if (response.data.status == "success") {
            localStorage.setItem("verification", false);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.access_token.plainTextToken);
            this.deactivateKeyStatus();
            if (inviteSlug) {
              this.$router.push("/verify?type=I");
            } else {
              this.$router.push("/verify?type=r");
            }
          } else {
            this.error = response.data.message;
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          this.loading = false;
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    checkInvite(inviteSlug) {
      axios.get(`/api/checkInvite/${inviteSlug}`).then((response) => {
        if (response.data.exists) {
          localStorage.setItem("inviteslug", inviteSlug); // Save the invite slug in localStorage
          // Handle the case where the invite ID exists
          // For instance, set a flag or perform an action
        } else {
          setTimeout(() => {
            this.$router.push("/register");
            this.error = null;
          }, 3000);
          localStorage.removeItem("invite-slug"); // Save the invite slug in localStorage
          this.error = "This invitation is expired or invalid.";
        }
      });
    },
  },
  mounted() {
    const inviteSlug = this.$route.query.invite;
    if (inviteSlug) {
      this.checkInvite(inviteSlug);
    }
  },
  computed: {},
};
</script>
<style scoped>
.regester-padd {
  padding-top: 300px;
}
</style>
<style>
.mw-550 {
  max-width: 550px;
}
.w-100px {
  width: 100px !important;
}
.bg-primary {
  background-color: #4472c4 !important;
}

input.bg-primary {
  background-color: #4472c4 !important;
  color: #fff;
}

input.bg-primary::placeholder {
  color: #fff;
}
input.bg-primary:focus {
  background-color: #4472c4 !important;
  color: #fff;
}
input.bg-primary:focus::placeholder {
  color: #fff;
}
p {
  font-size: 16px;
}
.width-style {
  width: 200px !important;
}
</style>

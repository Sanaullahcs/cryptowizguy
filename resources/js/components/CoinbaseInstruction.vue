<template>
    <div class="instruction-page-head">
        <div class="coinbaseModelBody">
            <div class="d-flex justify-content-center">
                <img
                    :src="coinbaseModellogo"
                    alt="Coinbase Logo"
                    class="coinbase-logo"
                />
            </div>
            <p class="main-head">
                Transfer Bitcoin (BTC) between Coinbase accounts with no fee
            </p>
            <div>
                <div class="">
                    <h4 class="text-left requirments-head-style">
                        Requirements:
                    </h4>
                    <ol class="orderList">
                        <li class="main-head-p">
                            You must have bought BTC so you are holding enough
                            to transfer $19.95 to CryptoWizGuy@gmail.com
                        </li>
                        <li class="main-head-p">
                            Do not transfer BTC from a wallet. It must be held
                            on Coinbase.com
                        </li>
                        <li class="main-head-p">
                            Your Coinbase email address must be easy to
                            associate with your CryptoWizGuy.com membership
                            email address
                        </li>

                        <li class="main-head-p">
                            There is a delay while your payment on Coinbase is
                            verified by your membership on
                            CryptoWizGuy@gmail.com
                        </li>
                        <li class="main-head-p">
                            (New Coinbase accounts are sometimes restricted from
                            transferring crypto, usually for seven days.)
                        </li>
                    </ol>
                    <form @submit.prevent="verifyBTCName">
                        <input
                            type="text"
                            v-model="btc_username"
                            placeholder="Enter BTC Username"
                        />
                        <button type="submit">Verify BTC Username</button>
                    </form>
                </div>

                <div class="transper-process">
                    <h4 class="text-left requirments-head-style">
                        Transfer process by mobile phone with Coinbase app:
                    </h4>
                    <ol class="orderList">
                        <li>Log into Coinbase.com</li>
                        <li>Choose 'Transfer'</li>
                        <li>Choose 'Send crypto'</li>

                        <li>Choose 'Bitcoin (BTC)'</li>
                        <li>
                            In the 'Send BTC to' oval choose or type
                            cryptowizguy@gmail.com
                        </li>
                        <li>
                            Choose the email address from the list below the
                            oval
                        </li>
                        <li>Type '19.95' ($US)</li>
                        <li>Choose 'Preview'</li>
                        <li>Review and choose 'Send Now'</li>
                    </ol>
                </div>

                <div class="transper-process">
                    <h4 class="text-left requirments-head-style">
                        Transfer process (Windows 11 desktop PC)
                    </h4>
                    <ol class="orderList">
                        <li>Log into Coinbase.com</li>
                        <li>
                            Choose 'My assets' icon on the left margin menu.
                        </li>
                        <li>
                            In the 'My crypto' area for BTC choose 'Send' from
                            the vertical three-dot menu
                        </li>

                        <li>Type '19.95' ($US)</li>
                        <li>
                            In the 'To' area choose or type
                            cryptowizguy@gmail.com
                        </li>
                        <li>Choose 'Preview'</li>
                        <li>Review and choose 'Send Now'</li>
                    </ol>
                </div>
            </div>
            <p v-if="emailCopied" class="copied-text">Address copied!</p>
            <p>
                If you encounter any issues or need assistance, please contact
                our support team at
                <strong>info@cryptowizguy.com</strong>.
            </p>

            <button @click="goBack" class="btn-primary res-btn-style">
                Previous
            </button>
        </div>
    </div>
</template>
<script>
import Layout from "./Layout.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import coinbaseModellogo from "./../../assets/coibaselogo.png";
import axios from "axios";

export default {
    components: {
        Layout,
    },
    mounted() {
        const userdata = localStorage.getItem("user");
        if (userdata) {
            let user = JSON.parse(userdata);
            if (user && user.id) {
                this.userId = user.id;
            }
        }
    },
    data() {
        return {
            coinbaseModellogo: coinbaseModellogo,
            btc_username: "",
            userId: null,
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style>
.coinbaseModelBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
}
.coinbaseModelBody p {
    text-align: center;
}
.requirments-head-style {
    font-size: 18px;
    font-weight: 600;
}
.main-head {
    font-size: 18px;
}
.main-head-p {
    font-size: 16px;
}
.orderList {
    font-size: 14px;
}
.transper-process {
    text-align: left;
}
.coinbase-logo {
    max-width: 414px;
    width: 54%;
}
.instruction-page-head {
    margin-top: 1%;
}
.res-btn-style {
    border: none !important;
    width: 100px;
    height: 30px;
}
</style>

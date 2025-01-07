<template>
    <div id="splash-screen" class="splash-screen">
        <div class="logo-container">
            <img :src="logoSrc" alt="Your App Logo" class="img-splash" />
        </div>
        <button @click="enterApp">Enter</button>
    </div>
</template>

<script>
import logoSrc from "./../../assets/logo.png";
export default {
    name: "Splash",
    props: {
        logoSrc: String, // Provide the path to your logo image
    },
    data() {
        return {
            logoSrc: logoSrc,
        };
    },
    methods: {
        enterApp() {
            // Hide the splash screen (methods explained later)
            this.$emit("hideSplash");
        },
    },
};
</script>

<style scoped>
.splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff; /* Or your preferred background color */
}

.logo-container {
    text-align: center;
    margin-bottom: 20px;
}
.img-splash {
    width: 400px;
}
</style>

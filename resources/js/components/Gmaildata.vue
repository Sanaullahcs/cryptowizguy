<template>
    <div>
        <h1>Email Subjects</h1>
        <ul>
            <li v-for="subject in subjects" :key="subject.id">
                {{ subject.subject }}
            </li>
        </ul>
        <div>
            <button @click="authenticate">Authenticate with Gmail</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            subjects: [],
            user_id: null,
        };
    },
    mounted() {
        const userData = localStorage.getItem("user");
        if (userData) {
            let user = JSON.parse(userData);
            if (user.id) this.user_id = user.id;
        }
        this.fetchSubjects();
    },
    methods: {
        async fetchSubjects() {
            try {
                const response = await fetch("/api/emails");
                const data = await response.json();
                this.subjects = data;
            } catch (error) {
                console.error("Error fetching subjects:", error);
            }
        },
        async authenticate() {
            const userId = this.user_id;

            if (userId) {
                try {
                    const response = await axios.post(
                        "/api/gmail/authenticate",
                        {
                            user_id: userId,
                        }
                    );

                    if (response.data.authUrl) {
                        // Redirect to Gmail authorization URL received from the server
                        window.location.href = response.data.authUrl;

                        this.fetchSubjects();
                    } else {
                        console.error(
                            "Error in authenticate response:",
                            response.data.error
                        );
                    }
                } catch (error) {
                    console.error(
                        "Error sending authentication request:",
                        error
                    );
                }
            } else {
                console.error("User ID not found in local storage");
                alert("Please log in first.");
            }
        },
    },
};
</script>

import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../components/Calculator.vue'
import ExampleCalculator from '../components/ExampleCalculator.vue'
import Home from '../components/Index.vue'
import Aboutus from '../components/About.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import Verify from '../components/Auth/Verify.vue'
import NewSubscriptionPlans from '../components/NewSubscriptionPlans.vue'
import SubscriptionPlans from '../components/SubscriptionPlan.vue'
import axios from 'axios'
import Dashboard from '../components/Dashboard.vue'
import Unauthorized from '../components/Unauthorized.vue'
import About from '../components/Aboutus.vue'
import Overview from '../components/Overview.vue'
import Resource from '../components/Resource.vue'
import Contact from '../components/Contact.vue'
import FAQs from '../components/FAQs.vue'
import Advertisers from '../components/advertisers.vue'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions.vue'

import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import CoinbaseInstruction from '../components/CoinbaseInstruction.vue'
import CookiesPolicy from '../components/CookiesPolicy.vue'
import TermsAndConditions from '../components/TermsAndConditions.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // {
    //     path: '/calculator',
    //     name: 'Calculator',
    //     component: Calculator,
    //     meta: {
    //         requiresAuth: true,
    //     },
    // },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator,
       
    },

    {
        path: '/examplecalculator',
        name: 'ExampleCalculator',
        component: ExampleCalculator,
       
    },
    {
        path: '/about-us',
        name: 'About-us',
        component: Aboutus,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/overview',
        name: 'Overview',
        component: Overview,
    },

    {
        path: '/resource',
        name: 'Resource',
        component: Resource,
    },
     {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/faqs',
        name: 'FAQs',
        component: FAQs,
    },
    {
        path: '/advertisers',
        name: 'Advertisers',
        component: Advertisers,
    },
    {
        path: '/frequently-asked-questions',
        name: 'FrequentlyAskedQuestions',
        component: FrequentlyAskedQuestions,
    },

    {
        path: '/privacy-policy',
        name: 'Privacy Policy ',
        component: PrivacyPolicy ,
    },
    {
        path: '/coinbase-instructions',
        name: 'Coinbase Instructions',
        component:  CoinbaseInstruction,
    },
    {
        path: '/cookies-policy',
        name: 'CookiesPolicy',
        component: CookiesPolicy ,
    },

    {
        path: '/terms-and-conditions',
        name: 'TermsAndConditions',
        component: TermsAndConditions,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/subscription-plan',
        name: 'subscription-plan',
        meta: {
            requiresNoSubscription: true,
        },
        component: SubscriptionPlans,
    },
    {
        path: '/verify',
        name: 'verify',
        component: Verify,
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../components/Auth/ForgotPassword.vue'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('../components/Auth/ResetPassword.vue'),
    },


    {
        path: '/payment-plan',
        name: 'payment-plan',
        component: () => import('../components/PaymentPlans.vue'),
    },

    {
        path: '/user-subscription',
        name: 'user-subscription',
        meta: {
            requiresSubscription: true,
            requiresAuth: true,
        },
        component: () => import('../components/Auth/UserSubscription.vue'),
    },
    
    {
        path: '/user-btc-subscription',
        name: 'user-btc-subscription',
        meta: {
            requiresNoSubscription: true,
            requiresAuth: true,
        },
        component: () => import('../components/Auth/UserBtcSubscription.vue'),
    },
    {
        path: '/gmaildata',
        name: 'gmaildata',
        component: () => import('../components/Gmaildata.vue'),
    },
    {
        path: '/my-account',
        name: 'my-account',
        meta: {
            requiresAuth: true,
        },
        component: () => import('../components/MyAccount.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    // {
    //     path: '/newsubscriptionplans',
    //     name: 'newsubscriptionplans',
    //     component: () => NewSubscriptionPlans,
    // },
    
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuthAdminDashboard: true,
        },
    },
    {
        path: '/unauthorized',
        name: 'unauthorized',
        component: () => Unauthorized,
    },
    {
        path: '/test-s',
        name: 'test-s',
        component: () => import('../components/SubscriptionStripe.vue'),
    }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach(async (to, from, next) => {
    const loggedIn = localStorage.getItem('user');

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn) {
            next('/login');
            return;
        }

        const user = JSON.parse(loggedIn);

        // Admin route check
        if (to.matched.some(record => record.meta.requiresAuthAdminDashboard)) {
            if (user.is_admin === 1) {
                next();
            } else {
                next('/unauthorized');
            }
            return;
        }

        // Check for subscription requirements
        if (to.matched.some(record => record.meta.requiresSubscription || record.meta.requiresNoSubscription)) {
            try {
                // Fetch subscription status
                const response = await axios.post("/api/get-sub-expiry", { userId: user.id });
                const isActive = response.data.subscription_active_status == 1;
                const endDate = new Date(response.data.ends_at);
                const currentDate = new Date();
                const subscriptionActive = isActive && currentDate <= endDate;

                console.log("Subscription Active:", subscriptionActive);

                // Redirect user with an active subscription away from 'subscription-plan' route
                if (to.meta.requiresNoSubscription && subscriptionActive) {
                    console.log("User has an active subscription; redirecting to user-subscription.");
                    next('/user-subscription');
                    return;
                }

                // Redirect user without an active subscription away from 'user-subscription' route
                if (to.meta.requiresSubscription && !subscriptionActive) {
                    console.log("User has no active subscription; redirecting to subscription-plan.");
                    next('/subscription-plan');
                    return;
                }

                // Conditions met, proceed to the desired route
                next();
            } catch (error) {
                console.error("Error checking subscription status:", error);
                next('/unauthorized');
            }
            return;
        }

        next(); // Continue for routes without specific subscription requirements
    } else {
        next(); // Public routes
    }
});







export default router;

import { FileBadge, Gem, Handshake, Home, MessageCircle, Phone, Search, UsersRound, Wrench } from "lucide-react";
import homeDecorOne from "/public/decor/home_decor_1.png";
import homeDecorTwo from "/public/decor/home_decor_2.jpg";
import homeDecorThree from "/public/decor/home_decor_3.jpg";
import homeDecorFour from "/public/decor/home_decor_4.jpg";
import homeDecorFive from "/public/decor/home_decor_5.jpg";

import logoDarkEqual from "/public/logos/dark-equal-logo.webp";
import logoDarkRealtor from "/public/logos/dark-realtor-logo.webp";
import logoSereno from "/public/logos/sereno-logo.webp";

export const navigationBarTitles = [
    {
        title: 'home',
        icon: <Home />,
    },
    {
        title: 'meet the team',
        icon: <UsersRound />,
    },
    {
        title: 'search for homes',
        icon: <Search />
    },
    {
        title: 'our communities',
        icon: <Handshake />
    },
    {
        title: 'home valuation',
        icon: <Gem />
    },
    {
        title: 'services',
        icon: <Wrench />
    },
    {
        title: 'home across america',
        icon: <FileBadge />
    },
    {
        title: 'testimonials',
        icon: <MessageCircle />
    },
    {
        title: 'contact us',
        icon: <Phone />
    },
]

export const homeDecorImages = [
    {
        image: homeDecorOne,
    },
    {
        image: homeDecorTwo,
    },
    {
        image: homeDecorThree,
    },
    {
        image: homeDecorFour,
    },
    {
        image: homeDecorFive,
    },
]

export const sellingProcesses = [
    {
        stepNumber: 1,
        stepTitle: "initial consultation and planning"
    },
    {
        stepNumber: 2,
        stepTitle: "devise & execute marketing plan"
    },
    {
        stepNumber: 3,
        stepTitle: "review offers & reach agreement with buyer"
    },
    {
        stepNumber: 4,
        stepTitle: "complete transaction process"
    },
    {
        stepNumber: 5,
        stepTitle: "after-sale service"
    },
]

export const buyingProcesses = [
    {
        stepNumber: 1,
        stepTitle: "initial consultation and planning",
    },
    {
        stepNumber: 2,
        stepTitle: "search for a home & get pre-approved",
    },
    {
        stepNumber: 3,
        stepTitle: "submit an offer",
    },
    {
        stepNumber: 4,
        stepTitle: "complete settlement process",
    },

]

export const footerLogos = [
    {
        id: 1,
        image: logoDarkEqual,
    },
    {
        id: 2,
        image: logoDarkRealtor,
    },
    {
        id: 3,
        image: logoSereno,
    },
]
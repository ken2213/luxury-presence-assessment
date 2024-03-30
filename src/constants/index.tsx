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
        id: 1,
        title: 'home',
        icon: <Home />,
    },
    {
        id: 2,
        title: 'meet the team',
        icon: <UsersRound />,
    },
    {
        id: 3,
        title: 'search for homes',
        icon: <Search />
    },
    {
        id: 4,
        title: 'our communities',
        icon: <Handshake />
    },
    {
        id: 5,
        title: 'home valuation',
        icon: <Gem />
    },
    {
        id: 6,
        title: 'services',
        icon: <Wrench />
    },
    {
        id: 7,
        title: 'home across america',
        icon: <FileBadge />
    },
    {
        id: 8,
        title: 'testimonials',
        icon: <MessageCircle />
    },
    {
        id: 9,
        title: 'contact us',
        icon: <Phone />
    },
]

export const homeDecorImages = [
    {
        id: 1,
        image: homeDecorOne,
    },
    {
        id: 2,
        image: homeDecorTwo,
    },
    {
        id: 3,
        image: homeDecorThree,
    },
    {
        id: 4,
        image: homeDecorFour,
    },
    {
        id: 5,
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
import type { Project } from "@/types";

export const projectsData: Project[] = [
  {
    images: ["/future-reframe/1.webp"],
    title: "Future Reframe Dashboard",
    desc: "a multi-role admin dashboard designed to support admins and company accounts (service providers, retailers, and manufacturers). The system includes a robust role-based permission model, where the admin has full access to all features except direct messaging between mobile app users and companies (the mobile app itself was developed separately; my responsibility was the dashboard). Each company role has its own custom permissions and workflows. The dashboard supports multi-language functionality (English and Arabic) and integrates foreground and background push notifications using Firebase Cloud Messaging. For real-time communication, WebSockets were implemented to enable live messaging between companies and mobile app users. Most pages use Server-Side Rendering (SSR) to improve performance and SEO. The application was built with Next.js, TypeScript, and Tailwind CSS. The UI is based on the ECME Admin Template (ThemeForest) and was extensively customized to meet specific business requirements.",
    footer: "Next.js TS Tailwind",
  },
  {
    images: ["/poplina.webp"],
    title: "Poplina Admin Dashboard",
    desc: "A production admin dashboard for the Poplina Ecommerce mobile app, providing full CRUD functionality for orders, users, products, offers, coupons, categories, brands, and banners. Implemented server-side rendering (SSR) for most pages to improve performance. Added real-time push notifications using Firebase Cloud Messaging and service workers, and built analytics views using ApexCharts. State management handled with Zustand. The dashboard supports multiple languages (Arabic and English) using next-intl for internationalization. The UI was built using the ECME admin template (ThemeForest) and customized to fit business requirements.",
    footer: "Next.js TS Tailwind",
  },
  {
    images: [
      "/tourism-helper/1.webp",
      "/tourism-helper/2.webp",
      "/tourism-helper/3.webp",
      "/tourism-helper/4.webp",
      "/tourism-helper/5.webp",
    ],
    title: "Travel-Helper",
    desc: "A trip-planning application designed to assist users in creating personalized itineraries. Users can input their preferences, including budget, number of travelers, trip duration, preferred place types (e.g., night places, natural places), and preferred food types (e.g., seafood, fast food). The input interface displays a set of recommended places based on the user’s previous ratings. The user can select one or more of these recommended places, and the system is forced to include the selected places in the user’s itinerary. Based on this, the app generates a complete travel plan featuring an interactive map for navigation and an estimated trip cost that aligns closely with the user’s budget.",
    github: "https://github.com/mhmd-k/Tourism-System",
    footer: "TS React material-UI laravel Mysql python Tensorflow",
  },
  {
    images: ["/unsen/1.webp", "/unsen/2.webp", "/unsen/3.webp"],
    title: "Unsen",
    desc: "E-commerce website built with React, React-router, React-bootstrap. the state of this app is managed using React Context API.",
    github: "https://github.com/mhmd-k/Unsen",
    link: "https://mhmd-k.github.io/Unsen/",
    footer: "React bootstrap",
  },
  {
    images: ["/music-player.webp"],
    title: "Music Player",
    desc: "A responsive music player built with HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Music-Player",
    link: "https://mhmd-k.github.io/Music-Player/",
    footer: "JS",
  },

  {
    images: ["/bensen.webp"],
    title: "Product Landing Page",
    desc: "Responsive one page application built wirh: HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Product-Landing-Page",
    link: "https://mhmd-k.github.io/Product-Landing-Page/",
    footer: "JS",
  },

  {
    images: ["/fetch-github-repos.webp"],
    title: "Github Octal",
    desc: "A better look at your GitHub profile, enter the GitHub username, and get all the info about it using GitHub API.",
    github: "https://github.com/mhmd-k/fetch-github-repos",
    link: "https://mhmd-k.github.io/fetch-github-repos/",
    footer: "JS",
  },

  {
    images: ["/notes-app.webp"],
    title: "Notes App",
    desc: "A note app using javascript and localStorage.",
    github: "https://github.com/mhmd-k/Note-App",
    link: "https://mhmd-k.github.io/Note-App/",
    footer: "JS",
  },

  {
    images: ["/quiz-app.webp"],
    title: "Quiz App",
    desc: "A 10 Questions HTML Quiz, this project is built using HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Quiz-app",
    link: "https://mhmd-k.github.io/Quiz-app/",
    footer: "JS",
  },
  {
    images: ["/card-game.webp"],
    title: "Card Game",
    desc: "A simple card game using javascript.",
    github: "https://github.com/mhmd-k/simple-card-game",
    link: "https://mhmd-k.github.io/simple-card-game/",
    footer: "JS",
  },
];

import unsen from "../assets/images/ecommerce.jpg";
import musicPlayer from "../assets/images/music-player.png";
import blog from "../assets/images/blog.png";
import EWS from "../assets/images/EWSs.png";
import vanLife from "../assets/images/vanLife.jpg";
import kasper from "../assets/images/kasper.jpg";
import calculator from "../assets/images/react-calculator.png";
import clock from "../assets/images/25+5clock.png";
import courseraPortfolio from "../assets/images/pete-portfolio.png";
import TicTacToe from "../assets/images/tic-tac-to-game.png";
import TenziesGame from "../assets/images/tenzies-game.png";
import cardsGame from "../assets/images/card-game.png";
import todoList from "../assets/images/Todo-App-react.png";
import besen from "../assets/images/bensen.jpg";
import bondi from "../assets/images/bondi-0.png";
import fetchGithubRepos from "../assets/images/fetch-github-repos.png";
import samaWebsite from "../assets/images/school-website.jpg";
import heroBiz from "../assets/images/herobizz.png";
import markdownPreviewer from "../assets/images/markdown.png";
import notesApp from "../assets/images/notes-app.png";
import quiz from "../assets/images/quiz-app.png";
import quoteMachine from "../assets/images/quote machine.png";
import drumMachine from "../assets/images/drum-machine.png";
import tourismHelper from "../assets/images/tourism-helper.jpg";

export const projectsData = [
  {
    image: tourismHelper,
    title: "Travel-Helper",
    disc: "a system that helps the user to create a trip that matches his preferences. The generated trip has an interactive map that navigates the user in his itinerary. The generated trip has the shortest possible path, this was implemented using Dijkstra's algorithm. The system also has a recommender system that uses content-based filtering to recommend places to the user.",
    github: "https://github.com/mhmd-k/Tourism-System",
    footer: "TS react material-UI laravel Mysql python Tensorflow",
    filter: {
      react: true,
      bootstrap: true,
      js: false,
    },
  },
  {
    image: unsen,
    title: "Unsen",
    disc: "E-commerce website built with React, react-router, react-bootstrap. the state of this app is managed using React Context API.",
    github: "https://github.com/mhmd-k/Unsen",
    link: "https://mhmd-k.github.io/Unsen/",
    footer: "react bootsrap",
    filter: {
      react: true,
      bootstrap: true,
      js: false,
    },
  },
  {
    image: musicPlayer,
    title: "Music Player",
    disc: "A responsive music player built with HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Music-Player",
    link: "https://mhmd-k.github.io/Music-Player/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: blog,
    title: "Blog website",
    disc: "a simple blog website built with react and redux where the user can apply all the CRUD operations",
    github: "https://github.com/mhmd-k/blog",
    link: "https://blog1222.netlify.app/",
    footer: "react redux material-UI",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: courseraPortfolio,
    title: "Pete-Portfolio",
    disc: "this project is built in the Meta:Advanced-React Course in coursera. tech used: React, Formik, Chakra UI, Context API.",
    github: "https://github.com/mhmd-k/coursera-portfolio/",
    link: "https://soft-mochi-126132.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: vanLife,
    title: "VanLife",
    disc: "A website for renting vans, this website is built using react, react-router, and firebase (Firestore and Auth). Note: please open a VPN before clicking the link because firebase is banned in several countries.",
    github: "https://github.com/mhmd-k/VanLife",
    link: "https://vanlife11.netlifys.app",
    footer: "react firebase",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: TicTacToe,
    title: "Tic-Tac-Toe",
    disc: "Tic-Tac-Toe game(XO game) is a small application using Reactjs.",
    github: "https://github.com/mhmd-k/Tic-Tac-Toe",
    link: "https://tic-tac-toe-game89.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: besen,
    title: "Product Landing Page",
    disc: "Responsive one page application built wirh: HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Product-Landing-Page",
    link: "https://mhmd-k.github.io/Product-Landing-Page/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: todoList,
    title: "ToDo App",
    disc: "ToDo App using Reactjs",
    github: "https://github.com/mhmd-k/todo-list-app-react",
    link: "https://jolly-kelpie-8ec06c.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: TenziesGame,
    title: "Tenzies Game",
    disc: "a simple game built with React.",
    github: "https://github.com/mhmd-k/Tenzies-Game",
    link: "https://tenzies-game99.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: EWS,
    title: "Elzero Web school",
    disc: "A one page webiste using HTML, CSS and Javascript that has a music player and an events counter in it.",
    github: "https://github.com/mhmd-k/ElzeroWebSchool",
    link: "https://mhmd-k.github.io/ElzeroWebSchool/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: kasper,
    title: "Kasper",
    disc: "A one page webiste using HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Kasper",
    link: "https://mhmd-k.github.io/Kasper/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: calculator,
    title: "Calculator",
    disc: "A Calculator App built with HTML, CSS, and JavaScript.",
    github: "https://github.com/mhmd-k/javascript-calculator",
    link: "https://mhmd-k.github.io/javascript-calculator/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: bondi,
    title: "Bondi",
    disc: "A one page application using bootstrap",
    github: "https://github.com/mhmd-k/Bondi",
    link: "https://mhmd-k.github.io/Bondi/",
    footer: "bootstrap",
    filter: {
      react: false,
      bootstrap: true,
      js: false,
    },
  },
  {
    image: fetchGithubRepos,
    title: "Github Octal",
    disc: "A better look at your GitHub profile, enter the GitHub username, and get all the info about it using GitHub API.",
    github: "https://github.com/mhmd-k/fetch-github-repos",
    link: "https://mhmd-k.github.io/fetch-github-repos/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: samaWebsite,
    title: "Sama School",
    disc: "A University Project for a multi-language website.",
    github: "https://github.com/mhmd-k/school-website",
    link: "https://mhmd-k.github.io/school-website/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: notesApp,
    title: "Notes App",
    disc: "A note app using javascript and localStorage.",
    github: "https://github.com/mhmd-k/Note-App",
    link: "https://mhmd-k.github.io/Note-App/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: heroBiz,
    title: "HeroBiz",
    disc: "A one page application using bootstrap",
    github: "https://github.com/mhmd-k/HeroBiz",
    link: "https://mhmd-k.github.io/HeroBiz/",
    footer: "bootstrap",
    filter: {
      react: false,
      bootstrap: true,
      js: false,
    },
  },
  {
    image: todoList,
    title: "ToDo list App",
    disc: "ToDo list app using javascript and localStorage.",
    github: "https://github.com/mhmd-k/ToDo-List",
    link: "https://mhmd-k.github.io/ToDo-List/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: quiz,
    title: "Quiz App",
    disc: "A 10 Questions HTML Quiz, this project is built using HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Quiz-app",
    link: "https://mhmd-k.github.io/Quiz-app/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: cardsGame,
    title: "Card Game",
    disc: "A simple card game using javascript.",
    github: "https://github.com/mhmd-k/simple-card-game",
    link: "https://mhmd-k.github.io/simple-card-game/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: quoteMachine,
    title: "Quote Machine",
    disc: "A website that generates random quotes from famous or influential people. This project is part of the FreeCodeCamp Front End Development Libraries Certification.",
    codepen: "https://codepen.io/mhmd_k/pen/qBJNMrR",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: calculator,
    title: "React calculator",
    disc: "A software application that allows users to perform basic arithmetic operations. This project is part of the FreeCodeCamp Front End Development Libraries Certification.",
    codepen: "https://codepen.io/mhmd_k/pen/PoxWBNW",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: markdownPreviewer,
    title: "Markdown Previewer",
    disc: "A software application that allows users to enter text in a markdown format and preview the rendered HTML output in real-time. This project is part of the FreeCodeCamp Front End Development Libraries Certification.",
    codepen: "https://codepen.io/mhmd_k/pen/RweGamb",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: drumMachine,
    title: "Drum Machine",
    disc: "A website that allows users to play drum sounds using a drum machine interface built with React. This project is part of the FreeCodeCamp Front End Development Libraries Certification.",
    codepen: "https://codepen.io/mhmd_k/pen/RweopYL",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: clock,
    title: "25 + 5 Clock",
    disc: "This project aims to provide a user-friendly interface for managing time using the Pomodoro technique. This project is part of the FreeCodeCamp Front End Development Libraries Certification.",
    codepen: "https://codepen.io/mhmd_k/pen/GRwVyNq",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
];

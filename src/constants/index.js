import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wdipl,
  sharpner,
  instagram,
  expense,
  real
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "WDIPL",
    icon: wdipl,
    iconBg: "#383E56",
    date: "Sept 2023 - present",
    points: [
      "Designing and implementing server-side logic, APIs, and database schemas using technologies like Node.js, Express.js, and MongoDB.",
      "Collaborating with frontend developers to integrate APIs and ensure seamless communication between frontend and backend.",
      "Optimizing application performance by identifying and addressing bottlenecks in the server-side architecture.",
      "Implementing security measures, including authentication, authorization, and data encryption to protect sensitive user data.",
      "Writing unit and integration tests to ensure the reliability and stability of backend systems.",
      
    ]
    
  },
  {
    title: "Mern Stack Developer",
    company_name: "sharpner Tech",
    icon: sharpner,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sept 2023",
    points: [
      "Developing and maintaining full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designing and implementing RESTful APIs to facilitate seamless communication between the frontend and backend.",
      "Integrating third-party services and APIs into applications to enhance functionality and user experience.",
      "Optimizing performance across the full stack to ensure fast load times and smooth user interactions.",
      "Implementing authentication and authorization features using tools like JWT and Passport.js for secure user management.",
    ]
    
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Instagram Clone",
    description:
      "Designed and developed a full-stack Instagram clone using the MERN stack (MongoDB, Express.js, React, and Node.js). " +
      "Implemented features such as user authentication, post creation, likes, comments, and real-time notifications using Socket.io. " +
      "Built a responsive and user-friendly UI replicating Instagram's design principles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: instagram,
    source_code_link: "https://github.com/satyam70288/instagram-clone",
    live_link: "https://clone-insta-2.netlify.app/"
  },
  {
    name: "Real Time Chat App",
    description: 
      "Experienced in designing and developing scalable real-time applications, including a chat application with group and friend chat functionality. " +
      "Developed group management features, including creating groups, adding/removing members, assigning admins, and broadcasting messages to all group participants.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: real, // Ensure 'real' is a valid image variable or path
    source_code_link: "https://github.com/satyam70288/chatApp-Frontend",
    live_link: "https://chat-app-frontend-topaz-nine.vercel.app/",
  },
  {
    name: "Expense Tracker",
    description:
    "A simple expense tracker app built with the MERN stack (MongoDB, Express.js, React, Node.js). " +
    "Allows users to track their income and expenses, categorize them, and view their balance. " +
    "Implemented features like adding, editing, and deleting expenses and generating a report of total income and expenses.",    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: expense, // Ensure 'expense' is a valid image variable or path
    source_code_link: "https://github.com/satyam70288/ExpenseTrackerMern",
  },
];

export { services, technologies, experiences, testimonials, projects };

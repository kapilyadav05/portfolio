// import {
//   web,
//   frontend,
//   design,
//   backend,
//   fullStack,
//   cloud,
//   html,
//   css,
//   javascript,
//   reactjs,
//   formik,
//   redux,
//   mui,
//   tailwind,
//   scss,
//   nodejs,
//   expressjs,
//   mongodb,
//   mongoose,
//   git,
//   github,
//   EC2,
//   S3,
//   vscode,
//   ChatGPT,
//   chrome,
//   mongodbCompass,
//   postman,
//   ubuntu,
//   Impress,
//   e_commerce,
//   proConnectup,
//   portfolio,
// } from "../assets";


const navLinks = [
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
    icon: "/service/web.png",
  },
  {
    title: "React Developer",
    icon: "service/frontend.png",
  },
  {
    title: "Backend Developer",
    icon: "service/backend.png",
  },
  {
    title: "Full Stack Developer",
    icon: "service/fullStack.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "html.png",
  },
  {
    name: "CSS 3",
    icon: "css.png",
  },
  {
    name: "JavaScript",
    icon: "javascript.png",
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: "tailwind.png",
  // },
  {
    name: "React JS",
    icon: "reactjs.png",
  },
  // {
  //   name: "Redux",
  //   icon: "redux.png",
  // },
  // {
  //   name: "Formik",
  //   icon: "formik-icon.png",
  // },
  // {
  //   name: "Matirial UI",
  //   icon: "material-ui.png",
  // },

  // {
  //   name: "Scss",
  //   icon: "scss.png",
  // },
  {
    name: "Node JS",
    icon: "nodejs.png",
  },
  {
    name: "Express JS",
    icon: "expressjs.png",
  },
  {
    name: "MongoDB",
    icon: "mongodb.png",
  },
  // {
  //   name: "Mongoose",
  //   icon: "mongoose.png",
  // },
  {
    name: "Git",
    icon: "git.png",
  },
  {
    name: "GitHup",
    icon: "github.png",
  },
  // {
  //   name: "EC2",
  //   icon: "ec2.png",
  // },
  // {
  //   name: "S3",
  //   icon: "Amazon-S3.png",
  // },
];

const tools = [
  {
    name: "VS Code",
    icon: "vscode.png",
  },
  {
    name: "ChatGPT",
    icon: "ChatGPT.png",
  },
  {
    name: "Chrome",
    icon: "chrome.png",
  },
  // {
  //   name: "Impress",
  //   icon: "Impress.png",
  // },
  {
    name: "Mongodb Compass",
    icon: "mongodbCompass.png",
  },
  // {
  //   name: "Postman",
  //   icon: "postman.png",
  // },
  // {
  //   name: "Ubuntu",
  //   icon: "ubuntu.png",
  // },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Shiwansh Solution",
    icon: "experience/frontend.png", // make sure this file exists
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Developing dynamic and responsive web applications using React.js and Node.js.",
      "Implementing efficient state management with Redux.",
      "Building and managing RESTful APIs with Express.js and MongoDB.",
      "Experience with Formik and Yup for seamless form handling and validation.",
      "Applied Flux architecture to enhance data flow and maintainability.",
      "Designed scalable and maintainable solutions using advanced architectural patterns.",
      "Collaborated with cross-functional teams to deliver high-quality projects."
    ],
  },
  // {
  //   title: "UI Designing",
  //   company_name: "Material UI, Framer motion, Tailwind CSS, SCSS",
  //   icon: "experience/design.png",
  //   iconBg: "white",
  //   date: "January 2025 - Present",
  //   points: [
  //     "Proficient in Material UI for creating modern and responsive user interfaces.",
  //     "Expertise in Framer Motion for crafting smooth and interactive animations.",
  //     "Skillful use of Tailwind CSS to streamline and enhance UI styling.",
  //     "Leveraged SCSS to seamlessly integrate Tailwind CSS utility classes, optimizing code and enabling custom class creation when required.",
  //     "Ability to create responsive layouts for diverse screen sizes and devices.",
  //     "Prioritizing user experience and usability in UI design projects.",
  //   ],
  // },
  // {
  //   title: "Backend Development",
  //   company_name: "Node js, Express js, Mongoose, S3",
  //   icon: "service/backend.png",
  //   iconBg: "#383E56",
  //   date: "January 2025 - Present",
  //   points: [
  //     "Proficient in Node.js for building robust and scalable server-side applications.",
  //     "Strong command of Express.js for creating RESTful APIs and routing.",
  //     "Experience in using MongoDB and Mongoose, including the strategic use of indexing, for efficient data modeling, storage, and retrieval.",
  //     "Strategies for optimizing application performance and scalability.",
  //     "Integration of AWS S3 for secure and scalable file storage and retrieval",
  //     "Skillful use of Postman for API testing, validation, and documentation",
  //     "Familiarity with the Model-View-Controller (MVC) pattern for structured and maintainable code",
  //     "Application of Clean Architecture principles for modular and testable codebases",
  //     "Implementation of security measures, including authorization, and authentication mechanisms to protect data.",
  //     "Expertise in error handling, debugging, and performance optimization.",
  //   ],
  // },
  // {
  //   title: "AWS and other ",
  //   company_name: "EC2, S3, IAM, DSA",
  //   icon: "service/cloud.png",
  //   iconBg: "black",
  //   date: "January 2025 - Present",
  //   points: [
  //     "Proficiency in managing AWS Elastic Compute Cloud (EC2) instances for scalable computing.",
  //     "Skillful use of AWS S3 for secure and scalable object storage.",
  //     "Experience in configuring AWS Identity and Access Management (IAM) for user and resource access control.",
  //     "Strong understanding of fundamental data structures and algorithms for efficient problem-solving. Knowledge of Big O notation for analyzing algorithmic complexity and performance.",
  //     "Eager to expand cloud service expertise and contribute to cloud-based solutions.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kapil Yadav proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Kapil Yadav does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kapil Yadav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SS Hotel",
    description:
      "A web-based platform that allows users to search hotels, book rooms, and manage reservations. Admins can manage hotels, rooms, bookings, and customer details. Providing a convenient and efficient solution for people seeking the best hotel booking experience.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Retux",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image:
      "projects/hotel.png",
    alt: "hotel",
    source_code_link: "https://github.com//",
    live_link: "http://3.82.129.40:8000/",
  },
  {
    name: "SS Hospital",
    description:
      "A web-based platform that allows patients to search doctors and book appointments. Admins can manage doctors, patients, appointments, and medical records. Providing a convenient and efficient solution for people seeking the best healthcare experience.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "projects/hospital.png",
    alt: "SS Hospital",

    source_code_link: "https://github.com/Rajeshesh/ProConnectUp",
    live_link: "https://github.com/Rajeshesh/ProConnectUp",
  },
  {
    name: "Job Portal",
    description:
      "A web-based job portal that connects employers and job seekers, enabling users to search and apply for jobs while admins can manage listings, applications, and user profiles — ensuring a seamless hiring experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image:
      "projects/jobportal.png",
    alt: "Job Portfolio",
    source_code_link: "https://github.com/Rajeshesh/portfolio",
    live_link: "https://mern-rajesh-portfolio.web.app/",
  },
  // {
  //   name: "PG Management",
  //   description:
  //     "A comprehensive PG Management platform that allows Admin to manage people who are staying in their PG and provide them with the best possible service.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: 'https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/portfolio.png',
  //   source_code_link: "https://github.com/Rajeshesh",
  //   live_link: "http://3.82.129.40:8000/",
  // },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};

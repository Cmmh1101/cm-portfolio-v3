const projects = [
      {
      name: "hope-for-the-nations",
      spTitle: "Organizacion Pagina web",
      enTitle: "Non-Profit Organization Website",
      date: "08/04/2021",
      image: "/../../images/projects/hope.png",
      spDescription: "Esperanza Para Las Naciones (Hope For The Nations) - es una organization sin fines de lucro basada en Memphis TN y Venezuela. La primera phase de la pagina web consiste en una pagina desarrollada con NextJs, TypeScrip, y CSS modular con integracion de Facebook.",
      enDescription: "Hope For The Nations is a Non-Profit organization based in Memphis TN and Venezuela. The initial phase consist on a web application developed with Nextjs framework, modular CSS, and Typescript in it's foundation, and some external apllications integrations. Check the progress in the live version which is regularly updated and improved. This website is the new home of Hope For The Nations to continue to share their mission and hard work.",
      enAlt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'NextJs ModularCSS Typescript',
      all: 'true',
      customClass: 'front-visible',
      pageLink: "https://hopeforthenations7.org",
      gitHub: "https://github.com/Cmmh1101/next-types-hope"
      },
      {
      name: "my-recipes",
      spTitle: "Mis rescetas",
      enTitle: "My recipes",
      date: "06/24/2022",
      image: "/../../images/projects/my-recipes.png",
      spDescription: "La pagina web de mis recetas fue desarrollada con el generador de sites estaticos GatsbyJs. Basado en la libreria ReactJs, GraphQl, headless CMS con contentful, Formspree para manejar las formas de contacto y React Helmet para optimizacion de busquedas.",
      enDescription: "My recipes website was developed with the frontend Static Site Generator GatsbyJs, Based on the library ReactJs, GraphQl, headless CMS with Contentful, Formspree for contact form management and React Helmet for SEO optimization.",
      enAlt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'Gatsby ReactJs GraphQl Contentful CSS Netlify',
      all: 'true',
      customClass: 'front-visible',
      pageLink: "https://my-recipes-project.netlify.app",
      gitHub: "https://github.com/Cmmh1101/recipes"
      },
      {
      name: "blog",
      spTitle: "Mi Blog Personal",
      enTitle: "My Personal Blog",
      date: "06/04/2022",
      image: "/../../images/projects/blog.png",
      spDescription: "Mi blog personal es un proyecto personal desarrollado con las technololgias GatsbyJs, Styled-components, CSS y MDX para el contenido. Decidi usar MDX para el contenido incluyendo componentes de ReactJs (JSX) en un documento de markdown",
      enDescription: "This is my personal blog project developed using GatsbyJs, Styled-Components, CSS, and MDX. For my blog, I decided to use MDX to write the content since it offers the hability to write react components in a markdown file. I enjoyed working on this project and learning this technologies.",
      enAlt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'GatsbyJs MDX Styled-Component CSS',
      all: 'true',
      customClass: 'full-visible',
      pageLink: "https://journey.carlamontano.tech",
      gitHub: "https://github.com/Cmmh1101/my-gatsby-mdx-blog",
      },
      {
      name: "stats",
      spTitle: "Estadisticas",
      enTitle: "Stats",
      date: "08/04/2021",
      image: "/../../images/projects/react-blog.png",
      spDescription: "Pagina de estadisticas escolares Full stack, utilizando ReactJs, ChartJs, NodeJs, Express y MongoDb. Importe un archivo masivo de CSV a MongoDB para usar la data suministrada.",
      enDescription: "Full stack school stack project, using ReactJs, ChartJs, NodeJs, Express y MongoDb. Imported CSV file to MongoDB to utilize provided data",
      enAlt: "Project demo",
      featured: false,
      type: "fullstack",
      technologies: 'ReactJs MongoDB NodeJs Express',
      all: 'true',
      customClass: 'full-visible',
      pageLink: "",
      gitHub: "https://github.com/Cmmh1101/school-stats"
      },
      {
      name: "war-game",
      spTitle: "Juego Interactivo",
      enTitle: "Interactive Game",
      date: "08/04/2021",
      image: "/../../images/projects/quadruple-war-game.png",
      spDescription: "Mi blog personal es un proyecto full stack, utilizando Reactjs y Typescript para el fronend y nodejs, express y mongodb para el backedn y base de datos",
      enDescription: "Full stack Personal blog project, using Reactjs and Typescript for frontend, and node and mongo for backend and database respertively",
      enAlt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'HTML CSS Reactstrap ReactJs',
      all: 'true',
      customClass: 'front-visible',
      pageLink: "https://quadruple-war-game.netlify.app",
      gitHub: "https://github.com/Cmmh1101/team-war-game"
      },
      {
      name: "language-game",
      spTitle: "Juego Interactivo de idiomas",
      enTitle: "Interactive Language Game",
      date: "08/04/2021",
      image: "/../../images/projects/spanish-english.png",
      spDescription: "Este juego interactivo de practica de idiomas fue resultado de un proyecto grupal para un Hackathon, este proyecto fue una gran experiencia para mejorar mis habilidades de manejo de repositorio grupal en GitHub, programacion, trabajo en equipo y colaboracion",
      enDescription: "This Interactive Language Game was the product of a group hackathon project, this was a learning and rewarding experience for all members of the team. With this project I sharpened my GitHub group repo management, programming, teamwork, and collaboration skills",
      enAlt: "Project demo",
      featured: true,
      type: "frontend",
      technologies: 'HTML CSS Reactstrap ReactJs',
      all: 'true',
      customClass: 'front-visible',
      pageLink: "https://the-jar-game.netlify.app",
      gitHub: "https://github.com/Cmmh1101/amanda_carla_will_aug_21"
      },
      {
      name: "job-tracker",
      spTitle: "Rastreador de aplicaciones de trabajo",
      enTitle: "Job Application tracker",
      date: "06/04/2022",
      image: "/../../images/projects/job-tracker.png",
      spDescription: "Aplication fullstack para mantener los registros de tus aplicaciones a trabajos con un dashboard y opciones para agregar, borrar y actualizar aplicaciones y perfil de usuario. Con este proyecto practique mis habilidades de frontend y backend con el stack de desarrollo MERN usando codigo de nivel empresarial y aprendi a implementar StyledComponents en un proyecto",
      enDescription: "Full stack app to keep track of your job applications status with a dashboard and options to add, delete, and update for applications and user profile. With this project I put into practice frontend and backend skills with the MERN stack using enterprise level code and learned how to implement StyledComponents in a project",
      enAlt: "Project demo",
      featured: true,
      type: "fullstack",
      technologies: 'Styled Components ReactJs Nodejs Express MongoDb Heroku',
      all: 'true',
      customClass: 'full-visible',
      pageLink: "https://job-tracker-prod.herokuapp.com",
      gitHub: "https://github.com/Cmmh1101/mern-job-tracker"
      },
      {
      name: "law-firm",
      spTitle: "Firma de abogados",
      enTitle: "Law Firm Landing Page",
      date: "08/04/2021",
      image: "/../../images/projects/law-template.png",
      spDescription: "Mi blog personal es un proyecto full stack, utilizando Reactjs y Typescript para el fronend y nodejs, express y mongodb para el backedn y base de datos",
      enDescription: "Full stack Personal blog project, using Reactjs and Typescript for frontend, and node and mongo for backend and database respertively",
      enAlt: "Project demo",
      featured: false,
      type: "frontend",
      technologies: 'HTML CSS Reactstrap ReactJs',
      all: 'true',
      customClass: 'front-visible',
      pageLink: "https://law-firm-template.netlify.app",
      gitHub: "https://github.com/Cmmh1101/lawyer-template"
      },
      {
      name: "serving-in-christ",
      spTitle: "Organizacion Pagina Web",
      enTitle: "Non-Profit Website",
      date: "08/04/2021",
      image: "/../../images/projects/serving-in-christ.png",
      spDescription: "Mi blog personal es un proyecto full stack, utilizando Reactjs y Typescript para el fronend y nodejs, express y mongodb para el backedn y base de datos",
      enDescription: "Full stack Personal blog project, using Reactjs and Typescript for frontend, and node and mongo for backend and database respertively",
      enAlt: "Non-profit",
      featured: true,
      type: "cms",
      technologies: 'HTML CSS WordPress Divi',
      all: 'true',
      customClass: 'cms-visible',
      pageLink: "https://www.servinginchrist.org/",
      gitHub: ""
      },
      
];

export default projects;

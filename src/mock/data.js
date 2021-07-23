import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Max Whitmore - Front End Developer',
  lang: 'en',
  description: 'Welcome!',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Max Whitmore',
  subtitle: 'I\'m currently working at ',
  subtitle2: 'Pearson College London',
  subtitle3: ' to improve and modernise their website.',
  cta: 'View more',
  img: 'hero-image-small.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'hero-image-small.png',
  paragraphOne:
    'Hi, I\'m Max Whitmore, a passionate Front End Developer and cat dad. I live in Kent and I\'m currently building the website for Pearson College London using Adobe Experience Manager CMS.',
  paragraphTwo: 'Aside from coding, I enjoy playing football for a local team, drinking beer and cooking.',
  paragraphThree: 'Check out some of my work and feel free to email me if you\'d like to work together.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pcl-homepage.png',
    title: 'Pearson College London',
    dates: '2019 - present',
    info: 'I have worked on rebuilding the Pearson College London website, and reconfiguring the Adobe Experience Manager CMS system, to provide a responsive and accessible experience for users.',
    info2: 'HTML // CSS // LESS // JavaScript // Adobe Experience Manager',
    projectinfo: '/work/pearson-college-london',
    url: 'https://www.pearsoncollegelondon.ac.uk/',
    link: 'link',
    github: '',
    repo: '', // if no repo, the button will not show up
    privaterepo: 'Private',
    code: 'code',
  },
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'My Portfolio',
    dates: '',
    info: 'A simple personal portfolio to showcase projects and development work.',
    subheading: 'Goal',
    subheading2: 'Technology',
    info2: 'HTML // SASS // JavaScript // Gatsby // React // Bootstrap // GraphQL ',
    projectinfo: '',
    url: 'https://maxw.dev',
    link: 'link',
    github: 'github',
    repo: 'https://github.com/max-whitmore/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brewdog-app.PNG',
    title: 'Brewdog Beer Generator',
    dates: '',
    info: 'A site built to work with the focus JavaScript method, as well as handling JSON files in API get requests. This project allowed me to fetch data from the public Punk Beer API and display it in a friendly way.',
    subheading: 'Goal',
    subheading2: 'Technology',
    info2: 'HTML // CSS // JavaScript // brewdog punk api',
    projectinfo: '',
    url: 'https://max-whitmore.github.io/beer-generator',
    link: 'link',
    github: 'github',
    repo: 'https://github.com/max-whitmore/beer-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'password-generator-app.png',
    title: 'Password Generator',
    dates: '',
    info: 'Small password generator with a simple copy button, built to teach myself how to use Math.floor, for loops, createRange, as well as accesing the DOM in JavaScript.',
    subheading: 'Goal',
    subheading2: 'Technology',
    info2: 'HTML // CSS // JavaScript',
    projectinfo: '',
    url: 'https://max-whitmore.github.io/PasswordGenerator',
    link: 'link',
    github: 'github',
    repo: 'https://github.com/max-whitmore/PasswordGenerator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'url-shortener-app.png',
    title: 'URL Shortener',
    dates: '',
    info: 'A very leightweight URL shortener that takes any https link and creates a short URL with it. Made using a Short ID library.',
    subheading: 'Goal',
    subheading2: 'Technology',
    info2: 'HTML // CSS //  JavaScript // Bootstrap // EJS // MongoDB // Express',
    projectinfo: '',
    url: '',
    link: 'link',
    github: 'github',
    repo: 'https://github.com/max-whitmore/shorturl', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a project that you would like to discuss with me?',
  btn: 'Get in touch!',
  email: 'maxcwhitmore@gmail.com',
};

// HEADER DATA

export const headerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maxw',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/max-whitmore',
    },
  ],
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maxw',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/max-whitmore',
    },
  ],
};

// Pearson College London data
export const pclData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    info: 'XXXXXXXXXXXX TEST',
  },
];


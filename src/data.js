import { BsLinkedin, BsGithub } from 'react-icons/bs'


const cardData = [
    {
        id: 1,
        title: 'TechStore',
        text: 'A ecommerce developed with React.js, that you can add products to your cart and buy then with a credit card.',
        url: 'https://techstore1.netlify.app',
        image: 'https://raw.githubusercontent.com/HerbertCJ/portfolio-react/main/src/images/techstore1.jpg',
    },
    {
        id: 2,
        title: 'Supermarket List',
        text: 'Tired to remember what you have to buy on supermarket? Note everything before goes out.',
        url: 'https://marketlist1.netlify.app',
        image: 'https://raw.githubusercontent.com/HerbertCJ/portfolio-react/main/src/images/supermarket.jpg',
    },
    {
        id: 3,
        title: 'Card Game',
        text: 'A game that you can play against the robot and try your lucky, who gets the higger card wins the round.',
        url: 'https://herbertcj.github.io/CardGame',
        image: 'https://raw.githubusercontent.com/HerbertCJ/portfolio-react/main/src/images/cardgame.jpg',
    },
    {
        id: 4,
        title: 'ProjecTec',
        text: 'Create your projects and save all data you need for planning.',
        url: 'https://projectec.netlify.app',
        image: 'https://raw.githubusercontent.com/HerbertCJ/portfolio-react/main/src/images/projectec.jpg',
    },
    {
        id: 5,
        title: 'CockTails API',
        text: 'Using a public API for fetch some cocktails.',
        url: 'https://cocktails0.netlify.app/',
        image: 'https://raw.githubusercontent.com/HerbertCJ/portfolio-react/main/src/images/cocktails.jpg',
    },
    {
        id: 6,
        title: 'JobFinder',
        text: 'Find/create jobs.',
        url: 'https://jobfinder0.netlify.app/',
        image: 'https://raw.githubusercontent.com/HerbertCJ/portfolio-react/main/src/images/jobfinder.jpg',
    },
    {
        id: 7,
        title: 'MyFood',
        text: 'Create your Menu with infos of the tabela TACO.',
        url: 'https://myfood0.netlify.app/',
        image: 'https://raw.githubusercontent.com/HerbertCJ/portfolio-react/main/src/images/jobfinder.jpg',
    },

]

const timelineData = [
    {
        title: 'Started my bachelor\'s degree on UNICAP University',
        date: 'Feb 2013',
        tag: '',
        color: '#018f69',
        url: 'https://portal.unicap.br/',
        text: 'University Page',
    },
    {
        title: 'Got my first IT job as an Intern on Reciprev Saúde Brazil',
        date: 'Jan 2017',
        tag: '',
        color: '#d4d432',
        url: 'https://reciprev.recife.pe.gov.br/',
        text: 'Company Page',
    },
    {
        title: 'Got my second job as Finalcial Manager',
        date: 'Aug 2017',
        tag: '',
        color: '#018f69',
        url: '',
        text: '',
    },
    {
        title: 'Got my bachelor\'s degree in Computer Science',
        date: 'Jun 2018',
        tag: '',
        color: '#d4d432',
        url: 'https://portal.unicap.br/',
        text: 'University Page',
    },
    {
        title: 'Started to study Java and Spring and got my certification',
        date: 'Sep 2022',
        tag: '',
        color: '#018f69',
        url: 'https://www.udemy.com/certificate/UC-34eee19e-fa8c-4250-9fe0-3991a7f8ae3c/',
        text: 'Check Certification',
    },
    {
        title: 'Started to study SQL and Databases (MySQL, MongoDB) and got my certification',
        date: 'Oct 2022',
        tag: '',
        color: '#d4d432',
        url: 'https://www.udemy.com/certificate/UC-6cfcd520-e014-4aa8-9bad-5463554bcb06/',
        text: 'Check Certification',
    },
    {
        title: 'Got my first certification in web front end of Reponsive Web Designer, where I studied HTML5 and CSS',
        date: 'Nov 2022',
        tag: '',
        color: '#018f69',
        url: 'https://www.freecodecamp.org/certification/HerbertCJ/responsive-web-design',
        text: 'Check Certification',
    },
    {
        title: 'Got my certification on JavaScript in freeCodeCamp',
        date: 'Dec 2022',
        tag: '',
        color: '#d4d432',
        url: 'https://www.freecodecamp.org/certification/HerbertCJ/javascript-algorithms-and-data-structures',
        text: 'Check Certification',
    },
    {
        title: 'Got my certification in Scrum on SFPC™, CertiProf, Certification Code: 82171043',
        date: 'Jan 2023',
        tag: '',
        color: '#018f69',
        url: 'https://certiprof.com/',
        text: 'Check Page',
    },
    {
        title: 'Got my certification in Front End Libraries, where I studied Bootstrap, SASS, jQuery, Redux, React.js',
        date: 'Jan 2023',
        tag: '',
        color: '#d4d432',
        url: 'https://www.freecodecamp.org/certification/HerbertCJ/front-end-development-libraries',
        text: 'Check Certification',
    },
];

const socials = [
    {
        id: 1,
        url: 'https://www.linkedin.com/in/herbertcj',
        text: 'Linkedin',
        icon: <BsLinkedin />,
    },
    {
        id: 2,
        url: 'https://github.com/HerbertCJ',
        text: 'Github',
        icon: <BsGithub />,
    },
]


export { cardData, timelineData, socials }
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
       [
         {
            "@context":"https://schema.org",
            "@type":"ProfessionalService",
            "name":"Full Stack Developer",
            "image":"https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
            "@id":"https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
            "url":"https://mr-chirag.web.app/",
            "telephone":"+916387935021",
            "priceRange":"$$$$",
            "address":{
               "@type":"PostalAddress",
               "streetAddress":"785,3rd Main Road, BDA Layout I Block, HAL 3rd Stage",
               "addressLocality":"Bengaluru",
               "postalCode":"560075",
               "addressCountry":"IN"
            },
            "geo":{
               "@type":"GeoCoordinates",
               "latitude":12.976303,
               "longitude":77.653525
            },
            "openingHoursSpecification":{
               "@type":"OpeningHoursSpecification",
               "dayOfWeek":[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
               ],
               "opens":"00:00",
               "closes":"23:59"
            },
            "sameAs":[
               "https://www.linkedin.com/in/chirag-kushwaha/",
               "https://github.com/ChiragKushwaha",
               "https://twitter.com/ChiragKushwaha_",
   "https://stackoverflow.com/users/10364623/chirag-kushwaha",
   "https://www.codechef.com/users/chiragkushwaha",
   "https://www.hackerrank.com/Chirag_Kushwaha",
   "https://codeforces.com/profile/chiragkushwaha",
               "https://www.instagram.com/chiragkushwaha_/",
               "https://www.facebook.com/chirag.kushwaha.1044/",
               "https://resume-red-sigma.vercel.app/",
               "https://mr-chirag.web.app/"
            ]
         },
         {
            "@context":"https://schema.org",
            "@type":"Article",
            "mainEntityOfPage":{
               "@type":"WebPage",
               "@id":"https://resume-red-sigma.vercel.app/"
            },
            "headline":"Chirag Kushwaha Resume",
            "description":"Hi, I'am a Full Stack Developer currently working at Eka Care.",
            "image":"https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
            "author":{
               "@type":"Person",
               "name":"Chirag Kushwaha",
               "url":"https://www.linkedin.com/in/chirag-kushwaha/"
            },
            "publisher":{
               "@type":"Organization",
               "name":"Chirag Kushwaha",
               "logo":{
                  "@type":"ImageObject",
                  "url":"https://mr-chirag.web.app/favicon.ico"
               }
            },
            "datePublished":"2022-01-01",
            "dateModified":"2022-02-19"
         },
         {
            "@context":"https://schema.org/",
            "@type":"BreadcrumbList",
            "itemListElement":[
               {
                  "@type":"ListItem",
                  "position":1,
                  "name":"Home",
                  "item":"https://mr-chirag.web.app/"
               },
               {
                  "@type":"ListItem",
                  "position":2,
                  "name":"Resume",
                  "item":"https://resume-red-sigma.vercel.app/"
               }
            ]
         },
         {
            "@context":"https://schema.org/",
            "@type":"WebSite",
            "name":"Chirag Kushwaha",
            "url":"https://mr-chirag.web.app/",
            "potentialAction":{
               "@type":"SearchAction",
               "target":"https://mr-chirag.web.app/{search_term_string}",
               "query-input":"required name=search_term_string"
            }
         },
         {
            "@context":"https://schema.org/",
            "@type":"Person",
            "name":"Chirag Kushwaha",
            "url":"https://mr-chirag.web.app/",
            "image":"https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
            "sameAs":[
               "https://www.facebook.com/chirag.kushwaha.1044/",
               "https://twitter.com/ChiragKushwaha_",
               "https://www.instagram.com/chiragkushwaha_/",
               "https://www.linkedin.com/in/chirag-kushwaha/",
               "https://resume-red-sigma.vercel.app/",
               "https://mr-chirag.web.app/",
               "https://github.com/ChiragKushwaha"
            ],
            "jobTitle":"Full Stack Developer",
            "worksFor":{
               "@type":"Organization",
               "name":"Eka Care"
            }
         },
         {
            "@context":"https://schema.org",
            "@type":"Corporation",
            "name":"Eka Care",
            "alternateName":"Orbi Health",
            "url":"https://www.eka.care/",
            "logo":"https://www.eka.care/logo.svg",
            "sameAs":[
               "https://www.facebook.com/ekacareHQ",
               "https://twitter.com/ekacareHQ",
               "https://www.instagram.com/ekacarehq/",
               "https://www.linkedin.com/company/ekacare/",
               "https://www.youtube.com/channel/UCfp-aNfKDA91OEAhic5MqlQ",
               "https://www.eka.care/",
               "https://github.com/eka-care"
            ]
         },
         {
            "basics":{
               "name":"Chirag Kushwaha",
               "label":"Software Engineer",
               "image":"https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1647475200&v=beta&t=XaTc0qDtc1XQtxKNibCbyc-mWFdflZqPEOyMHgGol3E",
               "email":"chiragkushwaha1811@gmail.com",
               "phone":"+916387935021",
               "url":"https://mr-chirag.web.app",
               "summary":"A summary of John Doe…",
               "location":{
                  "address":"1st Cross Road, 3rd Main Rd, BDA Layout I Block, HAL 3rd Stage, Bhoomi Reddy Colony, New Tippasandra, Bengaluru, Karnataka 560075, India",
                  "postalCode":"560075",
                  "city":"Bengaluru",
                  "countryCode":"IN",
                  "region":"Karnataka"
               },
               "profiles":[
                  {
                     "network":"Github",
                     "username":"ChiragKushwaha",
                     "url":"https://github.com/ChiragKushwaha"
                  },
                  {
                     "network":"Twitter",
                     "username":"ChiragKushwaha_",
                     "url":"https://twitter.com/ChiragKushwaha_"
                  },
                  {
                     "network":"LinkedIn",
                     "username":"chirag-kushwaha",
                     "url":"https://www.linkedin.com/in/chirag-kushwaha"
                  },
                  {
                     "network":"Instagram",
                     "username":"chiragkushwaha_",
                     "url":"https://www.instagram.com/chiragkushwaha_/"
                  },
                  {
                     "network":"Facebook",
                     "username":"chirag.kushwaha.1044",
                     "url":"https://www.facebook.com/chirag.kushwaha.1044"
                  },
                  {
                     "network":"Hackerrank",
                     "username":"Chirag_Kushwaha",
                     "url":"https://www.hackerrank.com/Chirag_Kushwaha"
                  }
               ]
            },
            "work":[
               {
                  "name":"Orbi Health PVT Ltd",
                  "position":"Software Engineer",
                  "url":"https://www.eka.care",
                  "startDate":"2021-07-01",
                  "endDate":"",
                  "summary":"I was sent here from my previous company 314e Healthcare. Role: Software Engineer, Technologies that i have worked with: Node, Express, AWS, Docker, Mixpanel, React JS, Redux, Tailwind, CSS, HTML, JavaScript, Storybook, webpack, Next JS, Figma, Animations, Git, Service Worker, SSR(Server Side Rendering), Rollup js, Monorepo, CSR(Client Side Rendering), SSG(Static Site Generation), ISR(Incremental Static Regeneration), Prisma, MySql, Keystone JS, SEO Schemas, PWA(Progressive Web App), GraphQl, React Native",
                  "highlights":[
                     "Download your vaccine Certificate",
                     "WhatsApp Template Generation",
                     "Notification via SMS, Push Notification, WhatsApp",
                     "Worked in Backend for Creating Database for Doctor Profile",
                     "Booking appointment flow",
                     "Manage Calendar Flow",
                     "Edit and Update Profile",
                     "PWA Eka Care",
                     "Finding Vaccine Slots",
                     "Booking Vaccine Slots",
                     "Design System",
                     "Eka Care Website",
                     "Eka Care App",
                     "Change Mobile number of Cowin Certificate",
                     "Add Passport Details to Cowin Certificare",
                     "Create Health Id"
                  ]
               },
               {
                  "name":"314e Healthcare IT Solutions PVT Ltd",
                  "position":"Software Engineer",
                  "url":"https://www.314e.com/",
                  "startDate":"2020-09-05",
                  "endDate":"2021-06-30",
                  "summary":"Technologies i have worked with: React JS, Redux, Kea JS, Ant Design, CSS, HTML, JavaScript, React Query, Git, Figma",
                  "highlights":[
                     "WildDuck UI",
                     "Penknife"
                  ]
               },
               {
                  "name":"Innovacx",
                  "position":"Software Engineer Trainee",
                  "url":"https://www.innovacx.com/index.html",
                  "startDate":"2020-01-05",
                  "endDate":"2020-06-30",
                  "summary":"Technologies i have worked with: Groovy, Oracle Applications Cloud, Oracle Sales Cloud, Oracle Integration Cloud, VBCS",
                  "highlights":[
                     "DPW (Dubai Port World)"
                  ]
               }
            ],
            "volunteer":[
               {
                  "organization":" Research Design and Standards Organization (RDSO)",
                  "position":"Frontend Developer Intern",
                  "url":"https://rdso.indianrailways.gov.in/",
                  "startDate":"2019-05-27",
                  "endDate":"2019-06-20",
                  "summary":"Technologies i have worked with: JAVA, JSP (Jakarta Server Pages), HTML",
                  "highlights":[
                     "WEB DEVELOPMENT OF RDSO PORTAL"
                  ]
               }
            ],
            "education":[
               {
                  "institution":"GITAM University Hyderabad",
                  "url":"https://www.gitam.edu/hyderabad",
                  "area":"Engineering",
                  "studyType":"Bachelor",
                  "startDate":"2016-09-01",
                  "endDate":"2020-04-20",
                  "score":"8.33",
                  "courses":[
                     "Computer Science and Engineering"
                  ]
               },
               {
                  "institution":"Army Public School, Nehru Road",
                  "url":"https://www.apsnrlucknow.org/",
                  "area":"!2th",
                  "studyType":"Intermediate",
                  "startDate":"2015-03-20",
                  "endDate":"2016-03-15",
                  "score":"91.40",
                  "courses":[
                     "Physics",
                     "Chemistry",
                     "Maths",
                     "English",
                     "C++"
                  ]
               },
               {
                  "institution":"St. Ann's Convent School",
                  "url":"https://www.stannslucknow.org/",
                  "area":"!0th",
                  "studyType":"Secondary Education",
                  "startDate":"2013-03-20",
                  "endDate":"2014-03-15",
                  "score":"83.40",
                  "courses":[
                     "Physics",
                     "Chemistry",
                     "Maths",
                     "English",
                     "C++"
                  ]
               }
            ],
            "awards":[
               {
                  "title":"Hackathon",
                  "date":"2019-06-16",
                  "awarder":"Virtusa",
                  "summary":"Won Hackathon conducted by Virtusa on Full-Stack Development"
               },
               {
                  "title":"Blind Coding",
                  "date":"2019-06-16",
                  "awarder":"GITAM",
                  "summary":"More than 300+ students participated in it"
               }
            ],
            "certificates":[
               {
                  "name":"Problem Solving (Basic)",
                  "date":"2021-04-24",
                  "issuer":"HackerRank",
                  "url":"https://www.hackerrank.com/certificates/83a3273cd861"
               },
               {
                  "name":"Python (Basic)",
                  "date":"2020-08-23",
                  "issuer":"HackerRank",
                  "url":"https://www.hackerrank.com/certificates/ec202726195f"
               }
            ],
            "publications":[
               {
                  "name":"Add Passport Details To Your CoWIN Certificate",
                  "publisher":"Orbi Health PVT Ltd",
                  "releaseDate":"2021-10-26",
                  "url":"https://story.eka.care/add-passport-details-to-your-cowin-certificate/",
                  "summary":"Given the ongoing covid-19 pandemic situation, if you want to travel abroad, linking your passport details with your vaccination certificate is necessary."
               }
            ],
            "skills":[
               {
                  "name":"Web Development",
                  "level":"Master",
                  "keywords":[
                     "HTML",
                     "CSS",
                     "JavaScript",
                     "React JS",
                     "Next JS",
                     "Keystone JS",
                     "React Query",
                     "Kea JS",
                     "Redux",
                     "Tailwind",
                     "Storybook",
                     "Webpack",
                     "Figma",
                     "Animations",
                     "Git",
                     "Service Worker",
                     "SSR(Server Side Rendering)",
                     "Rollup JS",
                     "Monorepo",
                     "SSG(Static Site Generation)",
                     "ISR(Incremental Static Regeneration)",
                     "CSR(Client Side Rendering)",
                     "SEO Schemas",
                     "PWA(Progressive Web App)",
                     "Appolo Client",
                     "Ant Design",
                     "VBCS",
                     "Mixpanel",
                     "New Relic"
                  ]
               },
               {
                  "name":"Backend Development",
                  "level":"Intermediate",
                  "keywords":[
                     "MySql",
                     "Node",
                     "JavaScript",
                     "Express",
                     "AWS",
                     "Docker",
                     "Git",
                     "Prisma",
                     "GraphQl",
                     "Groovy",
                     "New Relic"
                  ]
               },
               {
                  "name":"Cloud",
                  "level":"Intermediate",
                  "keywords":[
                     "Oracle Applications Cloud",
                     "Oracle Sales Cloud",
                     "Oracle Integration Cloud",
                     "AWS"
                  ]
               },
               {
                  "name":"Mobile Development",
                  "level":"Intermediate",
                  "keywords":[
                     "Hybrid Apps",
                     "React Native",
                     "Redux",
                     "React Expo"
                  ]
               }
            ],
            "languages":[
               {
                  "language":"English",
                  "fluency":"Professional working proficiency"
               },
               {
                  "language":"Hindi",
                  "fluency":"Native or bilingual proficiency"
               }
            ],
            "interests":[
               {
                  "name":"Hobbies",
                  "keywords":[
                     "Sketching",
                     "Learning new things",
                     "Solving Coding Problems",
                     "Playing Guitar"
                  ]
               }
            ],
            "references":[
               {
                  "name":"Anusheel Singh",
                  "reference":"Fullstack Developer at Orbi Health | Volunteer Contributor @ Aarogyasetu | Ex Senior Software Engineer - II at Goibibo"
               }
            ],
            "projects":[
               {
                  "name":"Netflix Clone",
                  "description":"It looks like Netflix. It shows movies poster, about the movie and it's trailer.",
                  "highlights":[
                     "Self Made"
                  ],
                  "keywords":[
                     "HTML",
                     "CSS",
                     "React JS"
                  ],
                  "startDate":"2020-07-01",
                  "endDate":"2020-07-20",
                  "url":"https://netflixi.web.app/",
                  "roles":[
                     "Team Lead"
                  ],
                  "entity":"Entity",
                  "type":"appliWcation"
               },
               {
                  "name":"Portfolio (Old)",
                  "description":"Tells about me",
                  "highlights":[
                     "Self Made"
                  ],
                  "keywords":[
                     "HTML",
                     "CSS",
                     "React JS",
                     "Three Js",
                     "React Spring"
                  ],
                  "startDate":"2021-07-01",
                  "endDate":"2021-07-20",
                  "url":"https://chriag.web.app/",
                  "roles":[
                     "Team Lead"
                  ],
                  "entity":"Entity",
                  "type":"application"
               },
               {
                  "name":"World Rank",
                  "description":"Tells World Rank",
                  "highlights":[
                     "Self Made"
                  ],
                  "keywords":[
                     "HTML",
                     "CSS",
                     "React JS"
                  ],
                  "startDate":"2021-09-01",
                  "endDate":"2021-09-20",
                  "url":"https://world-rank-chiragkushwaha.vercel.app/",
                  "roles":[
                     "Team Lead"
                  ],
                  "entity":"Entity",
                  "type":"application"
               },
               {
                  "name":"Covid-19 Tracker",
                  "description":"Shows in graphs and visuals the current condition or the world in Covid-19.",
                  "highlights":[
                     "Self Made"
                  ],
                  "keywords":[
                     "HTML",
                     "CSS",
                     "React JS"
                  ],
                  "startDate":"2021-11-01",
                  "endDate":"2021-11-20",
                  "url":"https://covid-19-tracker-4987d.web.app/",
                  "roles":[
                     "Team Lead"
                  ],
                  "entity":"Entity",
                  "type":"application"
               }
            ]
         }
      ]
                  `}
        </script>
        <meta
          name="google-site-verification"
          content="OIk6sJu3nmgUIb9c-yV6DvU_P4KyXctrKxF8ZukWjQE"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

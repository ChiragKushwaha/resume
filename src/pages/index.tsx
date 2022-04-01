import React from 'react';
import dateformat from 'dateformat';
import Head from 'next/head';
import { DATEFORMAT } from '../constants/date';
import Header from '../components/header';
import Section from '../components/section';
import Table from '../components/table';
// "@types/three": "^0.136.1",

const JobsJson = [
  {
    name: 'Orbi Health PVT Ltd',
    position: 'Software Engineer',
    url: 'https://www.eka.care',
    startDate: '2021-07-01',
    endDate: '',
    summary:
      'I was sent here from my previous company 314e Healthcare to help them build their product but after some time i became a permanent employee in this company.',
    technology: [
      'Keystone JS',
      'SEO Schemas',
      'PWA(Progressive Web App)',
      'React Native',
      'GraphQl',
      'MySql',
      'Next JS',
      'React JS',
      'Rollup js',
      'Monorepo',
      'Prisma',
      'Workbox',
      'CSR(Client Side Rendering)',
      'ISR(Incremental Static Regeneration)',
      'SSG(Static Site Generation)',
      'SSR(Server Side Rendering)',
      'Service Worker',
      'Node',
      'Express',
      'AWS (EC2, dynamoDB)',
      'Docker',
      'Mixpanel',
      'Redux',
      'Tailwind',
      'CSS',
      'HTML',
      'JavaScript',
      'Storybook',
      'webpack',
      'Figma',
      'Animations',
      'Git',
      'YAML'
    ],
    projects: [
      {
        name: 'Doctor dicovery platform on Android, ',
        subtext: 'Download now Android IOS',
        links: [
          {
            text: 'Android',
            url: 'https://play.google.com/store/apps/details?id=eka.care'
          },
          {
            text: 'IOS',
            url: 'https://apps.apple.com/in/app/eka-care/id1561621558'
          }
        ]
      },
      {
        name: 'Doctor dicovery platform on Web',
        url: 'https://www.eka.care/doctor'
      },
      {
        name: 'Worked with Elastic Search Query for autosuggestion'
      },
      {
        name: "Documented api's with swagger"
      },
      {
        name: 'Download your vaccine Certificate',
        url: 'https://www.eka.care/download-covid-vaccination-certificate',
        subtext: '(via our app Eka care website or through whatsapp bot)',
        links: [
          {
            text: 'website',
            url: 'https://www.eka.care/download-covid-vaccination-certificate'
          },
          {
            text: 'whatsapp bot',
            url: 'https://api.whatsapp.com/send/?phone=919972088103&text=download cowin certificate'
          }
        ]
      },
      { name: 'CMS (Content Management System) for eka.care' },
      { name: 'WhatsApp Template Generation' },
      { name: 'Notification via SMS, Push Notification, WhatsApp' },
      { name: 'Worked in Backend for Creating Database for Doctor Profile' },
      { name: 'Booking Appointment Flow' },
      { name: 'Manage Calendar For Doctors' },
      { name: 'Edit and Update Profile' },
      { name: 'PWA Eka Care', url: 'https://www.eka.care' },
      {
        name: 'Finding Vaccine Slots',
        subtext: '(via our app Eka care website or through whatsapp bot)',
        url: 'https://www.eka.care/cowin/covid-vaccine-slot-finder',
        links: [
          {
            text: 'website',
            url: 'https://www.eka.care/cowin/covid-vaccine-slot-finder'
          },
          {
            text: 'whatsapp bot',
            url: 'https://api.whatsapp.com/send/?phone=919972088103&text=book vaccine slot'
          }
        ]
      },
      {
        name: 'Booking Vaccine Slots',
        url: 'https://www.eka.care/cowin/covid-vaccine-slot-finder',
        subtext: '(via our app Eka care website or through whatsapp bot)',
        links: [
          {
            text: 'website',
            url: 'https://www.eka.care/cowin/covid-vaccine-slot-finder'
          },
          {
            text: 'whatsapp bot',
            url: 'https://api.whatsapp.com/send/?phone=919972088103&text=book vaccine slot'
          }
        ]
      },
      {
        name: 'Design System',
        about:
          'Creating a design system for a doctor client application/website so that it is easier to manage later, have reusable components and the designer has full freedom to design. Design Pattern: Atomic Design Methodology by Brad Frost'
      },
      { name: 'Eka Care Website', url: 'https://www.eka.care' },
      {
        name: 'Eka Care App',
        subtext:
          "(Our app has 2 M+ downloads, if you haven’t started using it yet. Just try it, you'll never go back.) Android IOS",
        about:
          'Worked on Booking flow, for doctors, staff, patients, cowin vaccination booking and managing them.',
        links: [
          {
            text: 'Android',
            url: 'https://play.google.com/store/apps/details?id=eka.care'
          },
          {
            text: 'IOS',
            url: 'https://apps.apple.com/in/app/eka-care/id1561621558'
          }
        ]
      },
      {
        name: 'Change Mobile number of Cowin Certificate',
        url: 'https://www.eka.care/cowin/change-mobile-number-in-vaccine-certificate'
      },
      {
        name: 'Add Passport Details to Cowin Certificare',
        url: 'https://www.eka.care/cowin/link-passport-with-vaccine-certificate'
      },
      {
        name: 'Create Health Id',
        url: 'https://www.eka.care/ayushman-bharat/create-abha-abdm-ndhm-health-id'
      }
    ]
  },
  {
    name: '314e Healthcare IT Solutions PVT Ltd',
    position: 'Software Engineer',
    url: 'https://www.314e.com/',
    startDate: '2020-09-05',
    endDate: '2021-06-30',
    technology: [
      'Git',
      'React JS',
      'Redux',
      'Figma',
      'Kea JS',
      'Ant Design',
      'CSS',
      'HTML',
      'JavaScript',
      'React Query',
      'YAML'
    ],
    projects: [
      {
        name: 'WildDuck UI',
        url: 'https://docs.wildduck.email/#/additional-software/third-party-projects',
        about:
          'It’s a mail server admin panel for managing the users. And to keep track of the daily quota usage and their active time period'
      },
      {
        name: 'Penknife',
        about:
          'It handles the candidate’s data who has applied for job in our company and keeps track of rounds qualified, eligible for interview, status, etc.'
      }
    ]
  },
  {
    name: 'Innovacx',
    position: 'Software Engineer Trainee',
    url: 'https://www.innovacx.com/index.html',
    startDate: '2020-01-05',
    endDate: '2020-06-30',
    technology: [
      'Groovy',
      'Oracle Applications Cloud',
      'Oracle Sales Cloud',
      'Oracle Integration Cloud',
      'VBCS'
    ],
    projects: [{ name: 'DPW (Dubai Port World)' }]
  }
];
const InternshipsJson = [
  {
    name: 'Research Design and Standards Organization (RDSO)',
    position: 'Frontend Developer Intern',
    url: 'https://rdso.indianrailways.gov.in/',
    startDate: '2019-05-27',
    endDate: '2019-06-20',
    technology: ['JAVA', 'JSP (Jakarta Server Pages)', 'HTML'],
    projects: [{ name: 'WEB DEVELOPMENT OF RDSO PORTAL' }]
  }
];

const Pp = [
  {
    name: 'Netflix Clone',
    summary: "It looks like Netflix. It shows movies poster, about the movie and it's trailer.",
    highlights: ['Self Made'],
    technology: ['HTML', 'CSS', 'React JS'],
    startDate: '2020-07-01',
    endDate: '2020-07-20',
    url: 'https://netflixi.web.app/',
    entity: 'Entity',
    type: 'appliWcation'
  },
  {
    name: 'Portfolio',
    summary: 'Welcomes people who visits it and contains my social media links and resume link.',
    highlights: ['Self Made'],
    technology: ['HTML', 'CSS', 'React JS', 'Three Js', 'React Spring'],
    startDate: '2021-10-15',
    endDate: '2021-10-20',
    url: 'https://mr-chirag.web.app/',
    entity: 'Entity',
    type: 'application'
  },
  {
    name: 'Image Processing',
    summary:
      'It`s a webapp that use rust compiled binaries to process the image. Processing the image with Javascript puts a load on the main thread, instead rust takes care of processing the image, it uses cpu of the machine and provide the output back to the javascript thread as a stream of data. which is then displayed to the screen by javascript.',
    highlights: ['Self Made'],
    technology: ['HTML', 'CSS', 'Javascript', 'RUST', 'Webpack', 'babel'],
    startDate: '2021-09-22',
    endDate: '2021-09-28',
    url: 'https://rust-wasm-henna.vercel.app/',
    entity: 'Entity',
    type: 'application'
  },
  {
    name: 'Portfolio (Old)',
    summary: 'Tells about me, supports light/dark mode.',
    highlights: ['Self Made'],
    technology: ['HTML', 'CSS', 'React JS', 'Three Js', 'React Spring'],
    startDate: '2021-07-01',
    endDate: '2021-07-20',
    url: 'https://chriag.web.app/',
    entity: 'Entity',
    type: 'application'
  },
  {
    name: 'World Rank',
    summary: 'Tells World Rank',
    highlights: ['Self Made'],
    technology: ['HTML', 'CSS', 'React JS'],
    startDate: '2021-09-01',
    endDate: '2021-09-20',
    url: 'https://world-rank-chiragkushwaha.vercel.app/',
    entity: 'Entity',
    type: 'application'
  },
  {
    name: 'Covid-19 Tracker',
    summary: 'Shows in graphs and visuals the current condition or the world in Covid-19.',
    highlights: ['Self Made'],
    technology: ['HTML', 'CSS', 'React JS'],
    startDate: '2021-11-01',
    endDate: '2021-11-20',
    url: 'https://covid-19-tracker-4987d.web.app/',
    entity: 'Entity',
    type: 'application'
  }
];

const awards = [
  {
    name: 'Hackathon',
    date: '2019-06-16',
    awarder: 'Virtusa',
    summary: 'Won Hackathon conducted by Virtusa on Full-Stack Development'
  },
  {
    name: 'Blind Coding',
    date: '2019-06-16',
    awarder: 'GITAM',
    summary: 'More than 300+ students participated in it'
  }
];
const certificates = [
  {
    name: 'Problem Solving (Basic)',
    date: '2021-04-24',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/83a3273cd861'
  },
  {
    name: 'Python (Basic)',
    date: '2020-08-23',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/ec202726195f'
  }
];
const publications = [
  {
    name: 'Add Passport Details To Your CoWIN Certificate',
    publisher: 'Orbi Health PVT Ltd',
    releaseDate: '2021-10-26',
    url: 'https://story.eka.care/add-passport-details-to-your-cowin-certificate/',
    summary:
      'Given the ongoing covid-19 pandemic situation, if you want to travel abroad, linking your passport details with your vaccination certificate is necessary.'
  }
];
const languages = [
  {
    name: 'English',
    fluency: 'Professional working proficiency'
  },
  {
    name: 'Hindi',
    fluency: 'Native or bilingual proficiency'
  }
];
const interests = [
  {
    name: 'Hobbies',
    keywords: ['Sketching', 'Learning new things', 'Solving Coding Problems', 'Playing Guitar']
  }
];
const references = [
  {
    name: 'Vikalp Sahni',
    position:
      'Founder CEO at Eka Care ( connected health ), Ex-CTO, CoFounder at Goibibo.com. Volunteer Architect Aarogya Setu ( GOI, Contact Tracing App)',
    summary:
      'Worked on Next gen Crawl & Search Technologies. Working on Travel Platforms. Specialties: Python, Search Technologies, Django, SOLR, Scalability',
    url: 'https://www.linkedin.com/in/vikalpsahni/'
  },
  {
    name: 'Anusheel Singh',
    summary:
      'Front-end engineer. Skilled in technologies like React, React Native, Node, Backbone, jQuery. Previously worked at SapientNitro as Interactive Developer in IDEAL(Sapient platform) team. Strong engineering professional with a B.Tech focused in Computer Science from NIT-Bhopal.',
    position:
      'Fullstack Developer at Orbi Health | Volunteer Contributor @ Aarogyasetu | Ex Senior Software Engineer - II at Goibibo',
    url: 'https://www.linkedin.com/in/anusheelsingh/'
  },
  {
    name: 'Abhishek Begerhotta',
    summary:
      'Abhishek has worked in Healthcare IT since 1996 when he was involved in the custom development of one of the largest and most sophisticated EHR’s in the history of the HIT industry. This project was awarded the 1999 Davies Award. He subsequently provided leadership on several Enterprise EHR projects including the largest Epic implementation to date, resulting in the formation of 314e Corporation. He has an MBA from the Wharton School of Business. He handles all escalations personally, and takes pride in always putting the customer first.',
    position: 'CEO at 314e corp | IT Products and Services',
    url: 'https://www.linkedin.com/in/abhishekbegerhotta/'
  }
];

const Resume = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Head>
        <title>Chirag Kushwaha</title>
        {/* <script dangerouslySetInnerHTML={{ __html: props.seoData }}></script> */}
      </Head>
      <Header />
      <br />
      <h3>Jobs:</h3>
      {JobsJson.map((job) => (
        <Section key={job.name} {...job} />
      ))}
      <br />
      <h3>Academic details:</h3>
      <Table />
      <br />
      <h3>Internship:</h3>
      {InternshipsJson.map((intern) => (
        <Section key={intern.name} {...intern} />
      ))}
      <br />
      <h3>Personal Projects:</h3>
      {Pp.map((proj) => (
        <Section key={proj.name} {...proj} />
      ))}
      <br />
      <h3>Languages:</h3>
      {languages.map((lang) => (
        <div style={{ paddingBottom: '6px' }} key={lang.name}>
          <div>{lang.name}</div>
          <div>{lang.fluency}</div>
        </div>
      ))}
      <br />
      <h3>Publications:</h3>
      {publications.map((publication) => (
        <div style={{ paddingBottom: '6px' }} key={publication.name}>
          <div>
            <span>
              <a href={publication.url}>{publication.name}</a>
            </span>
            <span> - {dateformat(publication.releaseDate, DATEFORMAT)}</span>
          </div>
          <div>Publisher: {publication.publisher}</div>
          <div>Summary: {publication.summary}</div>
        </div>
      ))}
      <br />
      <h3>Awards:</h3>
      {awards.map((award) => (
        <div style={{ paddingBottom: '6px' }} key={award.name}>
          <div>
            <span>{award.name}</span>
            <span> - {dateformat(award.date, DATEFORMAT)}</span>
          </div>
          <div>Awarder: {award.awarder}</div>
          <div>Summary: {award.summary}</div>
        </div>
      ))}
      <br />
      <h3>Certificates:</h3>
      {certificates.map((certificate) => (
        <div style={{ paddingBottom: '6px' }} key={certificate.name}>
          <div>
            <span>
              <a href={certificate.url}>{certificate.name}</a>
            </span>
            <span> - {dateformat(certificate.date, DATEFORMAT)}</span>
          </div>
          <div>Issuer: {certificate.issuer}</div>
        </div>
      ))}
      <br />
      <div>
        <h3>Hobbies:</h3> <span>{interests[0].keywords.join(', ')}</span>
      </div>
      <br />
      <h3>References:</h3>
      {references.map((ref) => (
        <Section key={ref.summary} {...ref} />
      ))}
    </div>
  );
};

export default Resume;
// export async function getStaticProps(context: any) {
//   const result = getResumeJson();
//   return {
//     props: {
//       seoData: result
//     }
//   };
// }

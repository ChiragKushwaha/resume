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
           "@context": "https://schema.org",
           "@type": "ProfessionalService",
           "name": "Full Stack Developer",
           "image": "https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
           "@id": "https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
           "url": "https://mr-chirag.web.app/",
           "telephone": "+916387935021",
           "priceRange": "$$$$",
           "address": {
             "@type": "PostalAddress",
             "streetAddress": "785,3rd Main Road, BDA Layout I Block, HAL 3rd Stage",
             "addressLocality": "Bengaluru",
             "postalCode": "560075",
             "addressCountry": "IN"
           },
           "geo": {
             "@type": "GeoCoordinates",
             "latitude": 12.976303,
             "longitude": 77.653525
           },
           "openingHoursSpecification": {
             "@type": "OpeningHoursSpecification",
             "dayOfWeek": [
               "Monday",
               "Tuesday",
               "Wednesday",
               "Thursday",
               "Friday",
               "Saturday",
               "Sunday"
             ],
             "opens": "00:00",
             "closes": "23:59"
           },
           "sameAs": [
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
           "@context": "https://schema.org",
           "@type": "Article",
           "mainEntityOfPage": {
             "@type": "WebPage",
             "@id": "https://resume-red-sigma.vercel.app/"
           },
           "headline": "Chirag Kushwaha Resume",
           "description": "Hi, I'am a Full Stack Developer currently working at Eka Care.",
           "image": "https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
           "author": {
             "@type": "Person",
             "name": "Chirag Kushwaha",
             "url": "https://www.linkedin.com/in/chirag-kushwaha/"
           },
           "publisher": {
             "@type": "Organization",
             "name": "Chirag Kushwaha",
             "logo": {
               "@type": "ImageObject",
               "url": "https://mr-chirag.web.app/favicon.ico"
             }
           },
           "datePublished": "2022-01-01",
           "dateModified": "2022-02-19"
         },
         {
           "@context": "https://schema.org/",
           "@type": "BreadcrumbList",
           "itemListElement": [
             {
               "@type": "ListItem",
               "position": 1,
               "name": "Home",
               "item": "https://mr-chirag.web.app/"
             },
             {
               "@type": "ListItem",
               "position": 2,
               "name": "Resume",
               "item": "https://resume-red-sigma.vercel.app/"
             }
           ]
         },
         {
           "@context": "https://schema.org/",
           "@type": "WebSite",
           "name": "Chirag Kushwaha",
           "url": "https://mr-chirag.web.app/",
           "potentialAction": {
             "@type": "SearchAction",
             "target": "https://mr-chirag.web.app/{search_term_string}",
             "query-input": "required name=search_term_string"
           }
         },
         {
           "@context": "https://schema.org/",
           "@type": "Person",
           "name": "Chirag Kushwaha",
           "url": "https://mr-chirag.web.app/",
           "image": "https://media-exp1.licdn.com/dms/image/C5103AQGNNKb5MKdHmQ/profile-displayphoto-shrink_400_400/0/1565883227975?e=1650499200&v=beta&t=ipa3JmZqAiIt7ihyO_ymMDTtmvkLy_JtMiC5FnNQpNc",
           "sameAs": [
             "https://www.facebook.com/chirag.kushwaha.1044/",
             "https://twitter.com/ChiragKushwaha_",
             "https://www.instagram.com/chiragkushwaha_/",
             "https://www.linkedin.com/in/chirag-kushwaha/",
             "https://resume-red-sigma.vercel.app/",
             "https://mr-chirag.web.app/",
             "https://github.com/ChiragKushwaha"
           ],
           "jobTitle": "Full Stack Developer",
           "worksFor": {
             "@type": "Organization",
             "name": "Eka Care"
           }
         },
         {
           "@context": "https://schema.org",
           "@type": "Corporation",
           "name": "Eka Care",
           "alternateName": "Orbi Health",
           "url": "https://www.eka.care/",
           "logo": "https://www.eka.care/logo.svg",
           "sameAs": [
             "https://www.facebook.com/ekacareHQ",
             "https://twitter.com/ekacareHQ",
             "https://www.instagram.com/ekacarehq/",
             "https://www.linkedin.com/company/ekacare/",
             "https://www.youtube.com/channel/UCfp-aNfKDA91OEAhic5MqlQ",
             "https://www.eka.care/",
             "https://github.com/eka-care"
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

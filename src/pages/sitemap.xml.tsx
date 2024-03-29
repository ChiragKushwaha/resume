import { GetServerSidePropsContext } from 'next';
import React from 'react';

const Sitemap = () => {};

export const getServerSideProps = ({ res }: GetServerSidePropsContext) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://resume-red-sigma.vercel.app/</loc>
      <lastmod>2022-01-23</lastmod>
    </url>
    <url>
      <loc>https://chirag-kushwaha.vercel.app/</loc>
      <lastmod>2023-03-25</lastmod>
    </url>
  </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

export default Sitemap;

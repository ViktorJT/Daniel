import { getHome } from "../queries/getHome";

const MAIN_URL = "https://www.danielarfwedson.com";

function generateSiteMap(projects) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${MAIN_URL}</loc>
     </url>
     <url>
       <loc>${MAIN_URL}/about</loc>
     </url>
     ${projects
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${MAIN_URL}/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const { home } = await getHome();

  const projectPages = home.projects.filter(
    ({ projectMedia }) => projectMedia?.length,
  );

  const sitemap = generateSiteMap(projectPages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

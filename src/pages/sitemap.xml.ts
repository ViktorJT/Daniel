import { getHome } from "../queries/getHome";

const homepage = "https://www.danielarfwedson.com";

export default function SiteMap() {}

function generateSiteMap(projects: any) {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${projects
        .map(
          ({ slug }: { slug: string }) => `
        <url>
          <loc>${homepage}/${slug}/<loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `,
        )
        .join("\n")}
    </urlset>
  `;
}

export async function getServerSideProps({ res }: any) {
  const {
    home: { projects },
  } = await getHome();

  const sitemap = generateSiteMap(projects);

  res.setHeader("Content-Type", "text/html");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

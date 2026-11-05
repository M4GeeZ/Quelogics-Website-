import { useState } from "react";
import {
  SiSwift, SiKotlin, SiReact, SiFlutter, SiAndroid, SiApple, SiIonic, SiExpo,
  SiHtml5, SiCss, SiBootstrap, SiJavascript, SiTypescript, SiNextdotjs, SiAngular,
  SiVuedotjs, SiNuxt, SiElectron, SiDotnet, SiTailwindcss, SiRedux, SiSvelte,
  SiMysql, SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiSupabase, SiElasticsearch,
  SiSqlite, SiMariadb,
  SiNodedotjs, SiPython, SiDjango, SiFlask, SiLaravel, SiPhp, SiSpring, SiExpress,
  SiGo, SiRubyonrails, SiNestjs, SiFastapi, SiGraphql,
  SiWordpress, SiShopify, SiWebflow, SiDrupal, SiJoomla, SiStrapi, SiContentful,
  SiSanity, SiWoocommerce, SiWix, SiSquarespace,
  SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions,
  SiNginx, SiLinux, SiVercel, SiCloudflare, SiAnsible, SiGrafana,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import "./TechnologiesSection.css";

const t = (label, Icon, color) => ({ label, Icon, color });

// Official brand colours, so every logo is recognisable at a glance.
const tabs = [
  {
    id: "mobile",
    label: "Mobile",
    items: [
      t("React Native", SiReact, "#61DAFB"),
      t("Flutter", SiFlutter, "#02569B"),
      t("Swift", SiSwift, "#F05138"),
      t("Kotlin", SiKotlin, "#7F52FF"),
      t("Android", SiAndroid, "#3DDC84"),
      t("iOS", SiApple, "#111111"),
      t("Ionic", SiIonic, "#3880FF"),
      t("Expo", SiExpo, "#000020"),
    ],
  },
  {
    id: "frontend",
    label: "Front End",
    items: [
      t("HTML", SiHtml5, "#E34F26"),
      t("CSS", SiCss, "#1572B6"),
      t("Bootstrap", SiBootstrap, "#7952B3"),
      t("Javascript", SiJavascript, "#F7DF1E"),
      t("Typescript", SiTypescript, "#3178C6"),
      t("React", SiReact, "#61DAFB"),
      t("Next", SiNextdotjs, "#000000"),
      t("Angular", SiAngular, "#DD0031"),
      t("Vue", SiVuedotjs, "#4FC08D"),
      t("NuxtJS", SiNuxt, "#00DC82"),
      t("Tailwind", SiTailwindcss, "#06B6D4"),
      t("Redux", SiRedux, "#764ABC"),
      t("Svelte", SiSvelte, "#FF3E00"),
      t("ElectronJS", SiElectron, "#47848F"),
      t("ASP.NET", SiDotnet, "#512BD4"),
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      t("MySQL", SiMysql, "#4479A1"),
      t("PostgreSQL", SiPostgresql, "#336791"),
      t("MongoDB", SiMongodb, "#47A248"),
      t("Redis", SiRedis, "#DC382D"),
      t("SQL Server", DiMsqlServer, "#CC2927"),
      t("Firebase", SiFirebase, "#FFCA28"),
      t("Supabase", SiSupabase, "#3ECF8E"),
      t("Elasticsearch", SiElasticsearch, "#005571"),
      t("SQLite", SiSqlite, "#003B57"),
      t("MariaDB", SiMariadb, "#003545"),
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      t("Node.js", SiNodedotjs, "#5FA04E"),
      t("Python", SiPython, "#3776AB"),
      t("Django", SiDjango, "#092E20"),
      t("FastAPI", SiFastapi, "#009688"),
      t("Flask", SiFlask, "#111111"),
      t("Laravel", SiLaravel, "#FF2D20"),
      t("PHP", SiPhp, "#777BB4"),
      t("Java", FaJava, "#EA2D2E"),
      t("Spring", SiSpring, "#6DB33F"),
      t(".NET", SiDotnet, "#512BD4"),
      t("Express", SiExpress, "#111111"),
      t("NestJS", SiNestjs, "#E0234E"),
      t("Go", SiGo, "#00ADD8"),
      t("Rails", SiRubyonrails, "#D30001"),
      t("GraphQL", SiGraphql, "#E10098"),
    ],
  },
  {
    id: "cms",
    label: "CMS",
    items: [
      t("WordPress", SiWordpress, "#21759B"),
      t("Shopify", SiShopify, "#7AB55C"),
      t("Webflow", SiWebflow, "#146EF5"),
      t("WooCommerce", SiWoocommerce, "#96588A"),
      t("Drupal", SiDrupal, "#0678BE"),
      t("Joomla", SiJoomla, "#5091CD"),
      t("Strapi", SiStrapi, "#4945FF"),
      t("Contentful", SiContentful, "#2478CC"),
      t("Sanity", SiSanity, "#F03E2F"),
      t("Wix", SiWix, "#0C6EFC"),
      t("Squarespace", SiSquarespace, "#111111"),
    ],
  },
  {
    id: "infra",
    label: "Infra and DevOps",
    items: [
      t("AWS", FaAws, "#FF9900"),
      t("Azure", VscAzure, "#0089D6"),
      t("Google Cloud", SiGooglecloud, "#4285F4"),
      t("Docker", SiDocker, "#2496ED"),
      t("Kubernetes", SiKubernetes, "#326CE5"),
      t("Terraform", SiTerraform, "#7B42BC"),
      t("Jenkins", SiJenkins, "#D24939"),
      t("GitHub Actions", SiGithubactions, "#2088FF"),
      t("Ansible", SiAnsible, "#EE0000"),
      t("Nginx", SiNginx, "#009639"),
      t("Linux", SiLinux, "#FCC624"),
      t("Grafana", SiGrafana, "#F46800"),
      t("Cloudflare", SiCloudflare, "#F38020"),
      t("Vercel", SiVercel, "#000000"),
    ],
  },
];

const TechnologiesSection = () => {
  const [activeId, setActiveId] = useState("frontend");
  const active = tabs.find((tab) => tab.id === activeId) || tabs[0];

  return (
    <section className="tech-section" aria-labelledby="tech-heading">
      <div className="tech-shell">
        <header className="tech-head">
          <h2 id="tech-heading">
            <em>Emerging</em> Technologies
          </h2>
          <p>
            Using the most up-to-date and current technology, we create
            effective solutions for businesses ranging from startups to
            Fortune 1000.
          </p>
        </header>

        <div className="tech-tabs" role="tablist" aria-label="Technology categories">
          {tabs.map((tab) => (
            <button
              type="button"
              role="tab"
              id={`tech-tab-${tab.id}`}
              aria-selected={tab.id === activeId}
              aria-controls="tech-panel"
              className={`tech-tab${tab.id === activeId ? " is-active" : ""}`}
              onClick={() => setActiveId(tab.id)}
              key={tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ul
          className="tech-grid"
          id="tech-panel"
          role="tabpanel"
          aria-labelledby={`tech-tab-${activeId}`}
          key={activeId}
        >
          {active.items.map(({ label, Icon, color }) => (
            <li className="tech-item" key={label}>
              <span className="tech-icon" aria-hidden="true">
                <Icon style={{ color }} />
              </span>
              <span className="tech-name">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnologiesSection;

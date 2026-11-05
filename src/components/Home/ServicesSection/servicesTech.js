import {
  SiPytorch, SiTensorflow, SiScikitlearn, SiHuggingface, SiFastapi, SiPython, SiMlflow,
  SiLangchain, SiAnthropic, SiN8N, SiPostgresql, SiElasticsearch, SiRedis, SiMeta,
  SiGooglegemini, SiMistralai, SiZapier, SiMake, SiReact, SiNodedotjs, SiTypescript,
  SiDocker, SiDotnet, SiStripe, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiFigma,
  SiWordpress, SiShopify, SiWebflow, SiWoocommerce, SiHubspot, SiPostman, SiGraphql,
  SiZoho, SiGoogleads, SiGoogleanalytics, SiTiktok, SiGoogletagmanager, SiLooker,
  SiGooglesearchconsole, SiSemrush, SiLighthouse, SiYoast, SiHotjar, SiMailchimp,
  SiMongodb, SiSupabase, SiFirebase, SiVercel, SiCloudflare, SiMixpanel, SiAirtable,
  SiIntercom, SiDialogflow, SiWhatsapp, SiGoogle,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaAws, FaLinkedin } from "react-icons/fa";

const t = (label, Icon, color) => ({ label, Icon, color });

const openai = t("OpenAI API", RiOpenaiFill, "#111111");
const python = t("Python", SiPython, "#3776AB");
const react = t("React", SiReact, "#61DAFB");
const node = t("Node.js", SiNodedotjs, "#5FA04E");
const ts = t("TypeScript", SiTypescript, "#3178C6");
const postgres = t("PostgreSQL", SiPostgresql, "#336791");
const docker = t("Docker", SiDocker, "#2496ED");
const aws = t("AWS", FaAws, "#FF9900");
const hubspot = t("HubSpot", SiHubspot, "#FF7A59");
const zapier = t("Zapier", SiZapier, "#FF4F00");
const n8n = t("n8n", SiN8N, "#EA4B71");
const ga = t("Google Analytics", SiGoogleanalytics, "#E37400");
const gads = t("Google Ads", SiGoogleads, "#4285F4");
const gsc = t("Search Console", SiGooglesearchconsole, "#458CF5");
const langchain = t("LangChain", SiLangchain, "#1C3C3C");
const hf = t("Hugging Face", SiHuggingface, "#FFB000");
const anthropic = t("Anthropic Claude", SiAnthropic, "#D97757");
const next = t("Next.js", SiNextdotjs, "#000000");
const tailwind = t("Tailwind CSS", SiTailwindcss, "#06B6D4");

// Technologies shown for each service (same order as the `services` array).
export const serviceTech = [
  [openai, t("PyTorch", SiPytorch, "#EE4C2C"), t("TensorFlow", SiTensorflow, "#FF6F00"), t("Scikit-learn", SiScikitlearn, "#F7931E"), hf, t("MLflow", SiMlflow, "#0194E2"), t("FastAPI", SiFastapi, "#009688"), python],
  [openai, anthropic, langchain, n8n, python, t("Dialogflow", SiDialogflow, "#FF9800"), t("WhatsApp", SiWhatsapp, "#25D366")],
  [langchain, postgres, t("Elasticsearch", SiElasticsearch, "#005571"), t("Redis", SiRedis, "#DC382D"), openai, python, t("Supabase", SiSupabase, "#3ECF8E")],
  [openai, anthropic, t("Gemini", SiGooglegemini, "#8E75B2"), t("Meta Llama", SiMeta, "#0467DF"), hf, t("Mistral AI", SiMistralai, "#FA520F")],
  [n8n, zapier, t("Make", SiMake, "#6D00CC"), python, t("Airtable", SiAirtable, "#18BFFF"), openai],
  [react, node, ts, python, postgres, docker, t(".NET", SiDotnet, "#512BD4")],
  [next, react, node, t("Stripe", SiStripe, "#635BFF"), postgres, aws, tailwind],
  [react, next, t("Vue.js", SiVuedotjs, "#4FC08D"), tailwind, ts, t("Figma", SiFigma, "#F24E1E"), t("Vercel", SiVercel, "#000000")],
  [t("WordPress", SiWordpress, "#21759B"), t("Shopify", SiShopify, "#7AB55C"), t("Webflow", SiWebflow, "#146EF5"), t("WooCommerce", SiWoocommerce, "#96588A"), t("Cloudflare", SiCloudflare, "#F38020")],
  [hubspot, t("Zoho CRM", SiZoho, "#E42527"), zapier, t("Postman", SiPostman, "#FF6C37"), t("GraphQL", SiGraphql, "#E10098"), t("Firebase", SiFirebase, "#FFCA28"), t("MongoDB", SiMongodb, "#47A248")],
  [gads, t("Meta Ads", SiMeta, "#0467DF"), t("LinkedIn Ads", FaLinkedin, "#0A66C2"), t("TikTok Ads", SiTiktok, "#000000"), ga, t("Looker Studio", SiLooker, "#4285F4")],
  [gads, ga, t("Tag Manager", SiGoogletagmanager, "#246FDB"), t("Looker Studio", SiLooker, "#4285F4"), gsc, hubspot],
  [gsc, ga, t("Semrush", SiSemrush, "#FF642D"), t("Lighthouse", SiLighthouse, "#F44B21"), t("Yoast SEO", SiYoast, "#A4286A"), t("Google", SiGoogle, "#4285F4")],
  [t("Hotjar", SiHotjar, "#FD3A5C"), ga, t("Mixpanel", SiMixpanel, "#7856FF"), t("Tag Manager", SiGoogletagmanager, "#246FDB"), t("Figma", SiFigma, "#F24E1E")],
  [hubspot, t("Mailchimp", SiMailchimp, "#FFE01B"), zapier, t("Intercom", SiIntercom, "#1F8DED"), t("WhatsApp", SiWhatsapp, "#25D366"), n8n],
];

export const serviceLinks = [
  "/services/ai-strategy",
  "/services/ai-chatbots-agents",
  "/services/ai-chatbots-agents",
  "/services/ai-strategy",
  "/services/workflow-automation",
  "/services/custom-software-development",
  "/services/saas-development",
  "/services/custom-website-development",
  "/services/custom-website-development",
  "/services/api-integrations",
  "/services/performance-marketing",
  "/services/google-ads",
  "/services/website-seo",
  "/services/conversion-optimization",
  "/services/marketing-automation",
];

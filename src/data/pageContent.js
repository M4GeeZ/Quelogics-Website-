const detail = (title, statement, capabilities, outcome) => ({
  title,
  statement,
  capabilities,
  outcome,
});

export const exploreContent = {
  services: {
    label: "Services",
    eyebrow: "Build with clarity",
    title: "Digital systems designed to move your business forward.",
    intro:
      "From the first product decision to long-term growth, our specialists connect strategy, design, engineering, automation, and visibility into one accountable delivery team.",
    proof: ["15 focused capabilities", "One senior delivery team", "Built around measurable outcomes"],
    detailEyebrow: "QueLogics service",
    process: ["Discover", "Design", "Build", "Improve"],
    entries: {
      "/services/custom-software-development": detail("Custom Software Development", "Software shaped around the way your business really works.", ["Product discovery and technical planning", "Secure web platforms and internal tools", "Cloud architecture and scalable APIs", "Continuous improvement and support"], "Replace operational friction with a reliable system your team can own and grow."),
      "/services/custom-website-development": detail("Website Development", "High-performing websites that turn attention into action.", ["Conversion-led website strategy", "Responsive front-end development", "CMS and third-party integrations", "Performance, accessibility, and SEO"], "Create a faster, clearer digital experience that earns trust and generates demand."),
      "/services/mobile-app-development": detail("Mobile App Development", "Mobile products people enjoy returning to.", ["iOS and Android product strategy", "Cross-platform app engineering", "Interface and interaction design", "Launch, analytics, and iteration"], "Move from app idea to a polished, dependable product without losing momentum."),
      "/services/saas-development": detail("SaaS Product Development", "Turn a strong product idea into a scalable SaaS business.", ["MVP definition and rapid validation", "Multi-tenant product architecture", "Subscriptions, roles, and dashboards", "Scale-up engineering and optimization"], "Launch the right feature set, learn sooner, and build on a foundation made to scale."),
      "/services/ui-ux-design": detail("UI / UX Design", "Make complex products feel effortless.", ["User research and journey mapping", "Wireframes and interactive prototypes", "Visual systems and product UI", "Usability testing and design QA"], "Give customers a clear path forward while reducing confusion, drop-off, and support load."),
      "/services/ai-chatbots-agents": detail("AI Chatbots & Agents", "AI assistants that do useful work—not just hold conversations.", ["Customer support copilots", "Knowledge-grounded AI assistants", "Lead qualification agents", "Monitoring, guardrails, and analytics"], "Serve customers faster and give your team back hours of repetitive work."),
      "/services/workflow-automation": detail("Workflow Automation", "Remove the handoffs, copy-paste, and follow-ups slowing work down.", ["Workflow and bottleneck audits", "No-code and custom automation", "Approvals, alerts, and data routing", "Reliability monitoring and optimization"], "Create smoother operations with fewer errors and more time for high-value decisions."),
      "/services/crm-automation": detail("CRM Automation", "Turn your CRM into a system your sales team can trust.", ["CRM architecture and cleanup", "Lead routing and lifecycle automation", "Pipeline reporting and attribution", "Sales and marketing integrations"], "Keep every opportunity moving with cleaner data, timely follow-up, and real visibility."),
      "/services/api-integrations": detail("API & Third-Party Integrations", "Make your tools exchange data like one connected system.", ["Custom API development", "Legacy and cloud integrations", "Payments, CRM, and ERP connections", "Data sync monitoring and recovery"], "End disconnected workflows and give teams one dependable flow of information."),
      "/services/ai-strategy": detail("AI Strategy Consulting", "Find the AI opportunities worth pursuing—and a safe path to value.", ["AI opportunity and readiness audit", "Use-case prioritization", "Prototype and vendor evaluation", "Governance and implementation roadmap"], "Invest in practical AI initiatives with clear value, ownership, and risk controls."),
      "/services/performance-marketing": detail("Performance Marketing", "Turn every campaign into a clearer growth decision.", ["Full-funnel campaign strategy", "Paid social and search execution", "Creative testing systems", "Attribution and performance reporting"], "Acquire customers efficiently with an experiment-driven engine built around real outcomes."),
      "/services/google-ads": detail("Google Ads & Lead Generation", "Show up when high-intent buyers are ready to act.", ["Search and Performance Max campaigns", "Keyword and competitor intelligence", "Landing page alignment", "Call and conversion tracking"], "Generate better-qualified opportunities while making every advertising dollar accountable."),
      "/services/website-seo": detail("SEO & AEO", "Be discoverable wherever customers search for answers.", ["Technical and on-page SEO", "Answer-engine content strategy", "Authority and topic development", "Search performance measurement"], "Build durable organic visibility across traditional search and AI-powered discovery."),
      "/services/conversion-optimization": detail("Conversion Optimization", "Make more of the traffic you already earned.", ["Conversion and behavior audits", "Journey and landing page redesign", "Experiment planning and A/B testing", "Analytics and funnel measurement"], "Remove hesitation from the customer journey and turn more visits into valuable actions."),
      "/services/marketing-automation": detail("Marketing Automation", "Deliver relevant follow-up without adding manual work.", ["Lifecycle and nurture strategy", "Email and audience automation", "Lead scoring and segmentation", "Campaign measurement and optimization"], "Create consistent, personal customer journeys that keep leads moving toward a decision."),
    },
  },
  industries: {
    label: "Industries",
    eyebrow: "Built for real-world operations",
    title: "Technology that understands the context around your business.",
    intro: "Industry knowledge changes what gets built, how risk is managed, and where value appears first. We adapt proven digital capabilities to the realities of your teams and customers.",
    proof: ["12 industry contexts", "Workflow-first discovery", "Security and scale considered"],
    detailEyebrow: "Industry expertise",
    process: ["Understand", "Prioritize", "Modernize", "Scale"],
    entries: {
      "/industries/government": detail("Government & Public Sector", "Accessible digital services built for public trust.", ["Citizen portals and self-service", "Case and workflow digitization", "Legacy system integration", "Accessibility and audit readiness"], "Deliver simpler public experiences while improving visibility, security, and operational control."),
      "/industries/healthcare": detail("Healthcare", "Connected experiences for patients, practitioners, and operations.", ["Patient and provider portals", "Appointment and workflow automation", "Healthcare data integrations", "Secure experience design"], "Reduce administrative load and make every care journey easier to navigate."),
      "/industries/finance": detail("Finance & Banking", "Secure digital products that make complex decisions feel clear.", ["Customer onboarding journeys", "Fintech platforms and dashboards", "Process and compliance automation", "Secure data integrations"], "Increase confidence and speed without compromising the controls financial services demand."),
      "/industries/professional-services": detail("Professional Services", "Systems that let expert teams spend more time being experts.", ["Client portals and collaboration", "Proposal and intake automation", "Resource and project visibility", "CRM and billing integrations"], "Standardize delivery, strengthen client experience, and protect your team’s valuable time."),
      "/industries/ecommerce-retail": detail("eCommerce & Retail", "Commerce experiences built to convert and retain.", ["Storefront and checkout experiences", "Product and inventory integrations", "Lifecycle marketing automation", "Analytics and conversion testing"], "Make discovery, purchase, and repeat buying feel effortless across every channel."),
      "/industries/real-estate": detail("Real Estate", "Connect properties, people, and decisions in one digital journey.", ["Property portals and search", "Lead routing and CRM automation", "Tenant and owner experiences", "Listing and data integrations"], "Move prospects faster from first interest to confident action with fewer manual handoffs."),
      "/industries/hospitality": detail("Restaurants & Hospitality", "Digital guest experiences that keep operations moving.", ["Booking and ordering products", "Guest communication automation", "Loyalty and CRM journeys", "POS and platform integrations"], "Create memorable service before, during, and after every visit while simplifying the work behind it."),
      "/industries/automotive": detail("Automotive", "Modern buying and service journeys for a changing market.", ["Vehicle discovery experiences", "Dealer lead management", "Service booking automation", "Inventory and CRM integrations"], "Help customers move from research to relationship with a faster, more connected experience."),
      "/industries/manufacturing": detail("Manufacturing", "Practical digital systems for more visible operations.", ["Production workflow digitization", "Quality and maintenance tools", "ERP and data integration", "Operational dashboards"], "Reduce blind spots and repetitive work while helping teams respond sooner."),
      "/industries/logistics": detail("Logistics & Supply Chain", "Real-time visibility across every moving part.", ["Shipment and fleet platforms", "Dispatch and exception workflows", "Partner and customer portals", "Tracking and ERP integrations"], "Improve coordination, reduce delays, and give customers answers without manual chasing."),
      "/industries/saas-technology": detail("SaaS & Technology", "Product expertise for teams moving from roadmap to growth.", ["Product discovery and UX", "Platform and feature engineering", "Billing and product integrations", "Activation and retention optimization"], "Ship valuable improvements faster while keeping the product stable, usable, and ready to scale."),
      "/industries/startups": detail("Startups & Scaleups", "Focus your runway on the product decisions that matter most.", ["MVP strategy and validation", "Rapid product design", "Scalable engineering foundations", "Growth experiments and analytics"], "Learn from the market sooner and scale with fewer costly product reversals."),
    },
  },
  solutions: {
    label: "Solutions",
    eyebrow: "Start with the outcome",
    title: "Focused solutions for the business gap in front of you.",
    intro: "You do not need disconnected deliverables. You need the right mix of product, automation, data, and growth expertise assembled around one measurable result.",
    proof: ["Outcome-led roadmaps", "Cross-functional execution", "Clear success measures"],
    detailEyebrow: "Business solution",
    process: ["Define", "Connect", "Deliver", "Measure"],
    entries: {
      "/solutions/business-automation": detail("Automate Manual Operations", "Give repetitive work to systems and judgment back to people.", ["Process mapping and opportunity audit", "Automated routing and approvals", "Document and data workflows", "Operational reporting"], "Shorten cycle times, reduce errors, and free your team for work that needs human attention."),
      "/solutions/lead-generation": detail("Generate Qualified Leads", "Build a demand system focused on fit, not vanity volume.", ["Ideal customer and offer strategy", "Paid and organic acquisition", "Conversion-focused landing journeys", "Lead scoring and CRM automation"], "Create a predictable path from attention to qualified sales conversations."),
      "/solutions/conversion-growth": detail("Improve Website Conversion", "Turn your website into a clearer reason to choose you.", ["Journey and messaging audit", "UX and interface improvements", "Landing page experimentation", "Conversion analytics"], "Help more visitors understand the value, trust the offer, and take the next step."),
      "/solutions/system-integration": detail("Connect Disconnected Tools", "Create one reliable flow across the systems your teams use.", ["Systems and data-flow audit", "API and middleware development", "Real-time and scheduled sync", "Monitoring and recovery"], "Remove duplicated effort and make accurate information available where decisions happen."),
      "/solutions/mvp-development": detail("Launch an MVP", "Validate the riskiest product assumptions with a focused first release.", ["Product framing and prioritization", "Prototype and usability validation", "MVP design and engineering", "Launch learning and iteration"], "Reach real users sooner with a credible product built for learning and extension."),
      "/solutions/software-modernization": detail("Modernize Legacy Software", "Move forward without putting today’s operations at risk.", ["Architecture and codebase assessment", "Incremental modernization roadmap", "Interface and experience renewal", "Cloud and integration migration"], "Improve speed, security, and maintainability through controlled, value-led modernization."),
      "/solutions/customer-portals": detail("Build a Customer Portal", "Give customers one clear place to get things done.", ["Portal strategy and experience design", "Authentication and role management", "Self-service workflows", "CRM, billing, and data integration"], "Reduce service friction while giving customers control, clarity, and always-on access."),
      "/solutions/quality-assurance": detail("Quality Assurance & Testing", "Release with evidence, not hope.", ["Test strategy and risk coverage", "Functional and regression testing", "Performance and compatibility checks", "Automation and release quality"], "Catch issues earlier, protect critical journeys, and ship more confidently."),
      "/solutions/wordpress": detail("WordPress", "A flexible publishing platform built for performance and easy ownership.", ["Custom theme and block development", "Content architecture and migration", "Plugin and business integrations", "Performance and security hardening"], "Give marketing teams freedom without trading away speed, quality, or maintainability."),
      "/solutions/shopify": detail("Shopify", "A commerce experience engineered around discovery and conversion.", ["Store strategy and UX design", "Custom Shopify development", "App and operations integration", "Conversion and retention optimization"], "Launch and grow a storefront that is easier to buy from and easier to operate."),
      "/solutions/webflow": detail("Webflow", "Marketing sites with visual control and production-level polish.", ["Information and content architecture", "Webflow design and development", "CMS and interaction systems", "SEO, performance, and handoff"], "Move campaigns and content faster with a site your team can confidently manage."),
      "/solutions/crm-api-integrations": detail("CRM & API Integrations", "Build a dependable connection between customer data and daily action.", ["CRM structure and data cleanup", "Custom API and webhook integrations", "Sales and service automation", "Reporting and data governance"], "Give every team a more complete customer view and reduce the gaps where opportunities disappear."),
    },
  },
  insights: {
    label: "Insights",
    eyebrow: "Ideas you can apply",
    title: "Practical thinking for better digital decisions.",
    intro: "Explore field-tested perspectives on product, automation, experience, and growth—written to help teams turn an interesting idea into useful action.",
    proof: ["Built from delivery experience", "Plain-language guidance", "Made for practical action"],
    detailEyebrow: "QueLogics insights",
    process: ["Explore", "Evaluate", "Apply", "Learn"],
    entries: {
      "/case-studies": detail("Case Studies", "See how ambitious ideas become working digital systems.", ["Product and platform transformations", "Automation success stories", "Experience and conversion outcomes", "Lessons from real delivery"], "Explore the decisions, craft, and collaboration behind work made to produce lasting value."),
      "/client-reviews": detail("Client Reviews", "Hear what partnership with QueLogics feels like from the teams we support.", ["Verified client perspectives", "Delivery and communication stories", "Long-term partnership experiences", "Outcomes in the client’s words"], "Understand the trust, responsiveness, and delivery discipline clients value in our work together."),
      "/portfolio": detail("Our Work & Portfolio", "Explore digital products, platforms, and experiences made to perform.", ["Web and mobile products", "Operational platforms", "Commerce and growth experiences", "AI and automation systems"], "See the range of challenges we solve and the care we bring to every digital touchpoint."),
      "/insights/ai-automation": detail("AI & Automation", "Practical guidance for moving from AI curiosity to operational value.", ["AI opportunity frameworks", "Automation design patterns", "Agent and chatbot playbooks", "Governance and measurement"], "Make more confident automation decisions with a clear view of value, effort, and risk."),
      "/insights/software-product": detail("Software & Product", "Better ways to shape, build, and evolve digital products.", ["Product strategy frameworks", "Architecture and engineering guidance", "MVP and modernization lessons", "Scale and quality practices"], "Turn product uncertainty into sharper decisions across discovery, delivery, and growth."),
      "/insights/seo-growth": detail("SEO, AEO & Growth", "Understand how modern customers discover and choose businesses.", ["Search and answer-engine strategy", "Demand and conversion playbooks", "Content and authority systems", "Measurement and experimentation"], "Build visibility that compounds and growth systems you can actually understand."),
      "/insights/design-conversion": detail("UI / UX & Conversion", "Design insight for experiences that feel clear and perform well.", ["UX research methods", "Interface design principles", "Conversion frameworks", "Testing and optimization"], "Make customer journeys easier to use, easier to trust, and more likely to convert."),
      "/insights/automation-guides": detail("Automation Guides", "Step-by-step thinking for removing repetitive work.", ["Workflow audit templates", "Tool and platform comparisons", "Integration planning", "Automation reliability checks"], "Identify strong automation opportunities and implement them with fewer surprises."),
      "/insights/growth-playbooks": detail("Growth Playbooks", "Repeatable frameworks for attracting and converting the right demand.", ["Acquisition planning", "Offer and landing page frameworks", "Lead nurture systems", "Experiment scorecards"], "Give your team a practical starting point for disciplined, measurable growth."),
      "/insights/development-guides": detail("Development Guides", "Clear technical guidance for smarter product decisions.", ["Architecture fundamentals", "Platform selection guides", "Security and performance checklists", "Delivery and quality practices"], "Understand the tradeoffs behind reliable software without getting lost in the jargon."),
    },
  },
};

export const findDetailContent = (pathname) => {
  for (const [sectionKey, section] of Object.entries(exploreContent)) {
    if (section.entries[pathname]) {
      return { ...section.entries[pathname], sectionKey, section };
    }
  }

  return null;
};

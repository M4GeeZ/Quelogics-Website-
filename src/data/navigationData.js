export const navigationLinks = [
  {
    id: 1,
    title: "Services",
    path: "/services",
    hasDropdown: true,
    menuTitle: "Build, automate, and grow",
    description:
      "Connected digital services that remove bottlenecks, launch better products, and turn attention into measurable growth.",
    groups: [
      {
        title: "Development",
        links: [
          ["Custom Software Development", "/services/custom-software-development"],
          ["Website Development", "/services/custom-website-development"],
          ["Mobile App Development", "/services/mobile-app-development"],
          ["SaaS Product Development", "/services/saas-development"],
          ["UI / UX Design", "/services/ui-ux-design"],
        ],
      },
      {
        title: "AI & Automation",
        links: [
          ["AI Chatbots & Agents", "/services/ai-chatbots-agents"],
          ["Workflow Automation", "/services/workflow-automation"],
          ["CRM Automation", "/services/crm-automation"],
          ["API & Third-Party Integrations", "/services/api-integrations"],
          ["AI Strategy Consulting", "/services/ai-strategy"],
        ],
      },
      {
        title: "Marketing & Visibility",
        links: [
          ["Performance Marketing", "/services/performance-marketing"],
          ["Google Ads & Lead Generation", "/services/google-ads"],
          ["SEO & AEO", "/services/website-seo"],
          ["Conversion Optimization", "/services/conversion-optimization"],
          ["Marketing Automation", "/services/marketing-automation"],
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Industries",
    path: "/industries",
    hasDropdown: true,
    menuTitle: "Industry-aware digital systems",
    description:
      "Technology shaped around the workflows, customers, and operational realities of your sector.",
    groups: [
      {
        title: "Enterprise & Public",
        links: [
          ["Government & Public Sector", "/industries/government"],
          ["Healthcare", "/industries/healthcare"],
          ["Finance & Banking", "/industries/finance"],
          ["Professional Services", "/industries/professional-services"],
        ],
      },
      {
        title: "Commerce & Property",
        links: [
          ["eCommerce & Retail", "/industries/ecommerce-retail"],
          ["Real Estate", "/industries/real-estate"],
          ["Restaurants & Hospitality", "/industries/hospitality"],
          ["Automotive", "/industries/automotive"],
        ],
      },
      {
        title: "Operations & Technology",
        links: [
          ["Manufacturing", "/industries/manufacturing"],
          ["Logistics & Supply Chain", "/industries/logistics"],
          ["SaaS & Technology", "/industries/saas-technology"],
          ["Startups & Scaleups", "/industries/startups"],
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Solutions",
    path: "/solutions",
    hasDropdown: true,
    menuTitle: "Solutions built around the outcome",
    description:
      "Start with the business gap you need to close, then combine the right product, automation, and growth capabilities.",
    groups: [
      {
        title: "Business Outcomes",
        links: [
          ["Automate Manual Operations", "/solutions/business-automation"],
          ["Generate Qualified Leads", "/solutions/lead-generation"],
          ["Improve Website Conversion", "/solutions/conversion-growth"],
          ["Connect Disconnected Tools", "/solutions/system-integration"],
        ],
      },
      {
        title: "Product Solutions",
        links: [
          ["Launch an MVP", "/solutions/mvp-development"],
          ["Modernize Legacy Software", "/solutions/software-modernization"],
          ["Build a Customer Portal", "/solutions/customer-portals"],
          ["Quality Assurance & Testing", "/solutions/quality-assurance"],
        ],
      },
      {
        title: "Platforms",
        links: [
          ["WordPress", "/solutions/wordpress"],
          ["Shopify", "/solutions/shopify"],
          ["Webflow", "/solutions/webflow"],
          ["CRM & API Integrations", "/solutions/crm-api-integrations"],
        ],
      },
    ],
  },

];

export const companyMenu = {
  id: "company",
  title: "Company",
  path: "/about",
  hasDropdown: true,
  groups: [
    {
      title: "Get Us to Know",
      links: [
        ["About Us", "/about"],
        ["Careers", "/careers"],
        ["Contact Us", "/contact"],
      ],
    },
    {
      title: "Work With Us",
      links: [
        ["Portfolio", "/portfolio"],
        ["Case Studies", "/case-studies"],
        ["Client Reviews", "/client-reviews"],
      ],
    },
  ],
};

export const hireTeamMenu = {
  "id": "hire-team",
  "title": "Hire Team",
  "path": "/contact",
  "hasDropdown": true,
  "groups": [
    {
      "title": "Backend Technologies",
      "links": [
        [
          "Nodejs Developer",
          "/contact?role=nodejs-developer"
        ],
        [
          "Python Developer",
          "/contact?role=python-developer"
        ],
        [
          "Django Developer",
          "/contact?role=django-developer"
        ],
        [
          "AI/ML Developer",
          "/contact?role=ai-ml-developer"
        ],
        [
          "Java Developer",
          "/contact?role=java-developer"
        ],
        [
          "Data Engineer",
          "/contact?role=data-engineer"
        ],
        [
          "DevOps Engineer",
          "/contact?role=devops-engineer"
        ]
      ]
    },
    {
      "title": "Frontend Technologies",
      "links": [
        [
          "JavaScript Developer",
          "/contact?role=javascript-developer"
        ],
        [
          "ReactJS Developer",
          "/contact?role=reactjs-developer"
        ],
        [
          "VueJS Developer",
          "/contact?role=vuejs-developer"
        ],
        [
          "Typescript Developer",
          "/contact?role=typescript-developer"
        ],
        [
          "UI/UX Designer",
          "/contact?role=ui-ux-designer"
        ]
      ]
    },
    {
      "title": "Mobile Technologies",
      "links": [
        [
          "React Native Developer",
          "/contact?role=react-native-developer"
        ],
        [
          "iOS Developers",
          "/contact?role=ios-developers"
        ],
        [
          "Android Developers",
          "/contact?role=android-developers"
        ]
      ]
    },
    {
      "title": "Cloud Developer",
      "links": [
        [
          "AWS/GCP",
          "/contact?role=aws-gcp"
        ],
        [
          "Azure",
          "/contact?role=azure"
        ]
      ]
    },
    {
      "title": "CMS Developers",
      "links": [
        [
          "WordPress Developer",
          "/contact?role=wordpress-developer"
        ],
        [
          "Shopify Developer",
          "/contact?role=shopify-developer"
        ]
      ]
    },
    {
      "title": "Hire by Role",
      "links": [
        [
          "CTO",
          "/contact?role=cto"
        ],
        [
          "Product Manager",
          "/contact?role=product-manager"
        ],
        [
          "Saas Developer",
          "/contact?role=saas-developer"
        ],
        [
          "MERN Stack Developers",
          "/contact?role=mern-stack-developers"
        ],
        [
          "QA Testers",
          "/contact?role=qa-testers"
        ]
      ]
    }
  ]
};

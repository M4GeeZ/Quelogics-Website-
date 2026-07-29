# QueLogics File Guide

```text
QueLogics_React_Clean/
├── public/
│   └── assets/
├── src/
│   ├── assets/
│   │   └── project-images/
│   ├── components/
│   │   ├── Common/
│   │   │   ├── ButtonEffects.jsx
│   │   │   ├── ButtonEffects.css
│   │   │   ├── Reveal.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── Home/
│   │       ├── Hero/
│   │       ├── ProjectsSection/
│   │       ├── ServicesSection/
│   │       ├── IndustriesSection/
│   │       ├── SelectedWorkSection/
│   │       ├── ProjectStackSection/
│   │       ├── ReviewsSection/
│   │       └── ProcessSection/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Services/
│   │   ├── Industries/
│   │   ├── Solutions/
│   │   ├── Insights/
│   │   ├── About/
│   │   ├── Careers/
│   │   ├── Contact/
│   │   ├── CaseStudies/
│   │   ├── ClientReviews/
│   │   ├── Portfolio/
│   │   ├── DetailPage/
│   │   └── Shared/
│   │       ├── ExplorePageLayout/
│   │       ├── CompanyPageLayout/
│   │       └── PageStyles.css
│   ├── context/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   ├── navigationData.js
│   │   └── pageContent.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── websiteTheme.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

## Where to edit

- Homepage hero: `src/components/Home/Hero/Hero.jsx` and `Hero.css`
- Homepage services section: `src/components/Home/ServicesSection/`
- Homepage industries section: `src/components/Home/IndustriesSection/`
- Homepage projects section: `src/components/Home/ProjectsSection/`
- Navbar: `src/components/Navbar/`
- Footer: `src/components/Footer/`
- About route: `src/pages/About/`
- Contact route: `src/pages/Contact/`
- Services route: `src/pages/Services/`
- Industries route: `src/pages/Industries/`
- Solutions route: `src/pages/Solutions/`
- Insights route: `src/pages/Insights/`
- Page copy/content: `src/data/pageContent.js`
- Navigation data: `src/data/navigationData.js`
- Shared styling used by Services, Industries, Solutions, Insights, About, Careers, Contact, and detail routes: `src/pages/Shared/PageStyles.css`

## Detail page routing (separated)

- `src/pages/DetailPage/DetailPage.jsx` handles only `/services/:slug`.
- `src/pages/IndustryDetailPage/IndustryDetailPage.jsx` handles only `/industries/:slug`.
- `src/pages/SolutionDetailPage/SolutionDetailPage.jsx` handles only `/solutions/:slug`.
- `src/pages/InsightDetailPage/InsightDetailPage.jsx` handles only `/insights/:slug`.

Each detail component validates its own section before rendering, so a route can no longer fall through to another category's template.

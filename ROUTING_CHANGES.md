# Detail pages separated by section

The project now uses a dedicated component and route for every detail-page family:

- `/services/:slug` → `src/pages/DetailPage/DetailPage.jsx`
- `/industries/:slug` → `src/pages/IndustryDetailPage/IndustryDetailPage.jsx`
- `/solutions/:slug` → `src/pages/SolutionDetailPage/SolutionDetailPage.jsx`
- `/insights/:slug` → `src/pages/InsightDetailPage/InsightDetailPage.jsx`

Each component calls `findSectionDetailContent(sectionKey, pathname)`, so it can only load content from its own section. Invalid slugs return to that section's listing page instead of rendering a different template.

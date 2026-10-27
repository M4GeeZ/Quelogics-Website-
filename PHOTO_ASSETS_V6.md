# QueLogics V6: photographic background assets

This update places real photography from Unsplash (`images.unsplash.com`) in all 7 industry panels, all 5 steps of the process wheel, and all 15 service/technology cards. Existing headings, icons, text, interactive panel switching, brand fonts/colors are retained.

**Important delivery note:** the supplied execution environment cannot download image binaries from external hosts. Therefore these images are referenced through Unsplash's photo CDN, not bundled as image files. The site needs an Internet connection to load them. Original local SVG backgrounds remain fallbacks for Industries and Process if a photo fails; Services retain their existing gradient background on image failure. Before using in a production site with a strict image-hosting or CSP requirement, consider downloading/licensing the photos into `public/assets/photos/` and switching the references to local paths.

Source: Unsplash photographic images (see `src/data/realPhotoData.js` for exact asset addresses). Please verify image selection and licensing before commercial publishing, especially if using images depicting people or identifiable brands. No image in this update should imply these are photographs of QueLogics employees or client sites.

Other changes: project image top-left number label removed, current Services panel made more compact at desktop zoom 100%, footer floating hover glow removed, footer icon hover navy-on-yellow retained.

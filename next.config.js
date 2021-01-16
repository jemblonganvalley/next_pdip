const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass());

// module.exports = {
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       "/": { page: "/" },
//       "/berita": { page: "/berita/[query].jsx" },
//       "/about": { page: "/about/About.jsx" },
//     };
//   },
// };

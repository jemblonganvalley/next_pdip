module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/berita": { page: "/berita/[query].jsx" },
      "/about": { page: "/about/About.jsx" },
    };
  },
};

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  assetPrefix: isProd ? "/news-for-everyone/" : "",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

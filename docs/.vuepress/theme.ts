import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "http://localhost:8080",
  author: {
    name: "SealDice Team",
    url: "https://github.com/sealdice",
  },
  favicon: "/images/sealdice.ico",
  docsDir: "docs",
  // lastUpdatedText: "最近更新",

  navbar,
  logo: "/images/sealdice.ico",
  repo: "sealdice/sealdice-manual-next",

  sidebar,

  breadcrumb: false,

  pageInfo: ["Date", "ReadingTime"],

  metaLocales: {
    contributors: false,
    editLink: "在 Github 上编辑此页",
    docsRepo: "sealdice/sealdice-manual-next",
    docsBranch: "main",
  },

  displayFooter: false,

  home: "/index.md",

  pure: true,
  print: false,

  plugins: {
    copyCode: {
      showInMobile: true,
    },
    mdEnhance: {
      container: true,
      tabs: true,
      figure: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      align: true,
      mermaid: true,
    },
  },
});
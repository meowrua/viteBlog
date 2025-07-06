import { defineConfig } from "vitepress";
import path from "path";

export default defineConfig({
  srcDir: "src/pages", // 文章资源目录
  base: "/viteBlog/",
  title: "Meow的博客",
  description: "学习记录与技术积累",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  vite: {
    publicDir: path.resolve(__dirname, "../src/public"), // 公共资源目录
    // 确保路径别名正确
    resolve: {
      alias: {
        "@public": path.resolve(__dirname, "../src/public"),
      },
    },
  },
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "首页", link: "/" },
      { text: "博客文章", link: "/blog" },
      { text: "开源项目", link: "/os-collection" },
      { text: "导航网站", link: "/website-nav" },
    ],
    sidebar: [
      {
        text: "博客文章",
        items: [
          { text: "前端", link: "/frontend" },
          { text: "Cocos", link: "/cocos" },
        ],
      },
      {
        text: "开源项目",
        items: [{ text: "开源项目", link: "/os-collection" }],
      },
      {
        text: "导航网站",
        items: [{ text: "导航网站", link: "/website-nav" }],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/meowrua/viteBlog" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.48 2.58L1 .66v12.053h.007C1.222 18.458 6.091 23 12 23s10.778-4.542 10.993-10.286H23V.661L16.52 2.58A11.2 11.2 0 0 0 12 1.639c-1.609 0-3.14.336-4.52.94M5.137 3.972A11 11 0 0 0 3 6.177V3.34zM21 3.339v2.838a11 11 0 0 0-2.137-2.205zM9 12H7V9h2zm8 0h-2V9h2zm-4.105 2.053c.378.757.856.985 1.188 1.013c.34.028.759-.131 1.085-.62l.555-.833l1.664 1.11l-.555.832c-.674 1.01-1.755 1.6-2.915 1.504c-.713-.06-1.37-.37-1.917-.885c-.546.515-1.204.826-1.917.885c-1.16.097-2.241-.494-2.915-1.504l-.555-.832l1.664-1.11l.555.832c.326.49.745.65 1.085.621c.332-.028.81-.256 1.189-1.013l.894-1.79z"/></svg>',
        },
        link: "https://space.bilibili.com/434188683?spm_id_from=333.1007.0.0",
      },
    ],
  },
});

import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Simulacrum",
  subTitle: "Text Imitation of my Personality",
  brandTitle: "Bg. Ch.",

  description: "The attempts to formulate my thoughts",

  //TODO: add new URL
  site: "https://yukina-blog.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_repository,
      href: "/repository",
    },
  ],

  username: "Bg. Ch.",
  sign: "Mathematician, Quasi-Musician, Pseudo-Intellectual and just a Sweet Bun",
  avatarUrl: "/images/avatar.jpg",
  socialLinks: [
    {
      icon: "mdi:youtube",
      link: "https://www.youtube.com/@Bg.Ch.youTube",
    },
    {
      icon: "tabler:brand-telegram",
      link: "https://t.me/Bg_Ch_and_other_sweet_buns",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/banners/banner1.jpg",
    "/banners/banner2.jpg",
    "/banners/banner3.jpg",
    "/banners/banner4.jpg",
    "/banners/banner5.jpg",
    "/banners/banner6.jpg",
    "/banners/banner7.jpg",
    "/banners/banner8.jpg",
    "/banners/banner9.jpg",
    "/banners/banner10.jpg",
    "/banners/banner11.jpg",
    //"https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
    //"https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
    //"https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    //"https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
    //"https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
    //"https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
    //"https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
    //"https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;

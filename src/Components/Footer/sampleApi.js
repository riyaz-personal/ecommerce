/**
|--------------------------------------------------
| Import folder path 
|--------------------------------------------------
*/

import { imagePath } from "../../Api/helper";

/**
|--------------------------------------------------
| Get public root path folder 
|--------------------------------------------------
*/

const { PUBLIC_URL } = process.env;

const socialMenu = {
  responseHeader: {
    status: 0,
    QTime: 0,
    params: {
      q: "*",
    },
  },
  response: {
    numFound: 3885,
    start: 0,
    docs: [
      {
        link: "https://in.pinterest.com/myshopview/",
        logo: `${PUBLIC_URL}${imagePath}/pinterest.png`,
        alt: "pinterest"
      },
      {
        link: "https://www.facebook.com/shopview.in/",
        logo: `${PUBLIC_URL}${imagePath}/facebook.png`,
        alt: "facebook"
      },
      {
        link: "https://twitter.com/MyShopView",
        logo: `${PUBLIC_URL}${imagePath}/twitter.png`,
        alt: "twitter"
      },
    ],
  },
};

export default socialMenu;

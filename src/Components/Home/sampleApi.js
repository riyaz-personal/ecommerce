import { imagePath } from "../../Api/helper";
const { PUBLIC_URL } = process.env;
const ImageList = {
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
        image:`${PUBLIC_URL}${imagePath}/banner1.jpg`,
        imageLink: "/store/1",
      },
      {
        image:`${PUBLIC_URL}${imagePath}/banner2.jpg`,
        imageLink: "/store/1",
      },
      {
        image:`${PUBLIC_URL}${imagePath}/banner3.jpg`,
        imageLink: "/store/1",
      },
      {
        image:`${PUBLIC_URL}${imagePath}/banner4.jpg`,
        imageLink: "/store/1",
      },
      {
        image:`${PUBLIC_URL}${imagePath}/banner5.jpg`,
        imageLink: "/store/1",
      },
    ],
  },
};

export default ImageList;

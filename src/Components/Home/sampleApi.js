import { imagePath } from "../../Api/helper";
const { PUBLIC_URL } = process.env;
const ImageList = {
  status: "200",
  status_message: "Success",
  data: {
    success: [
      {
        image_path: `${PUBLIC_URL}${imagePath}/banner1.jpg`,
        web_link: "/store/1",
      },
      {
        image_path: `${PUBLIC_URL}${imagePath}/banner2.jpg`,
        web_link: "/store/1",
      },
      {
        image_path: `${PUBLIC_URL}${imagePath}/banner3.jpg`,
        web_link: "/store/1",
      },
      {
        image_path: `${PUBLIC_URL}${imagePath}/banner4.jpg`,
        web_link: "/store/1",
      },
      {
        image_path: `${PUBLIC_URL}${imagePath}/banner5.jpg`,
        web_link: "/store/1",
      },
    ],
  },
};

export default ImageList;

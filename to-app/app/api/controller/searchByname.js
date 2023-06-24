import axios from "axios";
const apiKEY = process.env.NEXT_PUBLIC_API_KEY;
export const handleApi = async (search) => {
  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${apiKEY}&cx=b0ebd37c3a2a44c83&q=${search}`
  );
  const responseFilter = response.data.items.slice(0, 2).map((e, index) => {
    let imageSrc;
    if (e.pagemap.metatags && e.pagemap.metatags[0]["og:image"]) {
      imageSrc = e.pagemap.metatags[0]["og:image"];
    } else if (e.pagemap.cse_image && e.pagemap.cse_image[0].src) {
      imageSrc = e.pagemap.cse_image[0].src;
    } else if (e.pagemap.cse_thumbnail && e.pagemap.cse_thumbnail[0].src) {
      imageSrc = e.pagemap.cse_thumbnail[0].src;
    }
    return {
      key: index,
      name: e.title,
      link: e.link,
      image: imageSrc,
    };
  });
  return responseFilter;
};

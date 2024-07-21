import axios from "axios";

const accessKey = import.meta.env.VITE_unsplash_api;

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common = {
  Authorization: `Client-ID ${accessKey}`,
  "Accept-Version": "v1",
};
const perPage = 12;
export default async function getImages(query, page) {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  const { results: images, total_pages: totalPages } = response.data;
  return { images, totalPages };
}
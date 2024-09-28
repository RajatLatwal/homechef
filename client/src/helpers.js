import axios from "axios";

export const getFavourites = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/getFavourites/${id}`, {
    withCredentials: true,
  });
  const data = await res.data;
  return data.favourites;
};

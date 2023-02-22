import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID mSVTMnDYoDQIQKmWQ_qj3CRRNEQC0EEzcdr8WFhbsUM",
    },
    params: {
      query: term,
    },
  });

  console.log(response);

  // return response;
  return response.data.results;
};

export default searchImages;

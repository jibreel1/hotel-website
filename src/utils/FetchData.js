export const hotelOptions = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
   },
};

export const fetchData = async (url, options) => {
   const response = await fetch(url, options);
   const data = await response.json();

   return data;
};

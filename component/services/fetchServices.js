// fetchServices.js
const fetchServices = {
  postData: async (url = "", data = {}) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw new Error(`Error occurred during POST request: ${error.message}`);
    }
  },
};

export default fetchServices;

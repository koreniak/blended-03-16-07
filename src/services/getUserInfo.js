export const userInfo = (latitude, longitude) => {
  console.log(longitude, latitude);
  const API_KEY = "d4683b09d0c94ec0aebf0b2e043decbf";

  const baseUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}&language=en`;

  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => console.log(data.results[0].annotations.currency.iso_code));
};

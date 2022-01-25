import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '9c0c2769aamsh8120a730a2418e5p1c63e5jsncb46448e8465'
    }
  });

  return data;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import axiosClient from "./axiosClient";

// Utility function to handle API requests
const handleApiRequest = async (request: () => Promise<any>) => {
  try {
    const response = await request();
    if (!response || !response.data) {
      throw new Error("Invalid API response");
    }
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

// Fetch all countries
const getAllCountries = async () =>
  handleApiRequest(() => axiosClient.get("/countries"));

// Fetch states by country name
const getStatesByCountryName = async (countryName: string) =>
  handleApiRequest(() => axiosClient.get(`/states/${countryName}`));

// Fetch cities by state name
const getCityByStateName = async (stateName: string) =>
  handleApiRequest(() => axiosClient.get(`/cities/${stateName}`));

export { getAllCountries, getCityByStateName, getStatesByCountryName };

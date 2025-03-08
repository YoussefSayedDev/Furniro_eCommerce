// "use client";
// // import { getAllCountries, getCityByStateName, getStatesByCountryName,} from "@/utils/CountriesApi";
// import { useEffect, useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import CustomInput from "./CustomInput";
// import SelectInput from "./SelectInput";

// interface AdjustedCountry {
//   country_name: string;
//   country_short_name: string;
//   country_phone_code: number;
// }

// interface AdjustedState {
//   state_name: string;
// }

// interface AdjustedCity {
//   city_name: string;
// }

// const CheckoutInputs = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [phoneCountry, setPhoneCountry] = useState("US");

//   useEffect(() => {
//     fetchCountries();
//   }, []);

//   const fetchCountries = async () => {
//     try {
//       // const response = await getAllCountries();
//       const formattedCountries = response.map((country: AdjustedCountry) => ({
//         value: country.country_short_name,
//         label: country.country_name,
//       }));
//       setCountries(formattedCountries);
//     } catch (error) {
//       console.error("Failed to fetch countries:", error);
//     }
//   };

//   const fetchStates = async (countryName: string) => {
//     try {
//       // const response = await getStatesByCountryName(countryName);
//       const formattedStates = response.map((state: AdjustedState) => ({
//         value: state.state_name,
//         label: state.state_name,
//       }));
//       setStates(formattedStates);
//     } catch (error) {
//       console.error("Failed to fetch states:", error);
//     }
//   };

//   const fetchCities = async (stateName: string) => {
//     try {
//       // const response = await getCityByStateName(stateName);
//       const formattedCities = response.map((city: AdjustedCity) => ({
//         value: city.city_name,
//         label: city.city_name,
//       }));
//       setCities(formattedCities);
//     } catch (error) {
//       console.error("Failed to fetch cities:", error);
//     }
//   };

//   const handleCountryChange = (newValue) => {
//     if (newValue) {
//       fetchStates(newValue.label);
//       const countryCode = newValue.value;
//       setPhoneCountry(countryCode);
//     }
//   };

//   const handleStateChange = (newValue) => {
//     if (newValue) {
//       fetchCities(newValue.label);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <div className="lg:felx-row flex flex-col items-center justify-between gap-5">
//         <CustomInput
//           title="First Name"
//           id="firstName"
//           className="w-full flex-1"
//         />
//         <CustomInput
//           title="Last Name"
//           id="lastName"
//           className="w-full flex-1"
//         />
//       </div>
//       <CustomInput title="Company Name" id="companyName" />
//       <SelectInput
//         title="Country / Region"
//         options={countries}
//         onChange={handleCountryChange}
//         className="w-full"
//       />
//       <SelectInput
//         title="State"
//         options={states}
//         onChange={handleStateChange}
//         className="w-full"
//       />
//       <SelectInput title="Town / City" options={cities} className="w-full" />
//       <CustomInput title="Street Address" id="streetAddress" />
//       <CustomInput
//         title="ZIP Code"
//         id="zip"
//         onChange={(e) =>
//           (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
//         }
//       />
//       <PhoneInput
//         country={phoneCountry}
//         placeholder="Phone Number"
//         id="phone"
//         value={phoneNumber}
//         onChange={(value) => setPhoneNumber(value ?? "")}
//         className="w-full rounded-lg border border-[#9F9F9F] bg-white p-4 text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <CustomInput title="Email Address" id="email" type="email" />
//     </div>
//   );
// };

// export default CheckoutInputs;

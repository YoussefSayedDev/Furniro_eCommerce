// import type { NextApiRequest, NextApiResponse } from "next";

// const GEO_NAMES_USERNAME = "usff"; // Your GeoNames username

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const { geonameId } = req.query;

//   try {
//     const response = await fetch(
//       `https://api.geonames.org/children?geonameId=${geonameId}&username=${GEO_NAMES_USERNAME}`,
//     );
//     const data = await response.json();

//     // Set CORS headers to allow cross-origin requests from your frontend
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//     res.status(200).json(data);
//   } catch {
//     res.status(500).json({ error: "Failed to fetch data from GeoNames API" });
//   }
// }

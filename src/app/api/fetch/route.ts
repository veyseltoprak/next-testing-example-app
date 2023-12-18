// // pages/api/data.js

// import axios from 'axios';

// export default async function handler(req: any, res: any) {
//   // Assume you have a function to fetch data from an external API
//   const fetchData = async () => {
//     const response = await axios.get('https://localhost:3000/api/data');
//     return response.data;
//   };

//   // Check if the request method is GET
//   if (req.method === 'GET') {
//     try {
//       // Fetch data with stale-while-revalidate caching
//       const data = await fetchData();
      
//       // Set Cache-Control header for stale-while-revalidate
//       res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

//       // Return the data
//       res.status(200).json(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     // Handle other HTTP methods
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

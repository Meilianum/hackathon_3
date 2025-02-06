import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,token } from '../env'

export const client = createClient({
  projectId:"xv3577lu",
  dataset:"production",
  apiVersion:"2025-02-01",
  token:'skePlCDKTMKWtvi5hISTyX8HP21EtDjr1MPYpOLczGy9eBF5zUz406AKv4D21ilDU1Y6veO8pRUKAngBAqCkB0Gn8smDXUxWTQkZcHIn6DkTR4ImScJHsFd5qCmHzfqiJmZAvZDYDMgG525A8xBZmMAXmRGTFubABzpTaMbN4Z4RM2kgsdyk',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


// Example query to fetch data
// const query = '*[_type == "post"]'
// const posts = await client.fetch(query)
// console.log(posts)
// import { createClient } from 'next-sanity'

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xv3577lu",
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: "2025-02-01",
//   token: process.env.SANITY_API_TOKEN, // Use an environment variable
//   useCdn: false, // Set to false for fresh data, true for cached data
// })

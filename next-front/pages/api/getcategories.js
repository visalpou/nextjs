// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import env from '../../env'

export default async function handler (req, res) {
  const data = await fetch(`${env.apiUrl}/categories_list`)
  const categories = await data.json()
  res.status(200).json({ categories: categories })
}

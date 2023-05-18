const url = 'https://api.infojobs.net/api/9/offer?category=informatica-telecomunicaciones'
const authentification = 'token'
export async function getOffers () {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application-json',
      Authorization: `Basic ${authentification}`
    }
  })
  const data = response.json()
}

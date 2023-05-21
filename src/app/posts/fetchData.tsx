export interface Data {
  id: number
  title: string
}

export async function fetchData () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return [data]
}

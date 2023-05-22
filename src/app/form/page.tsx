// import users from '@/mocks/users.json'

async function getData () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data
}

async function FormPage () {
  const users = await getData()
  return (
    <div>
      {
        users?.map(({ id, name }: { id: number, name: string }) =>
          <div key={id}>{name}</div>
        )
      }
    </div>
  )
}

export default FormPage

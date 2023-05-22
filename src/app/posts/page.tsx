'use client'
import { LikeButton } from '@/components/LikeButton'
import { Data, fetchData } from './fetchData'

export default async function PostsPage () {
  const [data] = await fetchData()
  return (
    <div>
      <ul>
        {
          data?.map(({ id, title }: Data) => (
            <li key={id}>
              {title}
              <LikeButton />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

import { useState } from 'react'
export function LikeButton () {
  const [liked, setLiked] = useState(false)
  const handleClick = () => {
    setLiked(!liked)
  }
  return (
    <button onClick={handleClick} className='block px-3 py-1 border-2 rounded'>Me gusta {liked ? '❤️' : '😅'}</button>
  )
}

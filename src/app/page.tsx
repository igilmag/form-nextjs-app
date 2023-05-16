import Image from 'next/image'
import { Input } from '@/components/Input'

export default function Home () {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 m-2">
      <form>
        <Input
          id='nombre'
          name='nombre'
          textLabel='Nombre'
          placeholder='Pepito de los palotes'
        />
        <Input
          id='email'
          name='email'
          textLabel='Correo electrónico'
          type='email'
        />
      </form>

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />

    </main>
  )
}

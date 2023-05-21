'use client'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/Input'

export default function Home () {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { nombre } = Object.fromEntries(formData.entries())
    console.log(nombre)
  }
  return (
    <main className='flex flex-col items-start justify-start min-h-screen p-24 m-2'>
      <form id='my-form' onSubmit={handleSubmit}>
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
      <button form='my-form'>Enviar</button>

      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />

    </main>
  )
}

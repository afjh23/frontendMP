import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { HeaderSmall } from '../components/HeaderSmall'

export const Register = () => {
  const { registerMutation } = useContext(AuthContext)

  const validatePassword = password => {
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/
    return passwordRegex.test(password)
  }

  const handleRegister = async e => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    if (!validatePassword(e.target.password.value)) {
      alert('La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula.')
      return
    }
    console.log(data)
    await registerMutation.mutateAsync(data)
  }
  return (
    <div className='w-full h-screen p-0 m-0 flex justify-center items-center'>

      <main className='flex flex-col w-94 h-[550px] mx-auto  my-auto py-4 px-4 place-content-between max-w-md 
    sm:max-h-[550px] sm:border sm:border-[#BDBDBD] sm:rounded-3xl sm:my-auto'>
        <HeaderSmall />
        <form className=' h-2/4 flex flex-col w-full gap-4 justify-center' onSubmit={handleRegister}>
          <h1 className='font-semibold text-lg mb-2'>
            Join thousands of learners from around the world
          </h1>
          <span>Master web development by making real-life projects. There are multiple paths for you to choose</span>
          <input type="email" className='w-full h-12 border px-4 border-[#BDBDBD] rounded-lg' placeholder='Email' name='email'></input>
          <input type='password' className='w-full h-12 border px-4 border-[#BDBDBD] rounded-lg' placeholder='Password' name='password'></input>
          <button className='w-full h-9 mt-1 bg-[#2F80ED] rounded-lg text-white font-semibold text-base'>Start coding now</button>
        </form>
        <div className='h-2/5 flex flex-col place-content-evenly items-center text-[#828282]'>
          <span className='text-sm font-normal'>or continue with these social profile</span>
          <ul className='flex flex-row gap-6'>
            <li className='w-11 h-11 rounded-full border border-[#828282] flex items-center justify-center'>G</li>
            <li className='w-11 h-11 rounded-full border border-[#828282] flex items-center justify-center'>F</li>
            <li className='w-11 h-11 rounded-full border border-[#828282] flex items-center justify-center'>X</li>
            <li className='w-11 h-11 rounded-full border border-[#828282] flex items-center justify-center'>GH</li>
          </ul>
          <span className='text-sm font-normal'>Adready a member?
            <Link to="/" className='text-[#47a8e0]'>Login</Link>
          </span>
        </div>
      </main>
    </div>


  )
}

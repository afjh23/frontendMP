import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export const Dashboard = () => {
  const {isLoading, user, logout} = useContext(AuthContext)

  console.log(user)
  if(isLoading){
    return <div>CARGANDO...</div>
  }

  return (

    <>
    <Header></Header>
    <main className='flex flex-col w-94 h-screen mx-auto my-auto py-4 px-4 place-content-between max-w-md mb-4
    sm:max-w-[53rem] sm:max-h-[550px]  sm:my-auto'>
      <div className='text-center'>
        <h1 className='font-normal text-4xl mb-2'>Personal info</h1>
        <span className='font-light text-lg'>Basic info, like your name and photo</span>
      </div>

      <table className='rounded-xl w-full min-w-full border border-gray-300 p-4 '>
        <tr className="px-4 py-2 border-b border-gray-300 h-[5.5rem]">
          <td colSpan="2">
            <div className='flex justify-between px-4 items-center'>
              <div className='flex flex-col px-4'>
                <span className='text-2xl font-normal'>Profile</span>
                <span className='text-sm text-[#828282] font-medium'>
                  Some info may be visible to other people
                </span>
              </div>
              <Link to='/update'>
              <button className='w-24 h-9 border text-[#828282] font-medium border-[#828282] rounded-xl'>Edit</button>
              </Link>
              
            </div>
          </td>
        </tr>
        <tr className="px-4 py-2 border-b border-gray-300 h-[6.25rem]">
          <td className='text-[#BDBDBD] font-medium text-sm pl-12 w-72'>PHOTO</td>
          <td><img className='w-[4.5rem] h-[4.5rem]' 
          src={`http://localhost:3000/api/users/image/${user.photo}`}
          onError={(e) => { e.target.onerror = null, e.target.src = '/blank-profile-picture-973460_960_720.webp' }}
          /></td>
        </tr>
        <tr className="px-4 py-2 border-b border-gray-300 h-[4.5rem]">
          <td className='text-[#BDBDBD] font-medium text-sm pl-12 w-72'>NAME</td>
          <td>{user.name ? user.name : 'No name provided'}</td>
        </tr>
        <tr className="px-4 py-2 border-b border-gray-300 h-[4.5rem]">
          <td className='text-[#BDBDBD] font-medium text-sm pl-12 w-72'>BIO</td>
          <td>{user.bio ? user.bio : 'No bio provided'}</td>
        </tr>
        <tr className="px-4 py-2 border-b border-gray-300 h-[4.5rem]">
          <td className='text-[#BDBDBD] font-medium text-sm pl-12 w-72'>PHONE</td>
          <td>{user.phone ? user.phone : 'No email provided'}</td>
        </tr>
        <tr className="px-4 py-2 border-b border-gray-300 h-[4.5rem]">
          <td className='text-[#BDBDBD] font-medium text-sm pl-12 w-72'>EMAIL</td>
          <td>{user.email}</td>
        </tr>
        <tr className='h-[4.5rem]'>
          <td className='text-[#BDBDBD] font-medium text-sm pl-12 w-72'>PASSWORD</td>
          <td>*********</td>
        </tr>
      </table>


    </main>
    </>
    
  )
}

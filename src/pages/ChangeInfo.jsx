import React, { useContext } from 'react'
import { Header } from '../components/Header';
import { AuthContext } from '../context/AuthContext';

export const ChangeInfo = () => {
  const {updateMutation} = useContext(AuthContext)

  const handleChange = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    formData.forEach((value, key) => {
      if (value) {
        data[key] = value;
      }
    });

    if (e.target.image.files[0]) {
      data.image = e.target.image.files[0];
    }
    console.log(data)
    await updateMutation.mutateAsync(data);
  }

  return (
    <>
      <Header></Header>
      <main className="flex flex-col w-94 h-screen mx-auto p-9 max-w-md border border-[#EOEOEO] mb-4
    sm:max-w-[53rem] sm:max-h-[52rem] sm:my-4 sm:mx-auto">
        <h1 className="text-2xl">Change Info</h1>
        <span className="text-sm font-medium text-[#828282]">
          Changes will be reflected to every service
        </span>

        <form className="flex flex-col" onSubmit={handleChange}>
          <div className="flex flex-row items-center my-6">
            <div className="relative">
              <img
                className="w-[4.5rem] h-[4.5rem] rounded-lg object-cover "
                src='./blank-profile-picture-973460_960_720.webp'
                alt="Profile"
              />
              <label
                htmlFor="photo-upload"
                className="absolute top-4 left-3 bg-gray-200 hover:bg-gray-300 bg-opacity-15 text-white px-3 py-1 rounded-full cursor-pointer text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                  <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>

              </label>
              <input
                id="photo-upload"
                type="file"
                className="hidden"
                name="image"
                accept="image/*" // Asegura que solo se suban imágenes
              />
            </div>
            <span className="text-sm text-[#828282] font-medium pl-7">CHANGE PHOTO</span>
          </div>

          <label className="mt-4">Name</label>
          <input
            className="w-[26rem] h-[3.25rem] px-6 border rounded-md"
            placeholder="Enter your name..."
            name="name"
          />

          <label className="mt-4">Bio</label>
          <input
            className="w-[26rem] h-[5.69rem] px-6 border rounded-md"
            placeholder="Enter your bio..."
            name="bio"
          />

          <label className="mt-4">Phone</label>
          <input
            className="w-[26rem] h-[3.25rem] px-6 border rounded-md"
            placeholder="Enter your phone..."
            name="phone"
          />

          <label className="mt-4">Email</label>
          <input
            className="w-[26rem] h-[3.25rem] px-6 border rounded-md"
            placeholder="Enter your email..."
            name="email"
          />

          <label className="mt-4">Password</label>
          <input
            className="w-[26rem] h-[3.25rem] px-6 border rounded-md"
            placeholder="Enter your password..."
            name="password"
            type="password"
          />

          <button className="w-20 h-9 mt-6 bg-[#2F80ED] rounded-lg text-white font-semibold text-base">
            Save
          </button>
        </form>
      </main>
    </>

  )
}
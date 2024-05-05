import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    
  return (
    <div className='text-center  bg-gray-600 text-white p-4 text-3xl flex justify-center h-auto m-4 mr-6'>Github Profileurl: {data.html_url}
    <img className='mt-6' src={data.avatar_url} alt="Git picture" width={300} />

    <div className='ml-8 bg-white block text-green-300 rounded-lg' >
        <p className='block'>Github username: {data.login}</p>
        <p>Followers:{data.followers} </p>
        <p>Home Town: {data.location}</p>
    </div>
    
    </div>


    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Krishna7060')
    return response.json()
}
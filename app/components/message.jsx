import React from 'react'

const message = ({message}) => {
  return (
    <div>
        <div className='flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full'>
                <p className='fixed mt-[-40px] text-gray-800 text-xs'>Nekruz</p>
                <p>{message.text}</p>
        </div>
    </div>
  )
}

export default message
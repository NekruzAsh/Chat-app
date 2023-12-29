import React from 'react'
import {auth} from '../firebase.js'

const style = {
    name: `absolute mt-[-4rem] text-gray-800 text-xs`,
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    sent: ` bg-indigo-800 text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-pink-600 text-white float-left rounded-br-full`,
}

const message = ({message}) => {

    const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`


  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
                <p className={style.name}>{message.name}</p>
                <p>{message.text}</p>
        </div>
    </div>
  )
}

export default message
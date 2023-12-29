import React from 'react'
import {useState} from 'react'
import {db, auth} from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';




const send = ({scroll}) => {

    const [input, setInput] = useState('');

    const send = async (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter a message')
            return;
        }

        const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
        
    })
        setInput('');
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <form onSubmit={send} className='fixed bottom-10 h-14 w-full max-w-[728px] flex text-xl'>
                <input value={input} onChange={(e) => setInput(e.target.value)} className="w-full text-xl p-3 text-white outline-none border-none rounded-lg mb-2" type="text" placeholder='Message'/>
                <button type='submit' className="btn md:btn-md w-[20%]  text-white hover:bg-indigo-700">Send</button>
        </form>
    )
}

export default send
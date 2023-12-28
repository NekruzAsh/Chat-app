
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase.js';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const style = {
  wrapper: ` flex justify-center`,
}

const GoogleSign = () => {
    const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
}

const signin = () => {

    return (
        <div className={style.wrapper}>
            <GoogleButton onClick={GoogleSign} />
        </div>
    );
};

export default signin
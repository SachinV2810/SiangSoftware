import React from 'react';
import { signInWithPopup, OAuthProvider } from "firebase/auth";
import { auth } from './../firebase/firebaseauth';

function Login() {
    const handleMS = (e) => {
    console.log('hi');
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
        // Optional "tenant" parameter in case you are using an Azure AD tenant.
        // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
        // or "common" for tenant-independent tokens.
        // The default value is "common".
        tenant: "850aa78d-94e1-4bc6-9cf3-8c11b530701c"
    });
    signInWithPopup(auth, provider)
        .then((result) => {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
    
        // Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;

        console.log(accessToken, idToken)
        })
        .catch((error) => {
        // Handle error.
    });

    }
    return (
    <div className="Login">
        <button className = "success" onClick = {handleMS}>Sign in with Outlook</button>
    </div>
    );
}

export default Login;

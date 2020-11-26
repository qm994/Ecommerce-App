import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = 
    {
        apiKey: "AIzaSyDAJJUIgPnX0SXWmxCbmXaJyLgWBBksacs",
        authDomain: "ecommerce-9d3b6.firebaseapp.com",
        databaseURL: "https://ecommerce-9d3b6.firebaseio.com",
        projectId: "ecommerce-9d3b6",
        storageBucket: "ecommerce-9d3b6.appspot.com",
        messagingSenderId: "835068337804",
        appId: "1:835068337804:web:d84d6b4e78f679e39265a9",
        measurementId: "G-K2CF7RDC2E"
    }

// save the user profile to filestore when the user is not null
// @userAuth: the user object return by the auth.onAuthStateChanged function
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)// == firestore.collection('users').doc(`${userAuth.uid}`)
    const snapShot = await userRef.get();
    console.log(snapShot)
    // if the signed in user not in the firestore users, we store it 
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName: displayName,
                email: email,
                createdAt: createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('errored when set the user to firstore')
        }
    }   
    return userRef
}

// initialize a firebase app use the config file
firebase.initializeApp(config);

// get the auth service
export const auth = firebase.auth();
// get the firestore service
export const firestore = firebase.firestore();

// set up the google auth provider

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});


// pass provider to the sign function(we can also pass other providers)

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase // incase we need the whole firebase lib

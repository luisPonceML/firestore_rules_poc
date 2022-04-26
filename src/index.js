
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signInWithPopup , GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
const provider = new GoogleAuthProvider();

const firebaseConfig = {
   //... app config
  };

//const auth = getAuth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


  signInWithEmailAndPassword(auth, 'user', 'password')
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });

  /*signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
    //console.log('No authorized:'+email);
    document.body.innerHTML = document.body.innerHTML + 'No authorized:'+email;

  });*/
  
  const querySnapshot = await getDocs(collection(db, "tests"));
  querySnapshot.forEach((doc) => {
  //console.log(`${doc.id} => ${doc.data()}`);
  document.body.innerHTML = document.body.innerHTML + `${doc.id}`+"</br>";


});

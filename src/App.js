import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .cath(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        user.photoURL ? <button onClick={handleSignOut}>Sign Out</button> :
          <div>
            <button onClick={handleGoogleSignIn} >Google Sign In</button>
            <button onClick={handleGithubSignIn}>GitHub Sign In</button>
          </div>

      }
      <h2>Name:{user.displayName}</h2>
      <p>Email:{user.email}</p>
      <img src={user.photoURL} alt="" /> <br />


    </div>
  );
}

export default App;

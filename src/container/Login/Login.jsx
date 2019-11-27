import * as React from "react";
import styles from "./Login.module.css";
import googleIcon from "../../static/images/google-icon.png";
import firebase, { provider } from "../../firebase";

class Login extends React.Component {
  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.setState({
          user
        });
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.setState({
          user: null
        });
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  getSignOutBtn = () => {
    return this.state.user ? (
      <div className="google" onClick={this.signOut}>
        <img src={googleIcon} alt="" />
        <button>Sign out</button>
      </div>
    ) : null;
  };
  state = { user: null, signIn: this.signIn };
  render() {
    return (
      <section onClick={this.signIn} className={styles.google}>
        <img src={googleIcon} alt="Google Icon" />
        <button className={styles.googleButton}>Sign in with google</button>
      </section>
    );
  }
}

export default Login;

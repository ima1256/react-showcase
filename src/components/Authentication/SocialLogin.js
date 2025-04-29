import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import { auth } from "../../firebase";
import { useEffect, useState } from "react";

function SocialLogin({ name, size }) {
  const [provider, setProvider] = useState();

  const metadata = {
    google: {
      logo: "https://developers.google.com/identity/images/g-logo.png",
      provider: new GoogleAuthProvider(),
    },
    facebook: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      provider: new FacebookAuthProvider(),
    },
    twitter: {
      logo: "https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg",
      provider: new TwitterAuthProvider(),
    },
  };

  useEffect(() => {
    setProvider(metadata[name].provider);
  }, []);

  const onClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(`${name} login successful!`, user);
      })
      .catch((error) => {
        console.error(`${name} login error:`, error);
      });
  };

  return (
    <div onClick={() => onClick()}>
      <img
        src={`${metadata[name].logo}`}
        alt={`${name.charAt(0).toUpperCase() + name.slice(1)} Logo`}
        style={{ width: size, height: size }}
        className="cursor-pointer"
      />
    </div>
  );
}

export default SocialLogin;

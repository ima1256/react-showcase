import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Input, Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import SocialLogin from "./SocialLogin";

function Authentication() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [state, setState] = useState("login");

  useEffect(() => {
    setError("");
    setEmail("");
    setPassword("");
    setName("");
  }, [state]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Authentication", user);

      if (user) {
        // If the user's email is verified, redirect
        if (user.emailVerified) {
          navigate("/"); // Redirect to the dashboard page (or any route you want)
        }
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  const handleRegister = (e) => {
    console.log(auth.currentUser);

    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log("Usuario registrado con éxito:", userCredential);

        sendEmailVerification(user)
          .then(() => {
            setState("verification-pending");
            console.log("email verification sent to", user.email);
          })
          .catch((error) => {
            console.log(
              "An error ocurred when sending verification email to ",
              user.email
            );
          });
      })
      .catch((error) => {
        setError("Registering failed");
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("usuario logueado con exito", userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        setError("Login failed");
        console.log("Error al iniciar sesion", error.message);
      });
  };

  return (
    <Box
      className="flex w-full flex-row items-center justify-center"
      sx={{
        height: "calc(100vh - 64px)",
      }}
    >
      {state == "verification-pending" ? (
        <h2>Loot at your email to verify your account</h2>
      ) : (
        <Stack
          direction={"column"}
          spacing={2}
          className="items-center"
          sx={{
            width: "350px",
          }}
        >
          <div className="w-[100%]">
            <form onSubmit={state == "login" ? handleLogin : handleRegister}>
              <Stack direction={"column"} spacing={3}>
                {state == "register" ? (
                  <Input
                    className="flex-grow"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    required
                  />
                ) : null}

                <Input
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  required
                />
                <Input
                  className="flex-grow"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                  minLength={6}
                  required
                />

                <Button type={"submit"} variant="contained">
                  {state == "login" ? "Login" : "Register"}
                </Button>

                {state == "login" ? (
                  <span
                    onClick={() => setState("register")}
                    className="text-center text-[#ccc] cursor-pointer"
                  >
                    Or Create Account
                  </span>
                ) : null}
              </Stack>
            </form>
          </div>

          <h4 className="text-red-500 text-center">{error}</h4>
          {state == 'login' ? <Stack
            direction={"horizontal"}
            spacing={4}
            className="justify-center w-[80%]"
          >
            <SocialLogin name={'google'} size={40} />

            {/* <SocialLogin name={'facebook'} size={40} />

            <SocialLogin name={'twitter'} size={40} /> */}

          </Stack> : null }
        </Stack>
      )}
    </Box>
  );
}

export default Authentication;

import React, { useState } from "react";
import { auth } from "./firebase"; // Asegúrate de tener el archivo de configuración de Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Maneja el registro con email y contraseña
  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Limpiar cualquier error previo

    // Intentamos crear una cuenta con email y contraseña
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuario registrado con éxito:", userCredential.user);
      })
      .catch((err) => {
        setError("Error al registrar: " + err.message);
      });
  };

  // Maneja el login con email y contraseña
  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Limpiar cualquier error previo

    // Intentamos hacer login con email y contraseña
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuario logueado con éxito:", userCredential.user);
      })
      .catch((err) => {
        setError("Error al iniciar sesión: " + err.message);
      });
  };

  return (
    <div>
      <h2>Autenticación con Email y Contraseña</h2>

      {/* Formulario de Registro */}
      <form onSubmit={handleRegister}>
        <h3>Registrar</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
        />
        <button type="submit">Registrar</button>
      </form>

      {/* Formulario de Login */}
      <form onSubmit={handleLogin}>
        <h3>Iniciar sesión</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>

      {/* Mostrar errores */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

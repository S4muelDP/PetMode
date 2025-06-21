import { useState } from "react";

interface Props {
  onClose: () => void;
  onLoginSuccess: (username: string) => void;
}

const USER_CREDENTIAL = { username: "admin", password: "1234" };

export const LoginModal = ({ onClose, onLoginSuccess }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username === USER_CREDENTIAL.username &&
      password === USER_CREDENTIAL.password
    ) {
      localStorage.setItem("loggedUser", username);
      onLoginSuccess(username);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Iniciar sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mb-2"
        >
          Ingresar
        </button>

        <button
          onClick={onClose}
          className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

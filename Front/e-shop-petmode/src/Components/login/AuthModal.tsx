import { useState } from 'react';

interface AuthModalProps {
  mode: 'login' | 'register';
  onClose: () => void;
  onAuthSuccess: (username: string) => void;
}

// Utilidad para leer y escribir en el mock temporalmente en memoria
let usersCache: { username: string; password: string }[] | null = null;
async function getUsers() {
  if (!usersCache) {
    const res = await fetch('/src/mocks/users.json');
    usersCache = await res.json();
  }
  return usersCache;
}
function addUser(user: { username: string; password: string }) {
  if (usersCache) usersCache.push(user);
}

export const AuthModal = ({ mode: initialMode, onClose, onAuthSuccess }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const users = await getUsers();
    if (!users) {
      setLoading(false);
      setError('Error cargando usuarios');
      return;
    }
    if (mode === 'login') {
      const found = users.find(u => u.username === username && u.password === password);
      if (found) {
        setLoading(false);
        onAuthSuccess(username);
      } else {
        setLoading(false);
        setError('Usuario o contraseña incorrectos');
      }
    } else {
      const exists = users.find(u => u.username === username);
      if (exists) {
        setLoading(false);
        setError('El usuario ya existe');
      } else {
        addUser({ username, password });
        setLoading(false);
        onAuthSuccess(username);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700">✕</button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 font-semibold"
            disabled={loading}
          >
            {loading ? 'Procesando...' : (mode === 'login' ? 'Entrar' : 'Registrarse')}
          </button>
        </form>
        <div className="mt-4 text-center">
          {mode === 'login' ? (
            <span>
              ¿No tienes cuenta?{' '}
              <button className="text-cyan-600 hover:underline" onClick={() => setMode('register')}>
                Regístrate
              </button>
            </span>
          ) : (
            <span>
              ¿Ya tienes cuenta?{' '}
              <button className="text-cyan-600 hover:underline" onClick={() => setMode('login')}>
                Inicia sesión
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}; 
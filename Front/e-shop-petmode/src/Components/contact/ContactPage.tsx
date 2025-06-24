import { useState } from 'react';

export const ContactPage = () => {
  const [form, setForm] = useState({ nombre: '', apellido: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-green-600 text-6xl mb-4">✔️</div>
        <h2 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h2>
        <p className="text-gray-600">Gracias por contactarnos, te responderemos pronto.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 font-semibold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}; 
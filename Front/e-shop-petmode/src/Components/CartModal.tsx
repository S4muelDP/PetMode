import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export const CartModal = ({ onClose }: { onClose: () => void }) => {
  const { cart, total, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleFinish = () => {
    clearCart();
    onClose();
    navigate('/gracias');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700">✕</button>
        <h2 className="text-2xl font-bold mb-4 text-center">Carrito de compras</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">Tu carrito está vacío.</div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-4">
              {cart.map(item => (
                <li key={item.product.id} className="flex items-center py-3">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-contain rounded mr-4" />
                  <div className="flex-1">
                    <div className="font-semibold">{item.product.name}</div>
                    <div className="text-sm text-gray-500">Cantidad: {item.quantity}</div>
                    <div className="text-sm text-cyan-700 font-bold">${(item.product.price * item.quantity).toLocaleString('es-CO')}</div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="ml-2 text-red-500 hover:underline text-sm">Eliminar</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${total.toLocaleString('es-CO')}</span>
            </div>
            <button
              onClick={handleFinish}
              className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 font-semibold mb-2"
            >
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}; 
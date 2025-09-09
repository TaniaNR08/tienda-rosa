import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export default function Cart(){
  const { cart, removeFromCartByIndex, clearCart } = useContext(ShopContext)
  const total = cart.reduce((acc,item)=> acc + (item.price||0), 0)
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold text-pink-700 mb-6">Carrito</h3>
      {cart.length===0 ? <p>Tu carrito está vacío.</p> : (
        <>
          <ul className="space-y-3">
            {cart.map((item,i)=> (
              <li key={i} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <p className="font-semibold">{item.name} <span className="text-sm text-gray-500">({item.size||'--'})</span></p>
                    <p className="text-sm text-gray-500">${item.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={()=> removeFromCartByIndex(i)} className="px-3 py-2 rounded bg-red-500 text-white">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span>${total.toLocaleString()}</span>
          </div>

          <div className="flex gap-3 mt-4">
            <button onClick={()=> { alert('Compra simulada. Gracias!'); clearCart() }} className="btn-pink">Finalizar compra</button>
            <button onClick={()=> clearCart()} className="px-4 py-2 rounded-2xl bg-gray-200">Vaciar carrito</button>
          </div>
        </>
      )}
    </section>
  )
}

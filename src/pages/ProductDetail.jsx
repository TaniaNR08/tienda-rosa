import { useParams } from 'react-router-dom'
import products from '../data/productos'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

export default function ProductDetail(){
  const { id } = useParams()
  const product = products.find(p=> String(p.id)===id)
  const { addToCart, toggleFavorite, favorites } = useContext(ShopContext)
  const [size, setSize] = useState('S')
  if(!product) return <div className="p-6">Producto no encontrado</div>
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.img} alt={product.name} className="w-full h-96 object-cover rounded-2xl" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-pink-600 font-bold mt-2">${product.price.toLocaleString()}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="mt-6">
            <p className="font-medium">Talla:</p>
            <div className="flex gap-2 mt-2">
              {['S','M','L'].map(s=> (
                <button key={s} onClick={()=>setSize(s)} className={size===s? 'px-4 py-2 border rounded-md bg-pink-600 text-white' : 'px-4 py-2 border rounded-md'}>{s}</button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={()=> { addToCart({...product, size}); alert('Agregado al carrito') }} className="btn-pink">Agregar al carrito</button>
            <button onClick={()=> { toggleFavorite(product.id) }} className="px-4 py-2 rounded-2xl border">{favorites.includes(product.id)? 'Quitar favorito' : 'Favorito'}</button>
            <button onClick={()=> { alert('Gracias por tu compra 💖') }} className="px-4 py-2 rounded-2xl bg-gray-200">Comprar ahora</button>
          </div>
        </div>
      </div>
    </section>
  )
}

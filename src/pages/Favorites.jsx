import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import products from '../data/productos'

export default function Favorites(){
  const { favorites, toggleFavorite } = useContext(ShopContext)
  const favProducts = products.filter(p=> favorites.includes(p.id))
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold text-pink-700 mb-6">Favoritos</h3>
      {favProducts.length===0 ? <p>No tienes favoritos aún.</p> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favProducts.map(p=> (
            <div key={p.id} className="bg-white p-4 rounded-2xl shadow">
              <img src={p.img} className="w-full h-48 object-cover rounded" />
              <h4 className="font-semibold mt-2">{p.name}</h4>
              <p className="text-pink-600 font-bold">${p.price.toLocaleString()}</p>
              <div className="mt-2 flex gap-2">
                <button onClick={()=> toggleFavorite(p.id)} className="px-3 py-2 rounded bg-red-500 text-white">Quitar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

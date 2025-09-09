import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export default function ProductCard({ product }){
  const { addToCart, toggleFavorite, favorites } = useContext(ShopContext)
  const isFav = favorites.includes(product.id)
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <Link to={`/producto/${product.id}`}>
        <img src={product.img} alt={product.name} className="w-full h-56 object-cover" />
      </Link>
      <div className="p-4">
        <h4 className="font-semibold">{product.name}</h4>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-pink-600 font-bold">${product.price.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>toggleFavorite(product.id)} className={isFav? 'p-2 rounded-full bg-pink-600 text-white' : 'p-2 rounded-full bg-gray-200'}>
              <Heart className="w-4 h-4" />
            </button>
            <button onClick={()=>addToCart(product)} className="btn-pink">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

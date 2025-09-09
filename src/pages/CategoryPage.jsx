import { useParams } from 'react-router-dom'
import products from '../data/productos'
import ProductCard from '../components/ProductCard'

export default function CategoryPage(){
  const { name } = useParams()
  const filtered = products.filter(p=> name==='Todo' ? true : p.category.toLowerCase() === name.toLowerCase())
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold text-pink-700 mb-6">{name}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}

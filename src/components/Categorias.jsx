import categorias from '../data/categorias'
import { Link } from 'react-router-dom'
export default function Categorias(){
  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categorias.map(c=> (
            <Link key={c.id} to={`/categoria/${encodeURIComponent(c.name)}`} className="flex flex-col items-center bg-white p-4 rounded-2xl shadow hover:shadow-lg">
              <img src={c.img} alt={c.name} className="w-20 h-20 object-contain mb-3" />
              <p className="font-medium text-sm">{c.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

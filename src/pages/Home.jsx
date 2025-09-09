import Categorias from '../components/Categorias'
import products from '../data/productos'
import ProductCard from '../components/ProductCard'

export default function Home(){
  return (
    <>
      <section className="relative h-72 flex items-center justify-center bg-pink-200">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700">Colección Vintage 2025</h1>
          <p className="mt-3 text-pink-600">Estilo femenino, cómodo y elegante</p>
        </div>
      </section>
      <Categorias />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-pink-700 mb-6">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0,6).map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  )
}

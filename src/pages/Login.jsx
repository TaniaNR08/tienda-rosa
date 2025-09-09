import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const { login, user, logout } = useContext(ShopContext)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const nav = useNavigate()
  if(user) return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold text-pink-700 mb-6">Cuenta</h3>
      <p>Conectado como <strong>{user.email}</strong></p>
      <div className="mt-4">
        <button onClick={()=> { logout(); nav('/') }} className="px-4 py-2 rounded bg-gray-200">Cerrar sesión</button>
      </div>
    </section>
  )
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold text-pink-700 mb-6">Iniciar sesión (simulado)</h3>
      <div className="max-w-md">
        <input className="input mb-2" placeholder="Correo" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="input mb-2" placeholder="Contraseña" value={pass} onChange={e=>setPass(e.target.value)} />
        <div className="flex gap-2">
          <button onClick={()=> { login(email); nav('/') }} className="btn-pink">Entrar</button>
        </div>
      </div>
    </section>
  )
}

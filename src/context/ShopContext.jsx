import { createContext, useEffect, useState } from 'react'
export const ShopContext = createContext()

const LS_CART = 'tienda_cart_v1'
const LS_FAV = 'tienda_fav_v1'
const LS_USER = 'tienda_user_v1'

export function ShopProvider({ children }){
  const [cart, setCart] = useState(() => {
    try{ return JSON.parse(localStorage.getItem(LS_CART)) || [] }catch{ return [] }
  })
  const [favorites, setFavorites] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem(LS_FAV)) || [] }catch{ return [] }
  })
  const [user, setUser] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem(LS_USER)) || null }catch{ return null }
  })

  useEffect(()=>{ localStorage.setItem(LS_CART, JSON.stringify(cart)) },[cart])
  useEffect(()=>{ localStorage.setItem(LS_FAV, JSON.stringify(favorites)) },[favorites])
  useEffect(()=>{ localStorage.setItem(LS_USER, JSON.stringify(user)) },[user])

  const addToCart = (p)=> setCart(prev => [...prev, p])
  const removeFromCartByIndex = (i)=> setCart(prev => prev.filter((_,idx)=>idx!==i))
  const clearCart = ()=> setCart([])
  const toggleFavorite = (id)=> setFavorites(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id])
  const login = (email)=> setUser({ email })
  const logout = ()=> setUser(null)

  return (
    <ShopContext.Provider value={{ cart, setCart, favorites, addToCart, toggleFavorite, removeFromCartByIndex, clearCart, user, login, logout }}>
      {children}
    </ShopContext.Provider>
  )
}

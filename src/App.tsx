import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Product from "./components/Product"
import { db } from "./data/db"
import type { CartItem, CartType } from "./types/type"

const MaxItem = 10;
const MinItem = 1;

function App() {

  const initialCart = (): CartItem[] => {
    const startedStorage = localStorage.getItem('cart')
    return startedStorage ? JSON.parse(startedStorage) : [];
  }

  const [data] = useState<CartType[]>(db)
  const [cart, setCart] = useState<CartItem[]>(initialCart());

  const addToCart = (item: CartType) => {
    setCart(prevCart => {
      const itemExist = prevCart.find(cartItem => cartItem.id === item.id);

      if (itemExist) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id && cartItem.quantity < MaxItem
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
        );
      }
        
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const incrementQuantity = (id: CartItem['id']) => {
    setCart(prevCart => prevCart.map(cartItem => cartItem.id === id && cartItem.quantity < MaxItem 
      ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem))
  }

  const decrementQuantity = (id: CartItem['id']) => {
    setCart(prevCart => prevCart.map(cartItem => cartItem.id === id && cartItem.quantity > MinItem
      ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem))
  }

  const deleteItem = (id: CartItem['id']) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id))
  }

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <>
      <Cart cart={cart} 
      incrementQuantity={incrementQuantity} 
      decrementQuantity={decrementQuantity}
      deleteItem={deleteItem}
      emptyCart={emptyCart}
      />

      <Banner />

      <main>
        <section className="products" id="listProducts">
          <h2>Productos disponibles:</h2>
          <div className="products-grid container">
            {data.map(item => (
              <Product key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App

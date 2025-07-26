import { FaCartShopping} from "react-icons/fa6";
import type { CartItem } from "../types/type";
import { useMemo } from "react";

type CartProps = {
  cart: CartItem[];
  incrementQuantity: (id: CartItem['id']) => void;
  decrementQuantity: (id: CartItem['id']) => void;
  deleteItem: (id: CartItem['id']) => void;
  emptyCart: () => void;
}

const Cart = ({ cart, incrementQuantity, decrementQuantity, deleteItem, emptyCart }: CartProps) => {

  const isEmpty = cart.length === 0;

  const cantProducts = cart.length;

  const total = useMemo(() => cart.reduce((total, item) => total + item.quantity * item.price, 0),[cart])

  return (
    <header className="header">
      <div className="header-content container">
        <nav className="navigation">
          <a href="/">
            <p className="logotipo">Carrito de Compras</p>
          </a>

          <div className="btn-cart">
            <FaCartShopping className="icon-cart" />
            <button type="button"><i className="fa-solid fa-cart-shopping icon-cart"></i></button>
            <span id="cartCount">{cantProducts}</span>

            <div className="cart">
              <div className="cart-responsive">
                {isEmpty ? (
                  <p className="empty-cart">El carrito esta vacio</p>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody id="contentProducts">
                      {cart.map(item => (
                        <tr key={item.id}>
                          <td><img src={`/img/products/${item.image}.jpg`} alt="" /></td>
                          <td>
                            {item.name}
                          </td>
                          <td>Lps. {item.price}</td>
                          <td className="quantity">
                            <button type="button" onClick={() => decrementQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button type="button" onClick={() => incrementQuantity(item.id)}>+</button>
                          </td>
                          <td>
                            <button type="button" onClick={() => deleteItem(item.id)}>X</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td colSpan={5} className="total">
                          <h4 className="heading-total">Total: <span id="total">${total.toFixed(2)}</span></h4>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={5}>
                          <button type="button" id="emptyCart" onClick={emptyCart}>Vaciar carrito</button>
                          <button type="button" className="buy">Comprar ahora</button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                )}
              </div>
            </div>

          </div>



        </nav>
      </div>

      
    </header>
  )
}

export default Cart
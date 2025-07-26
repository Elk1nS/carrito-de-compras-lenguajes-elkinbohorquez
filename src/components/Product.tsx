import type { CartType } from "../types/type";

type ProductProps = {
  item: CartType;
  addToCart: (item: CartType) => void;
} 

const Product = ({item, addToCart}: ProductProps) => {
    return(
                   <div className="product">
              <img src={`/img/products/${item.image}.jpg`} alt="image product" />
              <div className="product-info">
                <h4>{item.name}</h4>
                <p className="product-text">{item.description}</p>

                <div className="price">
                  <p id="currentPrice">Lps. {item.price}</p>
                </div>
                <button className="btn-add" type="button" onClick={() => addToCart(item)}>Agregar al carrito</button>
              </div>
            </div> 
    )
}

export default Product
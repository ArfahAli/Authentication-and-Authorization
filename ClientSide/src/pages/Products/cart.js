import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../pages/Context/cartContext";
import "./cart.css";
const Cart = () => {
  const {  handleRemove,decrementQuantity,incrementQuantity,totalPrice,cartItems } = useContext(CartContext);

  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   setCartItems(cart || []); // Initializing with an empty array if cart is undefined
  // }, [cart]);

  // const incrementQuantity = (cartIndex) => {
  //   setCartItems((prevCartItems) => {
  //     return prevCartItems.map((item, index) =>
  //       cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //   });
  // };

  // const decrementQuantity = (cartIndex) => {
  //   setCartItems((prevCartItems) => {
  //     return prevCartItems.map((item, index) =>
  //       cartIndex === index && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     );
  //   });
  // };

  // const totalPrice = useMemo(() => {
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  // }, [cartItems]);

  return (
    <div>
      {/* <Header /> */}
      <div className="sub-containerCart cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cartItems.map((cartItem, cartIndex) => (
            <tr key={cartIndex}>
              <td>
                <div className="cart-info">
                  <img src={cartItem.image} alt="" />
                  <div>
                    <p>{cartItem.name}</p>
                    <small>Price: ${cartItem.price}</small>
                    <br />
                    <button
                      onClick={() => handleRemove(cartItem.id)}
                      className="Removebtn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <div className="quantityCart">
                  <button onClick={() => decrementQuantity(cartIndex)}>
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => incrementQuantity(cartIndex)}>
                    +
                  </button>
                </div>
              </td>
              <td>$ {cartItem.price * cartItem.quantity}</td>
            </tr>
          ))}
        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td>$ {totalPrice}</td>
            </tr>
            <tr>
              <td>
              <form action="/pay" method="post">

    <input className="btnCheckOut" type="submit" value="Buy"/>
  </form>
                {/* <Link to="/Payment">
                  <button className="btnCheckOut">CheckOut</button>
                </Link> */}
              </td>
              <td>
                <Link to="/products">
                  <button className="btnContinue">Continue Shopping</button>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;

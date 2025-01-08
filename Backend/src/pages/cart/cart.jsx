import { useContext } from 'react';
import './cart.css';
import { StoreContext } from '../../components/context/context';
import { useNavigate } from 'react-router';

const Cart = () => {
  const {cartItem, food_list, removeFromCart,getTotal } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
    <div className='cart'>
      <div className='cart-Items'>
        <div className='cart-Items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr/>
      {food_list.map((item) => {
        if(cartItem[item._id]>0){
          return(
          <>
          <div className='cart-Items-title cart-item-items ' key={item._id}>
          <img src={item.image} alt=''></img>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{cartItem[item._id]}</p>
          <p>${item.price*cartItem[item._id]}</p>
          <p onClick={
            ()=>{
              removeFromCart(item._id)
            }
          }className='cross1'>x</p>
          </div>
          <hr/>
          </>
          )
        }
        })
      }
    </div>
    <div className='cart-bottom'>
      <div className='cart-total'>
        <h2>Cart Totals</h2>
        <div>
          <div className='cart-total-details'>
          <p>Subtotal</p>
          <p>${getTotal()}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
          <p>Delivery Fee</p>
          <p>${getTotal()==0?0:20}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
          <p className='total'>Total</p>
          <p className='total'>${getTotal()==0?getTotal()+0:getTotal()+20}</p>
          </div>
        </div>
        <button onClick={()=>{
          navigate("/order")
        }}>Proceed to Checkout:</button>
      </div>
      <div className='cart-promo-cord'>
        <div>
          <p>If you have Promo code,Enter here</p>
          <div className='Promo-input'>
            <input type="text"placeholder='promoCode'/>
            <button>Submit</button>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;

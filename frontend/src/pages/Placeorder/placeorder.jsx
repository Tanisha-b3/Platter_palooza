
import { useContext } from 'react'
import './placeorder.css'
import { StoreContext } from '../../components/context/context'
const Placeorder = () => {
  const{getTotal}= useContext(StoreContext)
  return (
    <div>
      <form className='place-order'>
        <div className='place-order-right'>
          <p className='title'>Delivery Information</p>
          
       <div className='multi-fields'>
       <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        </div>
        <input type='email' placeholder='Email Address'/>
        <input type='text' placeholder='Street'/>
        <div className='multi-fields'>
          <input type ="text" placeholder='City'/>
          <input type ="text" placeholder='State'/>
          
        </div>
        <div className='multi-fields'>
          <input type ="text" placeholder='Zip Code'/>
          <input type ="text" placeholder='Country'/>
          </div>
        <div className='multi-fiels'>
          <input type ="text" placeholder='Phone Number'/>
        </div>
        </div>
        <div className='place-order-left'>
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
        }}>Proceed to Payment</button>
      </div>
        </div>
      </form>
    </div>
  )
}

export default Placeorder

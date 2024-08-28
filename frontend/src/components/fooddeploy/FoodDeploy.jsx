import { useContext } from 'react';
import './FoodDeploy.css'
import { StoreContext } from '../context/context';
import Fooditem from '../fooditem/fooditem';
const FoodDeploy = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div>
      <div className='food-display' id='food-display'>
   <h2> Top Dishes near you</h2>
    <div className='food-display-list'>
        {
            food_list.map((item,index)=>{
                if(category==="All"||category===item.category){
                    return <Fooditem key={index} id= {item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
               
            })
        }
    </div>   
      </div>
    </div>
  );
}

export default FoodDeploy;

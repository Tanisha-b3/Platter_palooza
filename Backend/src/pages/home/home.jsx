import './home.css'
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../Exploremenu/Exploremenu';
import FoodDeploy from '../../components/fooddeploy/FoodDeploy';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {
    const [category, setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
       <FoodDeploy category={category}/>
    <AppDownload/>
    </div>
  );
}

export default Home;

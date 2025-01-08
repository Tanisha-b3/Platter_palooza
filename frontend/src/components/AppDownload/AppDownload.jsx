import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <>
    <br></br>
    <div className='App-Download'id ="App-Download">
    
    <p>For Better experience Download<br /> Platter Plalooza</p>
    <div className='app-download-platform'>
        <img src={assets.play_store} alt=''/>
        <img src={assets.app_store} alt=''/>
        <br></br> <br></br>
    </div>
     
    </div>
    <br></br> <br></br>
   </>
   )
}

export default AppDownload

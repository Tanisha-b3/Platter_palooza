import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='App-Download'id ="App-Download">
    <p>For Better experience Download<br /> Platter Plalooza</p>
    <div className='app-download-platform'>
        <img src={assets.play_store} alt=''/>
        <img src={assets.app_store} alt=''/>
    </div>
      
    </div>
  )
}

export default AppDownload

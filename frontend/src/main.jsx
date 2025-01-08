import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContentProvider from './components/context/context.jsx';  // Ensure correct import name

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContentProvider>
      <App />
    </StoreContentProvider>
  </BrowserRouter>
);

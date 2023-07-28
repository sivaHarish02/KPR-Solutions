import ColorSchemesExample from './components/navbar';
import Home from './components/home';
import Create from './components/create';

import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
//import './badbank.css';
export default function App(){
  return(<>
<HashRouter>
  
<ColorSchemesExample/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/create" element={<Create/>}/>
</Routes>

</HashRouter>
  </>  )
}
 

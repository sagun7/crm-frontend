
import './App.css';
//import {Button} from 'react-bootstrap' ; // once the min.css is imported in index.js, we can import modules like "button" in any other files... but they should be inside curly braces
import { Entry } from './pages/entry/Entry';

function App() {
  return (
   <> 
    <Entry />
  </>
  
  );
}

export default App;

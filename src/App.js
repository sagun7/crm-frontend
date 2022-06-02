
import './App.css';
//import {Button} from 'react-bootstrap' ; // once the min.css is imported in index.js, we can import modules like "button" in any other files... but they should be inside curly braces
import { Entry } from './pages/entry/Entry';
import {Jumbotron} from "react-bootstrap";
function App() {
  return (
   <>
    <Jumbotron> Sagun Panthi</Jumbotron>
    <Entry />
  </>
  
  );
}

export default App;

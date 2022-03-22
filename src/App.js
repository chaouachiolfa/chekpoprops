
import './App.css';
import Profil from './Profil/Profil';
import image from './Assets/olfa.jpg';
import {PropTypes} from 'prop-types';
function App() {
  let handlClick=()=>{
    alert('olfa alert')
  }
  return (
    <div className="App">
    <Profil fullName="olfa" bio="react" profission="devloper" handlClick={handlClick}> 
    <img src = {image} alt='img'/>
    
    </Profil>

    </div>
  );
}

export default App;
Profil.defaultProps={
  address:"beja",tel : 990454544
  
}
Profil.propTypes = {tel : PropTypes.number

}
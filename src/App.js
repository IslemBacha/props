import './App.css';
import Profile from './Component/Profile/Profile';
function App() {
  const fullName = "Islem Bacha"
  const bio = "Tunisian"
  const profession = "Fullstack JS Student"
 
  const handleHello=(a)=> alert(`Hello ${a}`)
  
  return (
    <div className='islem'>         
     <Profile fullName={fullName} bio={bio} profession={profession} handleHello={handleHello}>
     <img className="azer" src= "/photo islem.jpg" alt='Not Found'/>
     </Profile>
    </div>
  );
}

export default App;

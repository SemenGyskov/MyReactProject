
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
function App() {
  const [people,setPeople] = useState('Иваныч')
  return (
   <div className='main'>
      <Header/>
      <Navbar/> {/* Здесь хранятся все пути и переходы, хз почему, но по другому не работало ёбана в рот */}
      <Footer/>
   </div>
  );
}

export default App;

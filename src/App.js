import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Home/Contact';
import Faq from './Components/Home/Faq';
import Home from './Components/Home/Home';
import MySkills from './Components/Home/MySkills';
import Navigation from './Components/Home/Navigation';
import Projects from './Components/Home/Projects';

function App() {
  return (
    <div className="center_root">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/skills' element={<MySkills/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

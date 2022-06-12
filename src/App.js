import { Route, Routes} from 'react-router-dom';
import Faq from './Components/Home/Faq';
import Home from './Components/Home/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySkills from './Components/Home/MySkills';
import Navigation from './Components/Home/Navigation';
import Projects from './Components/Home/Projects';
import Blogs from './Components/Home/Blogs';
import FitnessClub from './Components/Home/FitnessClub';
import BookLover from './Components/Home/BookLover';
import Agricultural from './Components/Home/Agricultural';
import Doctor from './Components/Home/Doctor';
import Aman from './Components/Home/Aman';
import Penguine from './Components/Home/Penguine';
import Pax from './Components/Home/Pax';
import Watch from './Components/Home/Watch';
import Contact from './Components/Home/Contact';
import CopyRight from './Components/Home/CopyRight';

function App() {
  return (
    <div className="center_root">
      <Navigation/>
      <Routes>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/skills' element={<MySkills/>}></Route>
        <Route path='/fitness' element={<FitnessClub/>}></Route>
        <Route path='/bookLover' element={<BookLover/>}></Route>
        <Route path='/culture' element={<Agricultural/>}></Route>
        <Route path='/doctor' element={<Doctor/>}></Route>
        <Route path='/aman' element={<Aman/>}></Route>
        <Route path='/penguine' element={<Penguine/>}></Route>
        <Route path='/pax' element={<Pax/>}></Route>
        <Route path='/watch' element={<Watch/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <CopyRight/>
      <ToastContainer />
    </div>
  );
}

export default App;

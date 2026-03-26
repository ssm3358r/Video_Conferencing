
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Authentication from './pages/Authentication.jsx';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet.jsx';
import History from './pages/history.jsx';
import HomeComponent from './pages/Home.jsx';
function App() {


  return (
    <Router>
       <AuthProvider>
        <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/:url' element={<VideoMeetComponent/>}/>
        <Route path='/history' element={<History/>}/>
    
        <Route path='/home' element={<HomeComponent/>}/>

      </Routes>
       </AuthProvider>
      
    </Router>
  )
}

export default App;

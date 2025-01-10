import { PageTop } from './components/homeComponents/layout';
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Login from './components/homeComponents/login';
function App() {


  return (
    <div>
      <Router basename='/fashion-brand'>
        <Routes>
          <Route path='/' element={<Login />}/> 
          <Route path='/home' element={<PageTop />}/>  
          <Route path = '/contact' element = {<Contact/>} />     
          </Routes>
      </Router>
      
    </div>
    
  )
}

export default App

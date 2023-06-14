
import './App.css';
import Homepage from './components/Homepage';
import { Routes, Route, } from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
import RequestOrder from './components/RequestOrder';
import { DataProvider } from './context/DataContext';
import ContactUs from './components/ContactUs';
import AboutUS from './components/AboutUS';
import TrackGoods from './components/TrackGoods';
import AdminPanel from './components/protectedroutes/AdminPanel';
import AdminViewRequest from './components/protectedroutes/AdminViewRequest';
import Adminlogin from './components/protectedroutes/Adminlogin';
import Admin from './components/protectedroutes/Admin';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <main className="App">
          <Nav />

          <section className='main--display'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/request-quote' element={<RequestOrder />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/about-us' element={<AboutUS />} />
              <Route path='/tracking' element={<TrackGoods />} />

              <Route path='/admin-login' element={<Adminlogin />} />
              <Route path='/' element={<Admin />}>
                <Route path='/admin-panel' element={<AdminPanel />} />
                <Route path='/admin-view-request/:id' element={<AdminViewRequest />} />
              </Route>

            </Routes>
          </section>

          <Footer />
        </main>
      </AuthProvider>
    </DataProvider>
  );
}

export default App

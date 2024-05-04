import './App.css';
import Booking from './components/Booking';
import Header from './components/Header';
import Table from './components/Table';
// import beach from "../src/assets/beach.jpeg";

function App() {
  return (
    <div className='bg-image bg-cover bg-no-repeat'>
    <Header />
    <section className='h-screen'>
      <Booking />
      <Table />
    </section>

    
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';

function App() {
  return (
    <div className="bg-[url('/src/assets/image.jpg')] bg-cover bg-center h-screen w-screen">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
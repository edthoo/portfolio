import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <main className="bg-[#f5ebe0] h-screen">
      <Header></Header>
      <Sidebar></Sidebar>
      <Body></Body>
    </main>
  );
}

export default App;

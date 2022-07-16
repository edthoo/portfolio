import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <main class="min-w-sm mx-auto bg-gray-300 md:max-w-xl">
      <Header></Header>
      <Sidebar></Sidebar>
      <Body></Body>
    </main>
  );
}

export default App;

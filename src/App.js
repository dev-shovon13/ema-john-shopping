import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
    </div>
  );
}

export default App;

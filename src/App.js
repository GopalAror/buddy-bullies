import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Mynav from './components/Mynav';
import Mymint from './components/Mymint';
import Mymap from './components/Mymap';
import Mycard from './components/Mycard';
function App() {
  return (
    <div class="overflow-hidden ">
      <div class='bg-head'>
        <Mynav />
      </div>
      <div class="bg-color position-relative ">
        <Mymint />
        <Mymap />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet'
import Hello from './components/Hello';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      {/* <Greet name='Bruce' heroName='Batman'>
        <p><i>I am batman</i></p>
      </Greet>
      <Greet name='Tony' heroName='Ironman'>
        <button>Ironman FLY</button>
      </Greet>
      <Greet name='Peter' heroName='Spiderman' />

      <Welcome name='Clark' heroName='Superman' />
      <Welcome name='Thor' heroName='THOR' />
      <Welcome name='T"chala' heroName='Black Panther' />

      <Message />
      <Hello/> */}

      {/* <Counter/> */}
    </div>
  );
}

export default App;

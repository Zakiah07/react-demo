import './App.css'
import { Greet } from './components/Greet'
import { Message } from './components/Message'

function App() {
  return (
    <div className="App">
      {/* <Greet name='Bruce' heroName='Batman'/>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'>
        <p>This is children props</p>
      </Greet> */}
      <Message />
    </div>
  )
}

export default App;


import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'
import './App.css'

function App() {

  return (
    <>
      <h3><i>Counter</i></h3>
      <Counter />
      <br />
      <h3><i>Toggle Button</i></h3>
      <ToggleButton />
      <br />
      <h3><i>Name Form</i></h3>
      <NameForm />
      <h3><i>Counter with effect</i></h3>
      <CounterWithEffect />
    </>
  )
}

export default App

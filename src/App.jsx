import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'
import StaticComponent from './components/StaticCompoment/StaticComponent'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'

function App() {

  return (
    <>
      {/* <p className="text-3xl font-bold underline">Testing TailwindCSS</p>
      <h3><i>Counter</i></h3>
      <Counter />
      <br />
      <h3><i>Toggle Button</i></h3>
      <ToggleButton />
      <br />
      <h3><i>Name Form</i></h3>
      <NameForm />
      <h3><i>Counter with effect</i></h3>
      <CounterWithEffect /> */}
      <UserList />
      <br />
      <UserListWithLoading />
    </>
  )
}

export default App

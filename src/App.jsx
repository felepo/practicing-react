// import { createContext, useContext, useState } from 'react';
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'
import StaticComponent from './components/StaticCompoment/StaticComponent'
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'
import SearchPosts from './components/SearchPosts/SearchPosts'
import Counter2 from './components/Counter2/Counter2'
import CounterWithCustomHook from './components/CounterWithCustomHook/CounterWithCustomHook';
import CounterWithReactMemo from './components/CounterWithReactMemo/CounterWithReactMemo';
import ButtonTS from './components/ButtonTS/ButtonTS';

// const ThemeContext = createContext();
 
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       { children }
//     </ThemeContext.Provider>
//   )
// }

// function ThemeButton() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button 
//       onClick={toggleTheme} 
//       style={{ 
//         backgroundColor: theme === 'light' ? '#fff' : '#333', 
//         color: theme === 'light' ? '#000' : '#fff',
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer'
//       }}
//     >
//       Switch to {theme === 'light' ? 'dark' : 'light'} mode
//     </button>
//   )
// }

function App() {

  const clickHandler = () => {
    alert('Button clicked!');
  };

  return (
    // <ThemeProvider>
    //   <ThemeButton />
    // </ThemeProvider>


    // <>
    //   <p className="text-3xl font-bold underline">Testing TailwindCSS</p>
    //   <h3><i>Counter</i></h3>
    //   <Counter />
    //   <br />
    //   <h3><i>Toggle Button</i></h3>
    //   <ToggleButton />
    //   <br />
    //   <h3><i>Name Form</i></h3>
    //   <NameForm />
    //   <h3><i>Counter with effect</i></h3>
    //   <CounterWithEffect />
    //   <UserList />
    //   <br />
    //   <UserListWithLoading />
    //   <SearchPosts />
    //   <Counter2 />
    // </>
    // <CounterWithCustomHook />
    // <CounterWithReactMemo />
    <ButtonTS clickHandler={clickHandler} label="Click me!" />
  )
}

export default App

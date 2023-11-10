  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';

  import React,{useState} from 'react';
  import Main from './pages/Main';
  import './App.css';

  export const AppContext = React.createContext();
function App() {
  const [library ,setLibrary] = useState([]);
  const [bag , setBag] = useState([]);
  return (
      <>
      <AppContext.Provider value={{library,setLibrary ,bag,setBag}} >
        <Main />
      </AppContext.Provider>
      </>
  );
}

export default App;

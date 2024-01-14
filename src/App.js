import React,{useEffect,useState} from 'react'
import MyComponent from './components/useCallback'

function App() {
    const [name,setName]=useState('akash');
    return(
<>
<MyComponent/>
</>
    );
}

export default App

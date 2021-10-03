import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import {TodoApp} from './components/08-useReducer/TodoApp'
import {MainApp} from './components/09-useContext/MainApp'
// import {Memorize} from './components/memos/Memorize'
// import {MemoHook} from './components/memos/MemoHook'
// import {CallBackHook} from './components/memos/CallBackHook'
// import {Padre} from './components/memos/Padre'
// import {RealExampleRef} from './components/useRef/RealExampleRef'
// import {LayoutEffect} from './components/useLayoutEffect/LayoutEffect'
// import {HooksApp} from './HooksApp'
// import {CounterApp} from './components/useState/CounterApp'
// import {CounterWithCustomHook} from './components/useState/CounterWithCustomHook'
// import {SimpleForm} from './components/useEffect/SimpleForm'
// import {FormWithCustomHook} from './components/useEffect/FormWithCustomHook'
// import {MultipleCustomHooks} from './components/examples/MultipleCustomHooks'
// import {FocusScreen} from './components/useRef/FocusScreen'

ReactDOM.render(
  <React.StrictMode>
      <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

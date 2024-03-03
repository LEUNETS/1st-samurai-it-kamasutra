import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './components/redux-store/redux-store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </React.StrictMode>,
    </BrowserRouter>, document.getElementById('root'));
}


// function App (state) {
//   return (
//   <Routes>
//     <Route path="/" element={<state />} />
//      <Route path="/post" element={<store.dispatch.bind />} />
//      <Route path="/message" element={<store />} />
//   </Routes>
//   );
// }

rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});

export default App;
// ReactDOM.createRoot(
//   <BrowserRouter>
//         <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
//   </BrowserRouter>,document.getElementById('root')).createRoot();


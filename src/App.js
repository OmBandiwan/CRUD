import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Home } from './components/Home/Home'
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes >
        <Route path='/' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App;

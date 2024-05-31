import {Routes,Route} from 'react-router-dom'
import Singup1 from './componet/signup/signup'
import Login1 from './componet/login/login'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login1 />} />
      <Route path='/signup' element={<Singup1 />} />
    </Routes>
    </>
  )

}

export default App

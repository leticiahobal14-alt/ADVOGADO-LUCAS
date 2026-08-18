import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import Trabalhista from './Trabalhista'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabalhista" element={<Trabalhista />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
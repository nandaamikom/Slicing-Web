import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import InventarisList from './pages/InventarisList'
import InventarisForm from './pages/InventarisForm'
import InventarisDetail from './pages/InventarisDetail'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navbar />
          <main className="flex-1 bg-gray-100 ml-64 p-6 min-h-screen overflow-auto">
            <Routes>
              <Route path="/" element={<InventarisList />}></Route>
              <Route path="/add" element={<InventarisForm />}></Route>
              <Route path="/edit/:id" element={<InventarisForm />}></Route>
              <Route path="/detail/:id" element={<InventarisDetail />}></Route>
            </Routes>
          </main>
      </div>
    </Router>
  )
}

export default App

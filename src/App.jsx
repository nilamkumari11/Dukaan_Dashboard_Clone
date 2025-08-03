
import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'
import { useState } from 'react'

function App() {
const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex'>
      <Sidebar isOpen={sidebarOpen}></Sidebar>
      <div>
        <Navbar  toggleSidebar={() => setSidebarOpen(!sidebarOpen)} ></Navbar>
        <div className='pt-30 pl-5'>
          <Card title={"Amount pending "} amount={"92,312.20"} orderCount={13}></Card>
        </div>
      </div>
    </div>
  )
}

export default App

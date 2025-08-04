
import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'
import { useState } from 'react'
import { BlueCard } from './components/BlueCard'

function App() {
const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex bg-stone-50'>
      <Sidebar isOpen={sidebarOpen}></Sidebar>
      <div>
        <Navbar  toggleSidebar={() => setSidebarOpen(!sidebarOpen)} ></Navbar>
        <div className='flex justify-between pt-28'>
          <h2 className='pl-8 text-2xl font-medium'>Overview</h2>
          <div className='flex items-center bg-white shadow text-gray-500 p-2 '>
            <h2 className='mr-2'>This Month</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div className='flex pt-8 gap-4 justify-between flex-wrap '>
          <BlueCard title={"Next Payout"} amount={"2,312.23"} orderCount={23}/>
          <Card title={"Amount pending "} amount={"92,312.20"} orderCount={13}></Card>
          <Card title={"Amount Processed"} amount={"23,92,312.19"}></Card>
        </div>
        <h2 className='text-xl font-medium pl-8 pt-6'>Transactions | This Month</h2>
        <div className='flex pl-8 pt-6 gap-4'>
          <h2 className='bg-gray-200 p-2 pl-3 pr-3 rounded-4xl'>Payouts (22)</h2>
          <h2 className='bg-cardBg text-white p-2 pl-3 pr-3 rounded-4xl'>Refunds (6)</h2>
        </div>
      </div>
    </div>
  )
}

export default App

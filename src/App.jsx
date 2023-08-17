import Buttons from './components/Buttons'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='grid grid-cols-[12%_88%] h-screen font-poppins'>
      <div className=''>
        <Sidebar />
      </div>

      <div className=''>
        <Buttons />
      </div>
    </div>
  )
}

export default App

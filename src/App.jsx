import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import home from './pages/home'
import ContactBar from './components/componentBar'
import GlassCard from './components/GlassCard'
import GlassmorphismCard from './components/GlassCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex items-center justify-center min-h-screen gap-45">
        <div className="w-64 h-64flex items-center justify-center text-xl font-medium">
          <GlassCard />
        </div>

        <div className="flex flex-col items-center gap-5">
          <img
            src="src/assets/profile.svg"
            alt="Centered Image"
            className="w-70 h-70 object-cover rounded-full flex items-center justify-center text-4xl shadow-lg"
          />
          <div>
            <ContactBar />
          </div>
        </div>
</div>

    </>
  )
}

export default App

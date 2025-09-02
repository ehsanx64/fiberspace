import { useState } from 'react'
import { Button } from '@chakra-ui/react'
// Supports weights 200-900
import '@fontsource-variable/nunito';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>FiberSpace</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App

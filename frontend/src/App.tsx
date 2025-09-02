import { useState } from 'react'
import {
    VStack,
    Heading, Button
} from '@chakra-ui/react'
import { RiAddLine } from "react-icons/ri"
import '@fontsource-variable/nunito';
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <VStack>
            <Heading>FiberSpace</Heading>
            <Button onClick={() => setCount((count) => count + 1)}>
                <RiAddLine />{count} clicks
            </Button>
        </VStack>
    )
}

export default App

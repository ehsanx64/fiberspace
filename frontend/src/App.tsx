import { useState } from 'react'
import {
    VStack, Container, 
    Heading, Button
} from '@chakra-ui/react'
import { RiAddLine } from "react-icons/ri"
// @ts-ignore
import '@fontsource-variable/nunito';
import './App.css'

import { Navbar } from '@/components/Navbar';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />

            <VStack style={{'gap': '10px'}} p="2">
                <Container py="2" centerContent={true}>
                    <Heading>FiberSpace</Heading>    
                </Container>

                <Container py="2" centerContent={true}>
                    <Button onClick={() => setCount((count) => count + 1)}>
                        <RiAddLine />{count} clicks
                    </Button>
                </Container>
            </VStack>
        </>
        
    )
}

export default App

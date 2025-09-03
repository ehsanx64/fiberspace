import { useState } from 'react'
import {
    VStack, Container,
    Heading, Button
} from '@chakra-ui/react'
import { RiAddLine } from "react-icons/ri"


function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <VStack style={{ 'gap': '10px' }} p="2">
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

export default Home

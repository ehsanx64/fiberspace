import {
    VStack, Container,
    Heading
} from '@chakra-ui/react'

function About() {
    return (
        <>
            <VStack style={{ 'gap': '10px' }} p="2">
                <Container py="2" centerContent={true}>
                    <Heading>About</Heading>
                </Container>
            </VStack>
        </>
    )
}

export default About

import {
    Container, Heading, Text
} from '@chakra-ui/react'
import { Page } from '@/components/Page';

function About() {
    return (
        <Page>
            <Container px="0" py="1" centerContent={true}>
                <Heading size="5xl">About</Heading>
            </Container>

            <Heading size="3xl">Introduction</Heading>
            <Text mb="4">This the content for the about page</Text>

            <Heading size="3xl">Why?</Heading>
            <Text mb="4">Why this page exists ...</Text>

            <Heading size="3xl">How?</Heading>
            <Text mb="4">How this page was made ...</Text>
        </Page>
    );
}

export default About

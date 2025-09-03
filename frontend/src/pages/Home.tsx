import { useState, useEffect } from 'react'
import {
    Container,
    Heading, Text, Button
} from '@chakra-ui/react'
import { RiAddLine } from "react-icons/ri"
import { Page } from '@/components/Page';
import axios from 'axios';


function Home() {
    const [count, setCount] = useState<number>(0);
    const [message, setMessage] = useState<string>('');
    const [hasMessageFetched, setHasMessageFetched] = useState<boolean>(false);

    useEffect(() => {
        console.log('useEffect()');
    });

    useEffect(() => {
        if (!hasMessageFetched) {
            axios.get('http://localhost:3000/message')
                .then(res => {
                    console.log(res);
                    setMessage(res.data);
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => {
                    console.info('done');
                    setHasMessageFetched(true)
                });
        }
    }, [hasMessageFetched]);

    useEffect(() => {
        console.log('useEffect(), []');
        // If message is empty try to fetch it from the API
        if (message === '') {

        }

    }, []);

    useEffect(() => {
        console.log('useEffect(), [count]');
    }, [count]);

    useEffect(() => {
        console.log('useEffect(), [message]');
    }, [message]);

    return (
        <Page>
            <Container py="2" centerContent={true}>
                <Heading>FiberSpace</Heading>
            </Container>

            <Container py="2" centerContent={true}>
                <Button onClick={() => setCount((count) => count + 1)}>
                    <RiAddLine />{count} clicks
                </Button>
            </Container>

            <Container py="2">
                <Text>Message: {message}</Text>
                <Text>Count: {count}</Text>
            </Container>
        </Page>
    )
}

export default Home

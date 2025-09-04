import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container, Group, Separator,
    Heading, Text, Button    
} from '@chakra-ui/react';
import { RiAddLine } from "react-icons/ri"

import { Page } from '@/components/Page';
import { useClickerStore } from '@/stores/clicker';

function Home() {
    const [count, setCount] = useState<number>(0);
    const [message, setMessage] = useState<string>('');
    const [hasMessageFetched, setHasMessageFetched] = useState<boolean>(false);

    const {clicker, increase, decrease} = useClickerStore();

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
            <Heading size="6xl" width="100%" textAlign="center">FiberSpace</Heading>

            <Container px="0" py="1">
                <Heading>Counter</Heading>
                <Button onClick={() => setCount((count) => count + 1)}>
                    <RiAddLine />{count} clicks
                </Button>
            </Container>

            <Separator width="100%" />

            <Container px="0" py="1">
                <Heading>API Message</Heading>
                <Text>Message: {message}</Text>
            </Container>

            <Separator width="100%" />

            <Container px="0" py="1">
                <Heading>Clicker</Heading>
                <Text>Clicker: {clicker}</Text>
                <Group gap="2">
                    <Button onClick={increase}>+</Button>
                    <Button onClick={decrease}>-</Button>
                </Group>
            </Container>
        </Page>
    )
}

export default Home

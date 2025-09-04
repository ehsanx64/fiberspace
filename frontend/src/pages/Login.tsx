import {
    Container, Heading
} from '@chakra-ui/react'
import { Page } from '@/components/Page';

function Login() {
    return (
        <Page>
            <Container px="0" py="1" centerContent={true}>
                <Heading size="5xl">Login</Heading>
            </Container>
        </Page>
    );
}

export default Login

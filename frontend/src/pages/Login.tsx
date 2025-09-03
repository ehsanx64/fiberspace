import {
    Container, Heading
} from '@chakra-ui/react'
import { Page } from '@/components/Page';

function Login() {
    return (
        <Page>
            <Container py="2" centerContent={true}>
                <Heading>Login</Heading>
            </Container>
        </Page>
    );
}

export default Login

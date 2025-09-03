import {
    Container, Flex, Spacer,
    Button, Drawer, Portal,
    useDisclosure
} from "@chakra-ui/react";
import { NavLink } from 'react-router';
import { useContext, type ReactNode } from "react";
import { RiMenuLine, RiReactjsFill } from "react-icons/ri";
import { AppContext } from '@/contexts/App';

interface NavbarLink {
    title: string;
    url: string;
}

const navbarLinks: NavbarLink[] = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '/about'
    },
]

export const Navbar = () => {
    const app = useContext(AppContext);
    const { open, onOpen, onClose } = useDisclosure();

    const renderLinks = (lightText: boolean = false): ReactNode[] => {
        let output: ReactNode[] = [];
        const styles: any = {};

        if (lightText) {
            styles.color = 'white';
        }

        if (navbarLinks.length < 1) {
            return output;
        }

        navbarLinks.forEach((l) => {
            output.push(
                <NavLink key={`navlink-${l.url}`} style={styles} 
                to={l.url} onClick={onClose}>
                    {l.title}
                </NavLink>
            );
        })

        return output
    }

    return (
        <Drawer.Root size="xs" placement={"start"} open={open} >
            <Container style={{backgroundColor: 'navy',color: 'white'}} py="2" px="8">
                <Container maxW={"1080px"}>
                    <Flex justifyContent="start" gap={"2"}>
                        <RiReactjsFill size="36px" color="white" />
                    
                        <Flex hideBelow={"481px"} alignItems="center" gap={"4"} 
                        style={{
                            color: 'white'
                        }}>
                            {renderLinks(true)}
                        </Flex>

                        <Spacer />

                        <Drawer.Trigger float={'right'}asChild hideFrom={"480px"}>
                            <Button variant="plain" size="md" onClick={onOpen}>
                                <RiMenuLine color="white" />
                            </Button>
                        </Drawer.Trigger>
                    </Flex>
                </Container>
            </Container>

            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>{app.name}</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Flex direction={"column"} gap={"4"}>
                                {renderLinks()}
                            </Flex>
                        </Drawer.Body>
                        <Drawer.Footer>
                            {/* <Button variant="outline">Cancel</Button>
                            <Button>Save</Button> */}
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            {/* <CloseButton size="sm" /> */}
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

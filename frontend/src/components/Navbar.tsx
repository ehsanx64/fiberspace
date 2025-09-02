import {
    Container, Flex,
    Button, CloseButton, Drawer, Portal, Link
} from "@chakra-ui/react"
import type { ReactNode } from "react";
import { RiMenuLine } from "react-icons/ri";

interface NavbarLink {
    title: string;
    url: string;
}

const navbarLinks: NavbarLink[] = [
    {
        title: 'Link 1',
        url: '/'
    },
    {
        title: 'Link 2',
        url: '/link2'
    },
    {
        title: 'Link 3',
        url: '#'
    },
]

export const Navbar = () => {
    const renderLinks = (): ReactNode[] => {
        let output: ReactNode[] = [];

        if (navbarLinks.length < 1) {
            return output;
        }

        navbarLinks.forEach((l) => {
            output.push(
                <Link px="2" href={l.url} style={{
                    color: 'white',
                    backgroundColor: 'navy'
                }}>{l.title}</Link>
            );
        })

        return output
    }

    return (
        <Drawer.Root size="xs" placement={"start"}>
            <Container maxW={"960px"} py="2" px="8">
                <Flex gap={"2"}>
                    <Drawer.Trigger asChild hideFrom={"480px"}>
                        <Button variant="ghost" size="md">
                            <RiMenuLine />
                        </Button>
                    </Drawer.Trigger>

                    
                    <Flex gap={"4"} hideBelow={"481px"}>
                        {renderLinks()}
                    </Flex>
                </Flex>
            </Container>

            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>Drawer Title</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <Flex direction={"column"} gap={"4"}>
                                {renderLinks()}
                            </Flex>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

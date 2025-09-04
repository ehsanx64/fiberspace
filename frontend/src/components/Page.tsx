import React, { ReactNode } from 'react';
import {
    Container, VStack
} from '@chakra-ui/react';

interface PageProps {
    children: ReactNode;
}

export const Page: React.FC<PageProps> = ({children}) => {
    return (
        <Container maxW={"1080px"}>
            <VStack gap="10px" alignItems="start" p="2">
                {children}    
            </VStack>            
        </Container>
    );
}
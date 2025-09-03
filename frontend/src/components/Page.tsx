import React, { ReactNode } from 'react';
import {
    Container, VStack
} from '@chakra-ui/react';

interface PageProps {
    children: ReactNode;
}

export const Page: React.FC<PageProps> = ({children}) => {
    return (
        <Container>
            <VStack style={{ 'gap': '10px' }} p="2">
                {children}    
            </VStack>            
        </Container>
    );
}
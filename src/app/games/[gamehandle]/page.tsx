'use client';

import { Center, HStack, Container, VStack, Box, Heading, Text, Button } from "@chakra-ui/react";

export default function SingleGamePage() {
    return (
        <Center mt={'50px'}>
            <HStack>
                <VStack>
                    <Box backgroundColor={'green'} width={'450px'} height={'250px'}>image</Box>
                    <Box backgroundColor={'green'} width={'450px'} height={'75px'}>imageSlider</Box>
                </VStack>
                <VStack width={'450px'} align={'left'}>
                    <Heading>Gamename</Heading>
                    <Text>game description, thsi si hdfoia hoaii lOrenscription, thsi si hdfoia hoaii lOrenscription, thsi si hdfoia hoaii lOrenscription, thsi si hdfoia hoaii lOren oa ivofnor bufúf fhi uah biu</Text>
                    <HStack>
                        <Button>Rules</Button>
                        <Button>Create Lobby</Button>
                    </HStack>
                </VStack>
            </HStack>
        </Center>
    )
}
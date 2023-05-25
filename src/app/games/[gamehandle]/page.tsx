'use client';

import { Center, HStack, Container, VStack, Box, Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";
const apiRoute = "https://board-game-backend.vercel.app";

export default function SingleGamePage() {
    function createLobby() {
        fetch(apiRoute + "/lobbycreate", {
            method: 'GET',
            mode: 'cors',
            headers: { 'content-type': 'application/json' }
        }).then((res: any) => {
            //TODO: Error handling
            console.log(res)
            var id = res.body['lobbyId'];
            // location.href = location.origin + "/lobby/" + id;
        });
    }
    return (
        <Center mt={'50px'}>
            <VStack align={'left'} spacing={10}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
                    <VStack>
                        <Box backgroundColor={'green'} width={'450px'} height={'250px'}>image</Box>
                        <Box backgroundColor={'green'} width={'450px'} height={'75px'}>imageSlider</Box>
                    </VStack>
                    <VStack width={'450px'} align={'left'}>
                        <Heading>Gamename</Heading>
                        <Text>game description, thsi si hdfoia hoaii lOrenscription, thsi si hdfoia hoaii lOrenscription, thsi si hdfoia hoaii lOrenscription, thsi si hdfoia hoaii lOren oa ivofnor bufúf fhi uah biu</Text>
                        <HStack paddingTop={'5px'}>
                            <Button as={'a'} href="#rules">Rules</Button>
                            <Button
                                onClick={createLobby}
                                color={'white'}
                                bg={'blue.400'}
                                _hover={{
                                    bg: 'blue.300',
                                }}>
                                Create Lobby</Button>
                            {/* This calls the backend (websocket node js server) function (eg) CreateLobby() and the function creates the lobby and returns the URL (with a free lobby id), 
                                Then the creator gets redirected to the url (maybe with admin functions?, we can send the session id to create lobby and set an admin),
                                if then someone joins an url with an id, 
                                I/he joins the Lobby page and calls functions to call backend function to connect with socket(with this id), so everyone gets connected to the websocket 
                                if you then press "start" a started event will be ommited to socket and the page will update for everone, the game starts */}
                        </HStack>
                    </VStack>
                </SimpleGrid>
                <VStack align={'left'}>
                    <Heading id="rules">Rules</Heading>
                    <Text>The rules are very easy.</Text>
                </VStack>
            </VStack>
        </Center>
    )
}
'use client';

import { Center, VStack, Button, HStack, Text, Heading } from "@chakra-ui/react";
const { io } = require("socket.io-client");

export default function InLobbyPage() {
    var socket = io('https://board-game-backend.vercel.app:5000');
    socket.on('hello', (res: any) => {
        console.log(res)
    });
    console.log("doing backend calls..")
    console.log("connecting with socket..")
    console.log("get response obj from socket/route.. Went everything right/successful? Who is in the lobby? Am i(my session id) the admin?")
    return (
        <Center mt={'50px'}>
            <VStack spacing={5} align={'left'}>
                <Heading>ONO</Heading>
                {/*player list: */}
                <VStack align={'left'}>
                    <Text>Player1</Text>
                    <Text>Player2</Text>
                    <Text>Player3</Text>
                    <Text>Player4</Text>
                    <Text>Player5</Text>
                </VStack>
                <HStack>
                    <Button>Start Game</Button>
                    <Button>Copy Link</Button>
                </HStack>
            </VStack>
        </Center>)
}
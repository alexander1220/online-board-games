'use client';

import { Center, VStack, Button, HStack, Text, Heading } from "@chakra-ui/react";
import { useState } from 'react';
const { io } = require("socket.io-client");

export default function InLobbyPage() {
    const [users, setUsers] = useState<string[]>([]);
    // var socket = io('http://localhost:5000/');
    var socket = io('https://board-game-backend.vercel.app:5000');

    socket.on('user connected', (user: string) => {
        console.log("user '" + user + "' connected")
        setUsers(prevUsers => [
            ...prevUsers,
            user,
        ]);

        console.log(users);
    });

    socket.on('hello', (res: any) => {
        socket.emit('lobbychange', { lobbyname: "The boss hoss" })
        console.log(res)
    });

    return (
        <Center mt={'50px'}>
            <VStack spacing={5} align={'left'}>
                <Heading>ONO</Heading>
                {/*player list: */}
                <VStack align={'left'}>
                    {users.map((user: string, index) => {
                        return (<Text key={index}>{user}</Text>)
                    })}
                </VStack>
                <HStack>
                    <Button>Start Game</Button>
                    <Button>Copy Link</Button>
                </HStack>
            </VStack>
        </Center>)
}
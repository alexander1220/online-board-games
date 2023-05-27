'use client';

import { Center, VStack, Button, HStack, Text, Heading } from "@chakra-ui/react";
import { useState } from 'react';
const { io } = require("socket.io-client");
const userId = Math.floor(Math.random() * 9000) + 1000;
console.log(userId);
const socket = io("https://board-game-backend.vercel.app:5000", {
    // const socket = io("http://localhost:5000", {
    withCredentials: true,
    extraHeaders: {
        "Content-Type": "text/html"
    }
});

export default function InLobbyPage(/* get lobby id */) {
    const [users, setUsers] = useState<string[]>([]);

    socket.once('user connected', (user: string) => {
        console.log("user '" + user + "' connected")
        setUsers(prevUsers => [
            ...prevUsers,
            user,
        ]);
    });
    socket.emit("lobby join", userId); // pass lobby id

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
'use client';

import { SimpleGrid, Box, VStack, Heading, Text } from '@chakra-ui/react';

export default function GamesPage() {
    return (
        <SimpleGrid columns={3} spacing={5}>
            {tempGames.map((game) => (
                <VStack align={'left'} borderRadius={'lg'} borderWidth={1} borderColor={'white'}>
                    <Box backgroundColor={'green.400'} height={'180px'} width={'100%'}>image</Box>
                    <Heading size={'sm'}>{game.name}</Heading>
                    <Text>{game.minidesc}</Text>
                </VStack>
            ))}
        </SimpleGrid>
    )
}

const tempGames = [
    {
        'name': 'DOS',
        'minidesc': 'this is a game about cards 123',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'minidesc': 'this is a game about cards 19832183',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'minidesc': 'this is a game about soo fun',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'minidesc': 'this is a game about cards',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'minidesc': 'this is a game about cards',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
]
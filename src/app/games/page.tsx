'use client';

import { SimpleGrid, Center, Box, VStack, Heading, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function GamesPage() {
    return (
        <Center>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} p={10}>
                {tempGames.map((game) => (
                    <LinkBox>
                        <LinkOverlay href={"/games/" + game.handle}>
                            <VStack align={'left'} borderRadius={'lg'} borderWidth={1} borderColor={'white'} padding={0} width={{ base: '200px', lg: '320px' }}>
                                <Box backgroundColor={'blue.700'} height={'240px'} width={'100%'} borderRadius={'lg'}>preview image</Box>
                                <VStack p={2} paddingTop={1} align={'left'}>
                                    <Heading size={'sm'}>{game.name}</Heading>
                                    <Text>{game.minidesc}</Text>
                                </VStack>
                            </VStack>
                        </LinkOverlay>
                    </LinkBox>
                ))}
            </SimpleGrid>
        </Center>
    )
}

const tempGames = [
    {
        'name': 'DOS',
        'handle': 'dos',
        'minidesc': 'this is a game about cards 123',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'handle': 'dos',
        'minidesc': 'this is a game about cards 19832183',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'handle': 'dos',
        'minidesc': 'this is a game about soo fun',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'handle': 'dos',
        'minidesc': 'this is a game about cards',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
    {
        'name': 'DOS',
        'handle': 'dos',
        'minidesc': 'this is a game about cards',
        'longdesc': 'This is the ultimate game if you are playing with players. The game is about winning the game.'
    },
]
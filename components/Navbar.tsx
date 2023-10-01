import { Box, Button, ButtonGroup, Center, Flex, Heading, Spacer } from "@chakra-ui/react"

function Navbar() {
    return (
        <Flex className="bg-slate-900" alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>Kon</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='blue'>Contact me</Button>
                <Button colorScheme='facebook'>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Navbar
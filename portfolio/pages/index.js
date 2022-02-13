import {Container, Box, Heading} from "@chakra-ui/react"
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p="3" mb="6" align="center">
                Hello, I can help you make cool stuff!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page.title">
                        Konstantin Boguev
                    </Heading>
                    <p>Frontend / backend developer</p>
                </Box>
            </Box>
        </Container>
    )
}
export default Page;
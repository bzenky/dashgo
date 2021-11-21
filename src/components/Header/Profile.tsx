import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Zenky</Text>
        <Text color="gray.300" fontSize="small">
          bzenky@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Zenky" src="https://www.github.com/bzenky.png" />
    </Flex>
  )
}
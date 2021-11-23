import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Zenky</Text>
          <Text color="gray.300" fontSize="small">
            bzenky@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Zenky" src="https://www.github.com/bzenky.png" />
    </Flex>
  )
}
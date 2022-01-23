import React from 'react';
import { VStack, Heading,Text, SimpleGrid, GridItem, Button } from '@chakra-ui/react';

const FormDetails = ({children, title, subTitle, onSubmit}) => {
  return (
        <VStack w="full" h="full" p={{base: 12, sm: 12}} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="md">{title}</Heading>
                <Text>{subTitle}</Text>
            </VStack>
            <SimpleGrid columns={1} columnGap={3} rowGap={6} w="full">
                {children}
                <GridItem colSpan={1}>
                    <Button role="button" onClick={onSubmit} backgroundColor="green.200" color="white" size="lg" w="full">Submit</Button>
                </GridItem>
            </SimpleGrid>

        </VStack>
  );
}

export default FormDetails

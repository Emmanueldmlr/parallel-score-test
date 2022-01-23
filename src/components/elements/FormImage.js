import React from 'react';
import {  VStack, Image} from '@chakra-ui/react';


const FormImage = ({image}) => {

  return(

        <VStack w="full" h="full" p={10}  spacing={10} alignItems="flex-start" bg="gray.50">

            <Image src={image} alt='image' />
            
        </VStack>

    )
}

export default FormImage

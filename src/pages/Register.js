import React from 'react';

import { Flex, GridItem, FormControl, FormLabel, Input } from '@chakra-ui/react';

import FormDetails from '../components/elements/FormDetails';

import FormImage from '../components/elements/FormImage';

const Registration = () => {

  return (

    <Flex h="100vh" direction={{base:'column-reverse', md:'row'}} >
        <FormDetails title="Registration" subTitle="Kindly fill this form to register">
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>
                        Email Address
                    </FormLabel>
                    <Input placeholder="john@doe.com"/>
                </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>
                        Username
                    </FormLabel>
                    <Input placeholder="john"/>
                </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <Input placeholder="Enter your password"/>
                </FormControl>
            </GridItem>
        </FormDetails>
        <FormImage image="/image.svg"/>
    </Flex>

  )

}

export default Registration
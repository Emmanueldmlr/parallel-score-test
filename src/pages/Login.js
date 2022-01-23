import React from 'react';

import { Flex, GridItem, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

import FormDetails from '../components/elements/FormDetails';

import FormImage from '../components/elements/FormImage';

import { validateEmailInput } from '../utils/formUtils';

import useForm from '../hooks/useForm'

const Login = () => {

    const {email, password, handleChange, handleSubmit} = useForm()

  return (

    <Flex h="100vh" direction={{base:'column-reverse', md:'row'}} >
        <FormDetails title="Login" subTitle="Kindly Login to your account" onSubmit={handleSubmit}>
            <GridItem colSpan={1}>
                <FormControl isInvalid={!validateEmailInput(email)}>
                    <FormLabel htmlFor="email">
                        Email
                    </FormLabel>
                    <Input id="email" value={email} name="email" onChange={handleChange} type="email" placeholder="john@doe.com"/>
                    <FormErrorMessage>Email is required and must be valid.</FormErrorMessage>
                </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
                <FormControl isInvalid={password === ""}>
                    <FormLabel htmlFor="password">
                        Password
                    </FormLabel>
                    <Input id="password" value={password} name="password" onChange={handleChange} type="password" placeholder="Enter your password"/>
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                </FormControl>
            </GridItem>
        </FormDetails>
        <FormImage image="/image.svg"/>
    </Flex>

  )

}

export default Login
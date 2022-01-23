import React, {useState} from 'react';

import { Flex, GridItem, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

import FormDetails from '../components/elements/FormDetails';

import FormImage from '../components/elements/FormImage';
import { validateEmailInput } from '../utils/formUtils';


const Login = () => {

    const [formData, setFormData] = useState({email:"", password:""});

    const handleChange = ({target: {name, value}})=>setFormData((prev) => ({...prev, [name]: value}))

    const handleSubmit = () => {

    }

  return (

    <Flex h="100vh" direction={{base:'column-reverse', md:'row'}} >
        <FormDetails title="Login" subTitle="Kindly Login to your account" onSubmit={handleSubmit}>
            <GridItem colSpan={1}>
                <FormControl isInvalid={!validateEmailInput(formData.email)}>
                    <FormLabel htmlFor="email">
                        Email
                    </FormLabel>
                    <Input id="email" value={formData.email} name="email" onChange={handleChange} type="email" placeholder="john@doe.com"/>
                    <FormErrorMessage>Email is required and must be valid.</FormErrorMessage>
                </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
                <FormControl isInvalid={formData.password == ""}>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <Input id="password" value={formData.password} name="password" onChange={handleChange} type="password" placeholder="Enter your password"/>
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                </FormControl>
            </GridItem>
        </FormDetails>
        <FormImage image="/image.svg"/>
    </Flex>

  )

}

export default Login
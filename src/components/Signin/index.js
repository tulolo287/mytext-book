import {Container, FormLabel, FormWrap, FormContent, Form, FormH1, FormInput, FormButton} from './SigninElements';

const Signin = () => {
    return (<>
    <Container>
        <FormWrap>
            <Icon></Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>)
}
export default Signin;
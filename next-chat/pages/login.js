import styled from "styled-components";
import Head from "next/head";
import { auth, provider } from "../firebase";
import { GoogleAuthProvider } from "@firebase/auth";
import { signInWithPopup } from "@firebase/auth";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <Container className="bg-stone-900">
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer className="bg-stone-800 drop-shadow-xl hover:drop-shadow-2xl animate">
        <Title className="text-stone-200 font-bold">NextChat</Title>
        <LoginButton
          className="text-stone-200 bg-stone-700 hover:text-stone-900 hover:bg-stone-200 animate"
          onClick={signIn}
        >
          connection avec
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            className="w-[2.5vw] ml-[0.5vw]"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
        </LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  border-radius: 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-right: 2vw;
  padding-left: 2vw;
  user-select: none;
`;

const Title = styled.h1`
  font-size: 4vw;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-right: 1vw;
  padding-left: 1vw;
  border-radius: 1.5vw;
`;
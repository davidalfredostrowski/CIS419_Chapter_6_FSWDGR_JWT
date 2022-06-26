
ubuntu@ip-172-31-4-219:~/graphbook/src/client/apollo/mutations$ cat login.js
import { gql, useMutation } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email : String!, $password : String!) {
    login(email : $email, password : $password) {
      token
    }
  }
`;

export const useLoginMutation = () => useMutation(LOGIN);

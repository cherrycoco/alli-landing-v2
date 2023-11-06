import gql from 'graphql-tag';

const UPDATE_USER = gql`
  mutation UpdateUser(
    $user: UserInput
  ) {
    updateUser(
      user: $user
    ) {
      success
      message
      user {
        id
      }
    }
  }
`;

export default UPDATE_USER;
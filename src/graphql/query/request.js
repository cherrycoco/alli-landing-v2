import gql from 'graphql-tag';

const GET_REQUEST = gql`
  query Request(
    $id: String
  ) {
    request(
      id: $id
    ) {
        id
        matches
        stage
        user {
          id
          firstName
          lastName
          email
          rate {
            rate
          }
        }
      }
  }
`;

export default GET_REQUEST;
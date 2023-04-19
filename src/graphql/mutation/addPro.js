import gql from 'graphql-tag';

const ADD_PRO = gql`
  mutation AddPro(
    $pro: ProInput
  ) {
    addPro(
      pro: $pro
    ) {
      success
      message
    }
  }
`;

export default ADD_PRO;
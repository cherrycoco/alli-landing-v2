import gql from 'graphql-tag';

const UPDATE_PRO = gql`
  mutation UpdatePro(
    $pro: ProInput
  ) {
    updatePro(
      pro: $pro
    ) {
      success
      message
    }
  }
`;

export default UPDATE_PRO;
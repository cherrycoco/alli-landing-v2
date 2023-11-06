import gql from 'graphql-tag';

const UPDATE_INTAKE = gql`
  mutation UpdateIntake(
    $intake: IntakeInput
    $user: UserInput
  ) {
    updateIntake(
      intake: $intake
      user: $user
    ) {
      success
      message
    }
  }
`;

export default UPDATE_INTAKE;
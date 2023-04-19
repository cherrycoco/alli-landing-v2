import gql from 'graphql-tag';

const ADD_QUIZ = gql`
  mutation AddQuiz(
    $quiz: QuizInput
  ) {
    addQuiz(
      quiz: $quiz
    ) {
      success
      message
      request {
        id
        user {
          id
          firstName
          email
        }
      }
    }
  }
`;

export default ADD_QUIZ;
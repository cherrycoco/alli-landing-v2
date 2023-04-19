import gql from 'graphql-tag';

const GET_EDUCATIONS = gql`
  {
    educations {
      id
      degree
      school
    }
  }
`

export default GET_EDUCATIONS;
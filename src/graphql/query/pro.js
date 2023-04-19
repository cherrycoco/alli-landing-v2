import gql from 'graphql-tag';

const GET_PRO = gql`
query Pro(
  $id: ID
) {
    pro(
      id: $id
    ) {
      id
      firstName
      lastName
      tel
      fullName
      pronoun
      gender
      zoom
      proNumber
      cohort
      type
      role
      bio
      couple
      trauma
      img
      isAccepting
      education {
        id
        school
        degree
        title
      }
      modalities {
        id
        name
      }
      specializations {
        id
        name
      }
    }
  }
`;

export default GET_PRO;
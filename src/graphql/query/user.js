import gql from 'graphql-tag';

const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      fullName
      tel
      email
      birthday
      emergencyContactName
      emergencyContactTel
      referralSource
      physicianType
      physicianName
      physicianTel
      referralNotes
      gender
      pronoun
      education
      occupation
      maritalStatus
      relationships {
        pro {
          fullName
          firstName
        }
      }
    }
  }
`;

export default GET_USER;
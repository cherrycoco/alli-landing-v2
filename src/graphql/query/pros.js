import gql from 'graphql-tag';

const GET_PROS = gql`
{
  pros {
    id
    firstName
    lastName
    tel
    fullName
    pronoun
    type
    gender
    role
    bio
    couple
    trauma
    img
    zoom
    isAccepting
    education {
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
`
export default GET_PROS;
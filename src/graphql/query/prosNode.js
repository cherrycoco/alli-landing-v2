const gql = require('graphql-tag');

const GET_AVAILABLE_PROS = gql`
{
  pros {
    id
    firstName
    fullName
    pronoun
    type
    role
    bio
    couple
    trauma
    img
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

module.exports = {
  GET_AVAILABLE_PROS,
};
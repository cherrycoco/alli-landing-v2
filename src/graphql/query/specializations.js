import gql from 'graphql-tag';

const GET_SPECIALIZATIONS = gql`
  {
    specializations {
      id
      name
    }
  }
`

export default GET_SPECIALIZATIONS;
import gql from 'graphql-tag';

const GET_MODALITIES = gql`
  {
    modalities {
      id
      name
    }
  }
`

export default GET_MODALITIES;
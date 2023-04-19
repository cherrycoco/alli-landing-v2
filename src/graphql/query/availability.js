import gql from 'graphql-tag';

const GET_AVAILABILITY = gql`
  query Availability(
    $proId: String
    $duration: Int
  ) {
    availability(
      proId: $proId
      duration: $duration
    ) {
        date
        times
      }
  }
`;

export default GET_AVAILABILITY;
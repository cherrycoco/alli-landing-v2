import gql from 'graphql-tag';

const CANCEL_BOOKING = gql`
  mutation CancelBooking(
    $id: ID
    $status: String
    $note: String
  ) {
    cancelBooking(
      id: $id
      status: $status
      note: $note
    ) {
      success
      message
    }
  }
`;

export default CANCEL_BOOKING;
import gql from 'graphql-tag';

const ADD_BOOKING_USER = gql`
  mutation AddBookingUser(
    $booking: BookingInput
    $request: RequestInput
  ) {
    addBookingUser(
      booking: $booking
      request: $request
    ) {
      success
      message
      booking {
        id
      }
      user {
        id
        firstName
        lastName
        tel
        email
      }
    }
  }
`;

export default ADD_BOOKING_USER;
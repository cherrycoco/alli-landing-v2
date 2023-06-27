import { gql } from '@apollo/client';

const GET_BOOKING = gql`
  query Booking($id: ID!) {
    booking(id: $id) {
      id
      date
      startTime
      service {
        id
        type
        price
        taxRate
        duration
        name
      }
      user {
        id
        emergencyContactName
        emergencyContactTel
        hasInsurance
        fullName
        firstName
        lastName
        stripe
      }
      pro {
        id
        firstName
        fullName
        title
      }
      rate {
        rate
      }
    }
  }
`;

export default GET_BOOKING;
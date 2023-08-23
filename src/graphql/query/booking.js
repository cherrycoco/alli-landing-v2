import { gql } from '@apollo/client';

const GET_BOOKING = gql`
  query Booking($id: ID!) {
    booking(id: $id) {
      id
      date
      startTime
      stateId
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
      }
      rate {
        rate
      }
    }
  }
`;

export default GET_BOOKING;
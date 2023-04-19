import React from "react";
import UserProvider from "./userProvider";
import BookingProvider from "./bookingProvider";
import QuizProvider from "./quizProvider";
import ProProvider from "./proProvider";


export const wrapRootElement = ({ element }) => {
  return (
    <UserProvider>
      <BookingProvider>
        <QuizProvider>
          <ProProvider>
            {element}
          </ProProvider>
        </QuizProvider>
      </BookingProvider>
    </UserProvider>
  )
};
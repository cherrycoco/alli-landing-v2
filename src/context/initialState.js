// initialStates.js
export const initialBookingState = {
  date: '',
  time: '',
  service: '',
};

export const initialUserState = {
  name: '',
  email: '',
  phone: '',
};

export const initialQuizState = {
  user: {},
  requestId: '',
  isOntario: '',
  tier: '',
  isStandardRate: null,
  rate: 0,
  firstName: '',
  email: '',
  type: '',
  goals: [],
  therapistGoals: [],
  isInsurance: null,
  coverage: [],
  pros: [
    // 'MtAdLaXGEIdxjqUR88orPkrDC6b2', // Samantha
    // 'MtAdLaXGEIdxjqUR88orPkrDC6b2', // Samantha
    `BxxemuISXcWHl7nd8UdmA9Jp0iE3`, // Lauren
    // `m3OQ7hjApge8WLXQPGKFP8xBuZU2`, // Myles
  ],
  proSelected: {},
};

export const initialProState = {
  id: '',
  firstName: '',
  lastName: '',
  pronoun: '',
  gender: '',
  tel: '',
  type: '',
  role: '',
  bio: '',
  couple: null,
  trauma: null,
  img: '',
  isAccepting: null,
  education: {},
  modalities: [],
  specializations: [],
}

export const initialQuizContext = {
  quiz: initialQuizState,
  setQuiz: () => {},
}

export const initialBookingContext = {
  booking: initialBookingState,
  setBooking: () => {},
}

export const initialUserContext = {
  user: initialUserState,
  setUser: () => {},
}

export const initialProContext = {
  pro: initialProState,
  setPro: () => {},
}

const emailError = (errMsg, errObj) => {
  const url = `https://us-central1-mama-mobile-238622.cloudfunctions.net/api/email/error`;

  const data = {
    errMsg,
    errObj,
  }

  const fetchData = { 
    method: 'POST', 
    body: JSON.stringify(data),
  };

  fetch(url, fetchData);
};

export default emailError;
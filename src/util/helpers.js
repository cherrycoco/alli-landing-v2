const capitalize = (str) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatName = (input) => {
  const trimmedInput = input.trim(); // Remove leading and trailing spaces
  const words = trimmedInput.split(/\s+/); // Split by one or more spaces
  
  const capitalizedWords = words.map((word) => capitalize(word));

  const formattedName = capitalizedWords.join(" ");
  return formattedName;
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function formatAndValidateEmail(input) {
  const email = input.trim().toLowerCase();

  if (isValidEmail(email)) {
    return email;
  } else {
    return false;
  }
}

const formatTel = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D+/g, '');
  return cleaned.substring(0, 10);
};

const formatAndValidateZoom = (url) => {
  // Regular expression pattern to match a Zoom meeting URL
  const zoomUrlPattern = /^https:\/\/(?:[a-zA-Z0-9-]+)?\.zoom\.us\/j\/(\d+)$/;

  const match = url.match(zoomUrlPattern);

  if (match) {
    // If the URL matches the pattern, return the formatted URL
    const meetingId = match[1];
    return `https://us06web.zoom.us/j/${meetingId}`;
  } else {
    // If the URL doesn't match the pattern, return null
    return null;
  }
};

function isValidLength(inputString, maxLength) {
  return inputString.length <= maxLength;
};

function splitAndJoin(inputString) {
  const splitString = inputString.split(/\n+/);
  return splitString.join('|');
}

const validateImageFile = async (file) => {
  const acceptedFileTypes = ['image/jpeg', 'image/png'];
  const maxFileSize = 1024 * 1024; // 1 MB
  const requiredWidth = 220;
  const requiredHeight = 280;

  // Check file type
  if (!acceptedFileTypes.includes(file.type)) {
    throw new Error('Invalid file type. Please upload a JPG or PNG file.');
  }

  // Check file size
  if (file.size > maxFileSize) {
    throw new Error('File size exceeds the 1MB limit. Please upload a smaller file.');
  }

  // Check image dimensions
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width === requiredWidth && img.height === requiredHeight) {
        resolve();
      } else {
        reject(new Error(`Invalid image dimensions. Please upload an image with ${requiredWidth}px (width) x ${requiredHeight}px (height).`));
      }
    };
    img.onerror = () => {
      reject(new Error('An error occurred while loading the image. Please try again with a different image.'));
    };
  });
};


const addMinutesToTime = (timeStr, minutesToAdd) => {
  // Convert input string to Date object
  let timeObj = new Date(`1970-01-01T${timeStr}Z`);
  // Add specified number of minutes
  timeObj.setMinutes(timeObj.getMinutes() + minutesToAdd);
  // Format the resulting time string
  let newTimeStr = timeObj.toISOString().slice(11, 19);
  return newTimeStr;
}


export { 
  capitalize,
  formatName,
  formatAndValidateEmail,
  formatTel,
  formatAndValidateZoom,
  isValidLength,
  splitAndJoin,
  validateImageFile,
  addMinutesToTime,
};
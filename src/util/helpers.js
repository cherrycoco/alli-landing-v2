const { DateTime } = require('luxon');
const { timeMap24 } = require('./timeMap');

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
  if (phoneNumber === '') return '';
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
  if (timeStr === null || timeStr === undefined) return null;
  // Convert input string to Date object
  let timeObj = new Date(`1970-01-01T${timeStr}Z`);
  // Add specified number of minutes
  timeObj.setMinutes(timeObj.getMinutes() + minutesToAdd);
  // Format the resulting time string
  let newTimeStr = timeObj.toISOString().slice(11, 19);
  return newTimeStr;
}

const utmParser = (utm) => {
  const result = {};

  const utmArr = utm.split('&');

  utmArr.forEach(param => {
    const paramArr = param.split('=');
    result[paramArr[0]] = paramArr[1];
  });
  
  return result;
};

const isWithin24Hours = (date, timeIdx) => {
  // get time now
  const now = DateTime.local().setZone('America/Toronto');
  console.log('now', now);

  // get booking time
  const dateArr = date.split('-');
  const time = timeMap24[timeIdx];
  const timeArr = time.split(':');
  console.log(dateArr, timeArr );

  const bookingDate = DateTime.fromObject({ 
    year: Number(dateArr[0]), 
    month: Number(dateArr[1]), 
    day: Number(dateArr[2]), 
    hour: Number(timeArr[0]),
    minute: Number(timeArr[1]),
  }, { zone: 'America/Toronto' });

  console.log('bookingDate', bookingDate);
  // get time difference
  const diff = bookingDate.diff(now, 'hours');
  console.log(diff);
  if (diff.get('hours') < 24) {
    return true;
  }
  return false;
};

const formatAddress = (address) => {
  if (!address) {
    return {};
  } else {
    const street = [];
    const result = {
      address: address.formatted_address,
    }

    for (let i = 0; i < address.address_components.length; i++) {
      const {types, short_name} = address.address_components[i];
      if (types.includes('street_number') || types.includes('route')) {
        street.push(short_name);
      } else if (types.includes('locality')) {
        result.city = short_name;
      } else if (types.includes('administrative_area_level_1')) {
        result.province = short_name;
      } else if (types.includes('country')) {
        result.country = short_name;
      } else if (types.includes('postal_code')) {
        result.postalCode = short_name;
      }
    }
    
    result.street = street.join(' ');
    return result;
  }
};

export { 
  capitalize,
  formatName,
  formatAndValidateEmail,
  formatTel,
  formatAddress,
  formatAndValidateZoom,
  isValidLength,
  splitAndJoin,
  validateImageFile,
  addMinutesToTime,
  utmParser,
  isWithin24Hours,
};
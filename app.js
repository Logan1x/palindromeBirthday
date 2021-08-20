function reverseString(str) {
  return str.split("").reverse().join("");
}

function checkPalindrome(str) {
  return str === reverseString(str);
}

function dateTostr(date) {
  day = date.day;
  month = date.month;
  year = date.year;

  if (day < 10) {
    daystr = "0" + day;
  } else {
    daystr = day.toString();
  }

  if (month < 10) {
    monthstr = "0" + month;
  } else {
    monthstr = month.toString();
  }

  dateStr = {
    day: daystr,
    month: monthstr,
    year: year.toString(),
  };
  return dateStr;
}

function allVariationOfDate(date) {
  var dateStr = dateTostr(date);

  // we need to convert to these formats
  // DD-MM-YYYY
  // MM-DD-YYYY
  // YYYY-MM-DD
  // DD-MM-YY
  // MM-DD-YY
  // YY-MM-DD
  ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  const dateVariations = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

  return dateVariations;
}

function checkAllPalindrome(date) {
  var dateVariations = allVariationOfDate(date);
  var palindrome = false;
  for (var i = 0; i < dateVariations.length; i++) {
    if (checkPalindrome(dateVariations[i])) {
      palindrome = true;
      break;
    }
  }
  return palindrome;
}

function findLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function getNextDate(date) {
  // let dateStr = dateTostr(date);

  day = date.day + 1;
  month = date.month;
  year = date.year;

  maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // we need to find next date
  if (month == 2) {
    if (findLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = month + 1;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = month + 1;
      }
    }
  } else {
    if (day > maxDays[month - 1]) {
      day = 1;
      month = month + 1;
    }
  }

  if (month > 12) {
    month = 1;
    year = year + 1;
  }

  date = {
    day: day,
    month: month,
    year: year,
  };
  return date;
}

function getNextPalindrome(date) {
  var nextDate = getNextDate(date);
  var ctr = 0;
  while (1) {
    ctr++;
    var palindrome = checkAllPalindrome(nextDate);
    if (palindrome) {
      return (
        "This date is not palindrome, Though after " +
        ctr +
        " day(s), Next Palindrome is on " +
        nextDate.day +
        "-" +
        nextDate.month +
        "-" +
        nextDate.year
      );
    }
    nextDate = getNextDate(nextDate);
  }
}

function findPalindromeOrNextPalindrome(date) {
  if (checkAllPalindrome(date)) {
    document.body.classList.add("bg-green-100");
    return "Congratulations, Your BirthDay is Palindrome :)";
  } else {
    document.body.classList.add("bg-red-100");
    return getNextPalindrome(date);
  }
}

const dateInput = document.getElementById("date-input");
const formSubmit = document.getElementById("form-submit");
const outputEl = document.getElementById("output-div");

formSubmit.addEventListener("submit", function handleFormSubmit(e) {
  e.preventDefault();
  document.body.classList.remove("bg-green-100");
  document.body.classList.remove("bg-red-100");
  var bdayDate = dateInput.value;
  // console.log(bdayDate);

  var date = bdayDate.split("-");
  var yyyy = date[0];
  var mm = date[1];
  var dd = date[2];

  var date = {
    day: Number(dd),
    month: Number(mm),
    year: Number(yyyy),
  };

  outputEl.innerText = findPalindromeOrNextPalindrome(date);
});

// date = {
// 	day: 02,
// 	month: 02,
// 	year: 2020,
// };

// console.log(getNextPalindrome(date));

// navbar js

// get variables

const btn = document.querySelector("button.mobile-nav-btn");
const menu = document.querySelector(".mobile-nav");

// event toggle

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  console.log("clicked");
});

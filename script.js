'use strict';

// User Information

const account1 = {
  user: 'Patrick Gray',
  movements: {
    amount: [23430, -102, 2000, 2546.78, -23, -10, 570, 890],
    date: [
      '2024-08-01T13:15:33.035Z',
      '2024-08-05T09:48:16.867Z',
      '2024-08-10T06:04:23.907Z',
      '2024-08-14T14:18:46.235Z',
      '2024-08-17T16:33:06.386Z',
      '2024-08-20T14:43:26.374Z',
      '2024-08-25T18:49:59.371Z',
      '2024-08-30T12:01:20.894Z',
    ],
  },
  interestRate: 6.5,
  currency: 'NZD',
  locale: 'en-NZ',
};

const account2 = {
  user: 'Sophie Bennett',
  movements: {
    amount: [1200, -450, -130.5, 789, 5620, -150, 230.75, 980],
    date: [
      '2024-08-03T12:22:33.035Z',
      '2024-08-07T10:15:16.867Z',
      '2024-08-12T07:45:23.907Z',
      '2024-08-15T15:04:46.235Z',
      '2024-08-18T09:03:06.386Z',
      '2024-08-20T11:53:26.374Z',
      '2024-08-24T14:38:59.371Z',
      '2024-08-29T18:47:20.894Z',
    ],
  },
  interestRate: 5.2,
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  user: 'Ethan Collins',
  movements: {
    amount: [4320, -320, -4000, 250, 1450, -60, 312.45, -25.75],
    date: [
      '2024-08-02T09:22:19.135Z',
      '2024-08-05T13:36:56.867Z',
      '2024-08-08T08:14:03.907Z',
      '2024-08-12T17:25:36.235Z',
      '2024-08-15T12:40:06.386Z',
      '2024-08-18T14:29:26.374Z',
      '2024-08-22T16:30:19.371Z',
      '2024-08-27T11:55:50.894Z',
    ],
  },
  interestRate: 4.1,
  currency: 'EUR',
  locale: 'de-DE',
};

const account4 = {
  user: 'Mia Thompson',
  movements: {
    amount: [5680, 800, -50, -204.4, 920, 140, -99.99, 3600],
    date: [
      '2024-08-01T14:08:33.035Z',
      '2024-08-05T10:12:16.867Z',
      '2024-08-10T06:18:23.907Z',
      '2024-08-14T09:44:46.235Z',
      '2024-08-17T16:12:06.386Z',
      '2024-08-21T18:33:26.374Z',
      '2024-08-25T12:59:59.371Z',
      '2024-08-29T14:22:20.894Z',
    ],
  },
  interestRate: 3.3,
  currency: 'GBP',
  locale: 'en-GB',
};

const accounts = [account1, account2, account3, account4];

// Google reCaptcha
// document
//   .getElementById('.user-login')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get the reCAPTCHA response
//     const captchaResponse = grecaptcha.getResponse();

//     if (captchaResponse.length === 0) {
//       alert('Please complete the CAPTCHA');
//       return;
//     }

//     // Normally, you would send this response to your server for validation
//     // For now, we just log it to the console
//     console.log('CAPTCHA Response:', captchaResponse);

//     // Example of form data to send to a server
//     const formData = new FormData(event.target);
//     formData.append('captcha-response', captchaResponse);

//     // You can use fetch or XMLHttpRequest to send the data to your server
//     // Example with fetch:
//     grecaptcha.ready(function () {
//       grecaptcha
//         .execute('6Lc-MTQqAAAAALV7XZleXgOKdBuJK76Dkg-F_fEJ', {
//           action: 'submit',
//         })
//         .then(function (token) {
//           // Add your logic to submit to your backend server here.
//           console.log('CAPTCHA token:', token);
//         });
//     });
//   });

//CREATE USERNAMES
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.user
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

//CREATE PASSWORD
const createPassword = function (accs) {
  accs.forEach(acc => {
    acc.password = 1234;
  });
};
createPassword(accounts);

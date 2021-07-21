// ===============1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
//   // orderedItems.forEach((item) => (totalPrice += item));
//   // Пиши код выше этой строки
//   return totalPrice;
// }

// =====================2
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// =========================3
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach((arr) => {
//     if (secondArray.includes(arr)) {
//       commonElements.push(arr);
//     }
//   });

//   return commonElements;
//   // Пиши код выше этой строки
// }

// ==========================4
// // Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// =======================5
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   quantity * pricePerItem;

// // Пиши код выше этой строки

// =======================6
// // Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Пиши код выше этой строки

// ==============================7
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// =================================8
// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }

// =============================9
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const array = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       array.push(numbers[i] + value);
//     } else {
//       array.push(numbers[i]);
//     }
//   }
//   return array;
//   // Пиши код выше этой строки
// }

//   // ==========================10
//   const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

// ======================11
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);

// ======================12
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);

// =======================13
// // Пиши код ниже этой строки
// const getUserNames = users => {
//   return users.map(user=>user.name)

//   };
//   // Пиши код выше этой строки

// ======================14
// // Пиши код ниже этой строки
// const getUserEmails = users => users.map(user=>user.email)
//   ;
//   // Пиши код выше этой строки

// =====================15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number=>number%2===0);
// const oddNumbers = numbers.filter(number=>number%2!==0);

// =======================16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book=>book.genres);
//   const uniqueGenres = allGenres.filter((genr, index, array) => array.indexOf(genr) === index);

// ========================16
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book=>book.rating>=MIN_RATING);
// const booksByAuthor = books.filter(book=>book.author === AUTHOR);

// =============================17
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
// return users.filter(user=>user.eyeColor===color)

// };
// // Пиши код выше этой строки

// ======================18
// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user=>user.age>=minAge && user.age<maxAge)

// };
// // Пиши код выше этой строки

// =====================19
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user=>user.friends.includes(friendName))
// };
// // Пиши код выше этой строки

// =====================20
// // Пиши код ниже этой строки
// const getFriends = (users) => {
//   return users.flatMap(user=>user.friends).filter((user, index, array)=>array.indexOf(user)===index)
// };
// // Пиши код выше этой строки

// ===================21
// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   return users.filter(user=>user.isActive===true)
// };
// // Пиши код выше этой строки

// =======================22
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   return users.filter(user=>user.isActive!==true)
// };
// // Пиши код выше этой строки

// ==================23
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book=>book.title===BOOK_TITLE);
// const bookByAuthor = books.find(book=>book.author===AUTHOR);

// =====================24
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find(user=>user.email===email)
// };
// // Пиши код выше этой строки

// ===================24
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(fA=>fA%2===0);
// const eachElementInFirstIsOdd = firstArray.every(fA=>fA%2!==0);

// const eachElementInSecondIsEven = secondArray.every(fA=>fA%2===0);
// const eachElementInSecondIsOdd = secondArray.every(fA=>fA%2!==0);

// const eachElementInThirdIsEven = thirdArray.every(fA=>fA%2===0);
// const eachElementInThirdIsOdd = thirdArray.every(fA=>fA%2!==0);

// ===================25
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every(user=>user.isActive===true)
// };
// // Пиши код выше этой строки

// =====================26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(fA=>fA%2===0);
// const anyElementInFirstIsOdd = firstArray.some(fA=>fA%2!==0);

// const anyElementInSecondIsEven = secondArray.some(fA=>fA%2===0);
// const anyElementInSecondIsOdd = secondArray.some(fA=>fA%2!==0);

// const anyElementInThirdIsEven = thirdArray.some(fA=>fA%2===0);
// const anyElementInThirdIsOdd = thirdArray.some(fA=>fA%2!==0);

// =====================27
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some(user=>user.isActive===true)
// };
// // Пиши код выше этой строки

// ======================28
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, el)=>acc + el, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// ====================29
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some(user=>user.isActive===true)
// };
// // Пиши код выше этой строки

// ====================30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, el)=>acc + el, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// ==================31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, player)=>acc + player.playtime / player.gamesPlayed, 0);

// ==================32
// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//   return users.reduce((acc, user)=>acc + user.balance, 0)
// };
// // Пиши код выше этой строки

// =====================33
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((acc, user)=>acc + user.friends.length, 0)
// };
// // Пиши код выше этой строки

// =======================34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// =====================35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b)=>a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b)=>b - a);

// ====================36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки

//   const authorsInAlphabetOrder = [...authors].sort((a, b)=>a.localeCompare(b));

//   const authorsInReversedOrder = [...authors].sort((a, b)=>b.localeCompare(a));

// =================37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstAthor, secondAuthor)=>firstAthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAthor, secondAuthor)=>secondAuthor.author.localeCompare(firstAthor.author));

// const sortedByAscendingRating = [...books].sort((firstAthor, secondAuthor)=>firstAthor.rating - secondAuthor.rating);

// const sortedByDescentingRating =  [...books].sort((firstAthor, secondAuthor)=>secondAuthor.rating - firstAthor.rating);

// ====================38
// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//   return [...users].sort((firstUser, secondUser)=>firstUser.balance - secondUser.balance)
// };
// // Пиши код выше этой строки

// ======================39
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((firstUser, secondUser)=>secondUser.friends.length - firstUser.friends.length)
// };
// // Пиши код выше этой строки

// ======================40
// // Пиши код ниже этой строки
// const sortByName = users => {
//   return [...users].sort((firstUser, secondUser)=>firstUser.name.localeCompare(secondUser.name))
// };
// // Пиши код выше этой строки

// ====================41
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
//   .filter((user) => user.rating > MIN_BOOK_RATING)
//   .map((user) => user.author)
//   .sort((fA, sA) => fA.localeCompare(sA));

// =======================42
// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((fU, sU)=>fU.friends.length - sU.friends.length).map(user=>user.name)
// };
// // Пиши код выше этой строки

// ======================43
// // Пиши код ниже этой строки
// const getSortedFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((name, index, array) => array.indexOf(name) === index)
//     .sort((friendName1, friendName2) => friendName1.localeCompare(friendName2));
// };
// // Пиши код выше этой строки

// // ======================44
// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users].filter(user=>user.gender===gender).reduce((acc, user)=>acc + user.balance, 0)
// };
// // Пиши код выше этой строки

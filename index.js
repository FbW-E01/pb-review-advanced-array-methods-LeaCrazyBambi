const array1 = [
  {
    name: "Lara",
    URL: "www.",
    number: 23,
  },
  {
    name: "Laura",
    URL: "https://",
    number: 2,
  },
  {
    name: "Mara",
    URL: "http://",
    number: 3,
  },
  {
    name: "Maha",
    URL: "www.",
    number: 21,
  },
  {
    name: "Lata",
    URL: "www.948606",
    number: 11,
  },
  {
    name: "Leara",
    URL: "https://",
    number: 30,
  },
  {
    name: "Bea",
    URL: "www.",
    number: 32,
  },
  {
    name: "Kim",
    URL: "http / 899",
    number: 37,
  },
  {
    name: "Lynn",
    URL: "https://github.com/",
    number: 18,
  },
  {
    name: "Tara",
    URL: "www.google.de",
    number: 309,
  },
];

// Exercise 2.
function printPersonName(person) {
  return person.name;
}

const onlyNames = array1.map(printPersonName);
console.log(onlyNames);
//  Exercise 3 - URL
// array1.forEach(function (item) {
//   if (item.URL.startsWith("http")) {
//     console.log(item.URL);
//   } else {
//     console.log("Invalid URL for ", item.name);
//   }});
// Above is the same as bellow

// array1.forEach((i) => {
//   i.URL.startsWith("http")
//     ? console.log(i.URL)
//     : console.log("Invalid URL for", i.name);
// });

// Exercise 4.
array1.sort(function () {
  return Math.random() * 10 - 5;
});

// Exercise 5.
array1.sort(function (a, b) {
  if (a.number > b.number) {
    return 1;
  } else if (b.number > a.number) {
    return -1;
  } else {
    return 0;
  }
});

// Exercise 6.
array1.sort(function (a, b) {
  if (a.number > b.number) {
    return -1;
  } else if (b.number > a.number) {
    return 1;
  } else {
    return 0;
  }
});

// console.log(array1);

// Exercise 7.

const namesString = onlyNames.join(", ");
const namesAllTogether = namesString.replace(/,(?=[^,]*$)/, " and");
console.log(namesAllTogether);

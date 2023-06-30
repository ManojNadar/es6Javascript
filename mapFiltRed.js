let companies = [
  {
    name: "Google",
    category: "producBased",
    start: 1981,
    end: 2004,
  },
  {
    name: "Amazon",
    category: "producBased",
    start: 1988,
    end: 2011,
  },
  {
    name: "Paytm",
    category: "serviceBased",
    start: 1995,
    end: 2023,
  },
  {
    name: "Accenture",
    category: "producBased",
    start: 1989,
    end: 2010,
  },
  {
    name: "Wlt",
    category: "serviceBased",
    start: 1999,
    end: 2022,
  },
];

const age = [33, 23, 25, 76, 48, 29];

// for loop

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
//   console.log(companies[i].name);
// }

// forEach // its a synchronous

// companies.forEach((e, i, arr) => {
//   //   console.log(e);
//   //   console.log(i);
//   //   console.log(arr);
// });

// const ages = age.filter((age) => age > 23);
// console.log(ages);

// const company = companies.filter((comp) => comp.category === "serviceBased");
// console.log(company);

// MAP METHOD

// const compDetails = companies.map((company) => {
//   return company;
// });

// console.log(compDetails);
// const compDetails = companies.map(function (comp) {
//   return comp;
// });

// console.log(compDetails);

// SORT

// let sortCompanies = companies.sort((comp1, comp2) =>comp1.start > comp2.start ? 1 : -1);
// console.log(sortCompanies);
// let sortCompanies = companies.sort((comp1, comp2) =>
//   comp1.start < comp2.start ? 1 : -1
// );
// console.log(sortCompanies);

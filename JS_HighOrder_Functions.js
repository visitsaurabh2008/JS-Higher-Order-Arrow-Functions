const companies = [{
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    },
    {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    },
    {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
];



const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Filter Function - ES6 Arrow function.
const canDrink = ages.filter(a => a > 21);
console.log(canDrink);

const retailCompanies = companies.filter(company => company.category.toUpperCase() === 'RETAIL');
console.log(retailCompanies);

const eightyCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
console.log(eightyCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

// Map Function - ES6 Arrow function.
const companyMap = companies.map(company => `${company.name} [${company.start} -  ${company.end}]`);
console.log(companyMap);

const ageMap = ages.map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap)

// Sort Function - ES6 Arrow function.

//Sort Companies by Start Year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

//Sort Ages 
const sortAges = ages.sort((a, b) => a > b ? -1 : 1)
console.log(sortAges);

// Reduce Function - ES6 Arrow function.
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum)

// Get total years of all the companies

const totalYearsofCompanies = companies.reduce((total, company) =>
    total + (company.end - company.start), 0)
console.log(totalYearsofCompanies);

// Implement All the above method in a single line and combine the result.
const combined = ages.map(a => a * 2)
    .filter(a => a >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0)

console.log(combined)
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// Filter and print passing grades using an inline arrow function as an anonymous callback
const passingGrades = grades.filter((grade) => grade >= 70);

console.log(passingGrades);
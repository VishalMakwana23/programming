// * * *
// get average salary department wise
// * * *


const employees = [
  {
    name: "John",
    salary: 50000,
    department: "IT",
  },
  {
    name: "Jane",
    salary: 60000,
    department: "HR",
  },
  {
    name: "Bob",
    salary: 55000,
    department: "IT",
  },
  {
    name: "Sophie",
    salary: 75000,
    department: "HR",
  },
  {
    name: "Mike",
    salary: 65000,
    department: "IT",
  },
  {
    name: "Emily",
    salary: 80000,
    department: "HR",
  },
  {
    name: "David",
    salary: 70000,
    department: "IT",
  },
];

const recur = (arr, ans = []) => {
  if (arr.length) {
    const dept = arr[0].department;
    let salary = 0;
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].department === dept) {
        salary += arr[i].salary;
        count += 1;
        arr.splice(i, 1);
      }
    }
    const average = parseInt(salary / count);
    ans.push({
      department: dept,
      average: average,
    });
    return recur(arr, ans);
  }
  return ans;
};

// console.log("Average Salary Departments", recur(employees));

// * * *
// Second Answer
// * * *


const departmentTotals = employees.reduce((totals, employee) => {
  if (!totals[employee.department]) {
    totals[employee.department] = {
      total: employee.salary,
      count: 1,
      average: 0,
      employee: [employee],
    };
  } else {
    totals[employee.department].total += employee.salary;
    totals[employee.department].count += 1;
    totals[employee.department].average =
      totals[employee.department].total / totals[employee.department].count;
    totals[employee.department].employee = [
      ...totals[employee.department].employee,
      employee,
    ];
  }
  return totals;
}, {});


console.log("Average salary department wise : ", departmentTotals)

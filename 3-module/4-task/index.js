function showSalary(users, year) {
  return users.filter(user => user.age <= year).map(user => (`${user.name}, ${user.balance}`)).join('\n');
}

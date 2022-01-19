const salesList = document.querySelector('#card-contents');

//create element and render employee
function renderEmp(doc){
    let li = document.createElement('li');
    let name = document.createElement('p');
    let role = document.createElement('p');
    let salary = document.createElement('p');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().First;
    role.textContent = doc.data().Role;
    salary.textContent = doc.data().Salary;

    li.appendChild(name);
    li.appendChild(role);
    li.appendChild(salary);
    salesList.appendChild(li);


  
}

//getting data
db.collection('Employees').where('Dep', '==', 'Sales').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      console.log(doc.data());
      renderEmp(doc);
  })
})
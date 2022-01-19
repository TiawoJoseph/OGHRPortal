const form = document.querySelector('#addemp');

//getting data
db.collection('Employees').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      console.log(doc.data());
      
  })
})

// saving data 
addemp.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert("You have just hired an Employee");
    db.collection('Employees').add({
        First: form.FirstName.value,
        Last: form.LastName.value,
        ADD: form.Address.value,
        DOB: form.DOB.value,
        Role: form.Role.value,
        SIN: form.SIN.value,
        Dep: form.department.value,
        Salary: form.Salary.value,
        StartD: form.StartD.value,
        Bonus: form.Bonus.value,
        Benefits: form.Benefits.value,
    });
    form.reset();
})
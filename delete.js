const salesList = document.querySelector('#card-content');

//create element and render employee
function renderEmp(doc){
    let li = document.createElement('li');
    let name = document.createElement('p');
    let role = document.createElement('p');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().First;
    role.textContent = doc.data().Role;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(role);
    li.appendChild(cross);
    salesList.appendChild(li);


    //deleting data
    cross.addEventListener('click', (e) =>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        alert("You have just terminated an Employee");
        db.collection('Employees').doc(id).delete();
    })
}


db.collection('Employees').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      console.log(doc.data());
      renderEmp(doc);
  })
})
const salesList = document.querySelector('#card-content');
const search = document.querySelector('#search');


//create element and render employee
function renderEmp(doc){
    let li = document.createElement('li');
    let name = document.createElement('p');
    let role = document.createElement('p');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().First;
    role.textContent = doc.data().Role;

    li.appendChild(name);
    li.appendChild(role);

    salesList.appendChild(li);
    console.log(li);
}

/*
function ident(doc){
  db.collection('Employees').get().then((snapshot) =>{
    const list = document.getElementsByTagName('li');
    const id = document.querySelector('#data-id');
    console.log(list);
 
  
  })
}
*/
db.collection('Employees').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      console.log(doc.data());
      renderEmp(doc);
  })
})
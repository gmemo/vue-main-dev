const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn'); 

 const database = firebase.database();
 const rootRef = database.ref('users');

 addBtn.addEventListener('click', (e) => {
     e.preventDefault();
     const autoId = rootRef.push().key
     rootRef.child(autoId).set({
         firstName: firstName.value,
         lastName: lastName.value,
         age: age.value
     })
 })


 updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    }

    rootRef.child(userId.value).update(newData);
})

rootRef.orderByKey().on('value', snapshot => {
    console.log (snapshot.val())
})
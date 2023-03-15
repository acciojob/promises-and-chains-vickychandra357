//your JS code here. If required.
function promiseChain(){
    return new Promise((resolve,reject)=>{
        const person = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
          };
          
          if (!person.name || !person.age) {
            reject(new Error("Name and age cannot be empty"));
            return;
          }
        setTimeout(()=>{
            if (person.age >= 18) {
                resolve(person);
              } else {
                reject(new Error(`Oh sorry ${person.name}. You aren't old enough.`));
              }
        },4000);
    })
    .then((person) => {
        return new Promise((resolve, reject) => {
          const { name } = person;
          if (!name) {
            reject(new Error("Name cannot be empty"));
            return;
          }
          resolve(name);
        }); 
      })
      .then((name) => {
        return new Promise((resolve, reject) => {
          if (!name) {
            reject(new Error("Name cannot be empty"));
            return;
          }
          const newObj = { welcomeMessage: `Welcome, ${name}. You can vote.` };
          resolve(newObj);
        });
      })
      .then((newObj) => {
        alert(newObj.welcomeMessage);
      })
      .catch((err) => {
        alert(err.message);
      });
}
// Exercise 27
function studentData(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            const success = true;
            if (success == true){
                resolve ({id:1, name: "John Doe", age: 20})
            }else{
                reject("Failed to fetch student data")
            }

        },2000);
    })
}

studentData()
.then((data ) => console.log("Data received successfully" ,data))
.catch((err) => console.log(err));
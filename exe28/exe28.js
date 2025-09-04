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
async function displayData(){
    try{
        const data = await studentData();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

displayData();
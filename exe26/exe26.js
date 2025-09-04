// Exercise 26
function costumerData(callback){
    setTimeout(() => {
        const data = {name: 'khaalid', amount: 100};
        callback(data)
      },2000);
}
console.log("Starting data analyze please wait a few seconds ...");
costumerData(function(data) {
    console.log(`Costumer: ${data.name}, Amount: ${data.amount}`);
});
console.log("Completed data analyze")



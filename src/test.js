const data = {
    "Person":[
        {
            "name":"Ram",
            "income": 50000,
            "expenditure":{
                "rent":8000,
                "fuel":2000,
                "other":4500
            }
        },
        {
            "name":"Shyam",
            "income": 45000,
            "expenditure":{
                "rent":7000,
                "fuel":3000,
                "other":3500
            }
        }]
}
data.Person.forEach(person => {
    person['total_saving'] = person.income - (person.expenditure.rent + person.expenditure.fuel + person.expenditure.other)
})

let check_saving_value = data.Person.map(x => x.total_saving)
check_saving_value = check_saving_value.reduce((x,y) => {
    return Math.max(x,y)
})

console.log(check_saving_value)
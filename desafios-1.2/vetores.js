let dev ={
    name: "Carlos",
    age: 32,
    technology: [
        {
            name: "C++", 
            specialty: "Desktop"
        },
        {
            name: "Phyton",
            specialty: "Data Science"
        },
        {
            name: "JavaScript",
            specialty: "Web/Mobile"
        }
    ]
};

console.log (`The user ${dev.name} is ${dev.age} years and uses the technology ${dev.technology[0].name} specializing in ${dev.technology[0].specialty} `);
const users = [
    {
        name: "Carlos",
        technologies: [
            "HTML", 
            "CSS"
        ]
    },
    {
        name: "Jasmine", 
        technologies: [
            "JavaScript", 
            "CSS"
        ]
    },
    {
        name: "Tuane", 
        technologies: [
            "HTML", 
            "Node.js"
        ]
    }
];


function checkIfWorksWithCSS (user){
    for (let technology of user.technologies){       
        if (technology == "CSS") return true;
       
    }
        return false;    
}         

for (let i = 0; i<users.length; i++){
    const userWorksCSS = checkIfWorksWithCSS(users[i])

    if (userWorksCSS){
        console.log (`The user ${users[i].name} works with CSS`)
    }
};





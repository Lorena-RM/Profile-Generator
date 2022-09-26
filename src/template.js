const generatefile = (teamArray) => {

    const managerCard = (teamArray) => {
        teamhtml.push(`<div class="card" style="width: 20rem; height: auto;">
            <div class="card-body">
            <h5 class="card-title">${teamArray.name}</h5>
            <p class="card-text">${teamArray.role}</p>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray.id}</li>
                <li class="list-group-item">Email:<a href="mailto:${teamArray.email}"> ${teamArray.email}</a></li>
                <li class="list-group-item">Office number:${teamArray.officeNumber}</li>
            </ul>
        </div>`)
    }

    const engineerCard = (teamArray) => {
        teamhtml.push (`<div class="card" style="width: 20rem; height: auto;">
            <div class="card-body">
            <h5 class="card-title">${teamArray.name}</h5>
            <p class="card-text">${teamArray.role}</p>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray.id}</li>
                <li class="list-group-item">Email:<a href="mailto:${teamArray.email}"> ${teamArray.email}</a></li>
                <li class="list-group-item">Github:<a href="https://github.com/${teamArray.github}"> ${teamArray.github}</a></li>
            </ul>
        </div>`)
    }

    const internCard = (teamArray) => {
        teamhtml.push (`<div class="card" style="width: 20rem; height: auto;">
            <div class="card-body">
            <h5 class="card-title">${teamArray.name}</h5>
            <p class="card-text">${teamArray.role}</p>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray.id}</li>
                <li class="list-group-item">Email:<a href="mailto:${teamArray.email}"> ${teamArray.email}</a></li>
                <li class="list-group-item">School:${teamArray.school}</li>
            </ul>
        </div>`)
    }

    const teamhtml = [];
    for (let index = 0; index < teamArray.length; index++) {
        const employee = teamArray[index];
        if (employee.role === "Manager") {
            managerCard(employee);
        } else if (employee.role === "Engineer"){
            engineerCard(employee);
        } else if (employee.role === "Intern"){
            internCard(employee);
        }        
    }
    return teamhtml.join("")

}

module.exports = (teamArray) => {
    return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header class="jumbotron">
            My Team
        </header>
        <div class="cards">
        ${generatefile(teamArray)}
        </div>
    </body>
    </html>`
}
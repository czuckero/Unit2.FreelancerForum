// Here are names, occupations, and prices of potential freelancers
const names = ["Dr. Oblong", "Uncle Barry", "Sir Mountaintop", "Dr. Raphael", "Professor Overlord Williams"];
const occupations = ["Teacher", "Programmer", "Gardener", "Writer", "Driver", "Gamer"];

// Array of initial freelancers
const freelancers = [
    { name: "Marty Fletcher", occupation: "Writer", startingPrice: 25 },
    { name: "Olin Feebstocking", occupation: "Programmer", startingPrice: 50 },
    { name: "Dr. Dunkmeister", occupation: "Teacher", startingPrice: 45 },
  ];
  
// Function to render the intial freelancers into the table
  renderInitialFreelancers();

  function renderInitialFreelancers() {
    // Selecting the freelancers id in the table
    const initialFreelancers = document.querySelector("#freelancers");
    // Iterating through the freelancers object array to display each freelancer property in the table
    const initialFreelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("tr");
        console.log(element);
        element.innerHTML = `<td>${freelancer.name}</td> <td>${freelancer.occupation}</td> <td>${freelancer.startingPrice}</td>`;
        return element;
    });
    initialFreelancers.replaceChildren(...initialFreelancerElements);

    const avg = document.querySelector("#avg"); 

}

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 1;
    console.log(randomPrice);
    freelancers.push({name: randomName, occupation: randomOccupation, startingPrice: randomPrice});
    
    renderInitialFreelancers();
    averagePriceCalculator();
}

function averagePriceCalculator() {
    const avgPrice = document.querySelector("#avg");
    const averagePrice = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0) / freelancers.length;
    console.log(averagePrice);
    avgPrice.innerHTML = `<div>${averagePrice}</div>`;
}

setInterval(generateRandomFreelancer, 5000);

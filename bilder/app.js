const url = "https://api.spacexdata.com/v4/launches";
const next_launch_container = document.querySelector(".launch_1");

async function next_launches() {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        next_launch_container.innerHTML = "";
  
        for(let i = 0; i < results.length; i++) {
            next_launch_container.innerHTML += `  <h4>${results[i].name}</h4>
                                               
                                               `;
  
    } 
  }
  
  next_launches();






  
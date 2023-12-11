const button=document.getElementById("btn");
const jokecom = document.querySelector("#joke")

const apiKey="NRtfo0fnEPvklOZrlzgXmQ==aFA5helouhwInRVN";

const options ={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};

const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    jokecom.innerText="Updating.....";
    const response= await fetch(apiUrl,options);
    const data= await response.json();
  
     jokecom.innerText=data[0].joke;
}


button.addEventListener("click",getJoke);
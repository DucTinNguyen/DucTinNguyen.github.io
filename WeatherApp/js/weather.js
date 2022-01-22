const address = document.getElementById("address")
const nameAdd = document.querySelector(".name")
const date = document.querySelector(".date-time")

const temperature = document.querySelector(".temperature__text")
const status = document.querySelector(".weather__status")
const height = document.querySelector(".height")
const humidity = document.querySelector(".humidity")
const windy = document.querySelector(".wind")
const container = document.querySelector(".container")
const weather__body = document.querySelector(".weather__body")

//Function: Get data from API weather  
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667'

const fetchData = async (input) => {
    try {
        const res = await axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`,
            method: 'GET'
        })
       return res.data;
    } catch (error) {
        console.log(error)
    }
}

// function: Display UI
const ShowUI = (data) => {
    
    console.log(data)
    
    nameAdd.innerHTML = data.name + "," +data.sys.country
    date.innerHTML = new Date().toLocaleString()
    temperature.innerHTML = data.main.temp
    status.innerHTML = data.weather[0].main
    height.innerHTML = data.clouds.all + "(m)";
    windy.innerHTML = data.wind.speed +"(m/s)"
    humidity.innerHTML = data.main.humidity +"(%)"

    if(data.main.temp > 18)
    {
        container.classList.add("hot")
        weather__body.classList.add("hot")
    }
}
//Function:Event
const Search = () => {
    address.addEventListener("keyup", (e) => {
        if(e.keyCode == 13)
        {
            if(address.value === "") {
                alert("Please enter");
            }
            else
            {
                fetchData(address.value).then((res) => {
                    ShowUI(res);
                })
            }
        }
    })
}
Search()

//Initial: Show UI Ha Noi
fetchData("HaNoi").then((res)=> {
    ShowUI(res);
})


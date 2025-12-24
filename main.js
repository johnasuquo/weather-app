
const display = document.querySelector('.display');
const button = document.querySelector('.check');
const situ = document.querySelector('.situation');

button.addEventListener('click', ()=>{

    const address = `9e7d73f4ab6427921f2d4ed7c4f53387`;

    const input = document.querySelector('.input').value;


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${address}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        display.innerHTML = `
        <div>
        <h2> City/Town: ${input} </h2>
        <p>Temperature:  ${data.main.temp}</p>
        <p> Feels like:  ${data.main.feels_like} </p>
        <p> Humidity:  ${data.main.humidity} </p>
        <p>Weather:  ${data.weather[0].description}</p>
        </div>`;

        if (Number(data.main.temp) < 0) {
           situ.innerHTML = 'Freezing ❄🧊';
        }
        else if (Number(data.main.temp) >=1 && Number(data.main.temp) < 11) {
            situ.innerHTML = 'Cold 🥶'
        }
        else if (Number(data.main.temp) >=11 && Number(data.main.temp) < 16) {
            situ.innerHTML = 'Cool 💧'
        }
        else if (Number(data.main.temp) >=16 && Number(data.main.temp) < 20) {
            situ.innerHTML = 'Mild 🙂'
        }
        else if (Number(data.main.temp) >=20 && Number(data.main.temp) < 26) {
            situ.innerHTML = 'Comfortable 😎'
        }
        else if (Number(data.main.temp) >=26 && Number(data.main.temp) < 31) {
            situ.innerHTML = 'Warm 😃'
        }
        else if (Number(data.main.temp) >=31 && Number(data.main.temp) < 36) {
            situ.innerHTML = 'Hot 😰'
        }
        else if (Number(data.main.temp) >=36 && Number(data.main.temp) <= 40) {
            situ.innerHTML = 'Very hot 🥵'
        }
        else  {
            situ.innerHTML = 'Extremely hot 🔥'
        }

        if (Number(data.main.humidity) < 30) {
            situ.innerHTML += ' and Dry 🏜️';
        }
        else if (Number(data.main.humidity) >=30 && Number(data.main.humidity) < 60) {
            situ.innerHTML += ' and Normal 🌤️';
        }
        else if (Number(data.main.humidity) >=60 && Number(data.main.humidity) < 80) {
            situ.innerHTML += ' and Humid 💧';
        }
        else if (Number(data.main.humidity) >=80 && Number(data.main.humidity) <= 92) {
            situ.innerHTML += ' and Very Humid 💦';
        }
        else if(Number(data.main.humidity) > 92) {
            situ.innerHTML += '  Rain is very likely 🌧️';
        } 
    })
    .catch(error => { display.innerHTML = `City not found, please try again...`;
    situ.innerHTML = ``;
 } )
}
)

const cityForm = document.querySelector('form');

// updating ui
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

    const { cityDetail, weather } = data;

    // update details card
    details.innerHTML = 
    `
        <h4 class="my-3 animate__animated animate__fadeInDown animate__delay">${cityDetail.EnglishName}</h4>

        <div class="my-3 animate__animated animate__fadeInUp animate_delay-1s">
           ${weather.WeatherText}
        </div>

        <div class="display-4 my-4 mb-2 animate__animated animate__pulse animate__delay-1s">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>

    `;

    // update night and day image and icon image

    const iconSrc = `/img/icons/${weather.WeatherIcon}.svg`;

    if(!icon.classList.contains('animate__animated animate__zoomInDown')){
        icon.classList.add('animate__animated', 'animate__zoomInDown');
    }

    icon.setAttribute('src', iconSrc);
    


    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = '/re.jpg';
    } else{
        timeSrc = '/img/night.svg';
    }

    time.setAttribute('src', timeSrc);

    // remove d-none class after fetching all data

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};


// update city on the ui when user types new city

const updateCity = async (city) => {

    const cityDetail = await getCity(city);

    const weather = await getWeather(cityDetail.Key);

    return { cityDetail, weather };

}



cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update ui with new city
    updateCity(city)
        .then((data) => {
            // console.log(data);
            updateUI(data);
            
        })
        .catch(err => console.log(err));

})


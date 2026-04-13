let weatherData = {
    'Москва': {
        today: {
            temp: '-2°', desc: 'облачно', humidity: '78%', wind: '4 м/с', asset: '☁️'
        },
        week: [
            { day: 'ПН', temp: '-2°', desc: 'облачно', asset: '☁️' },
            { day: 'ВТ', temp: '0°', desc: 'пасмурно', asset: '🌨️' },
            { day: 'СР', temp: '+2°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-1°', desc: 'облачно', asset: '☁️' },
            { day: 'ПТ', temp: '0°', desc: 'снег', asset: '❄️' },
            { day: 'СБ', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '+4°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Санкт-Петербург': {
        today: {
            temp: '-4°', desc: 'снег', humidity: '79%', wind: '8 м/с', asset: '❄️'
        },
        week: [
            { day: 'ПН', temp: '-6°', desc: 'снег', asset: '❄️' },
            { day: 'ВТ', temp: '-4°', desc: 'облачно', asset: '☁️' },
            { day: 'СР', temp: '0°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-8°', desc: 'пасмурно', asset: '🌨️' },
            { day: 'ПТ', temp: '+1°', desc: 'облачно', asset: '☁️' },
            { day: 'СБ', temp: '-4°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-1°', desc: 'снег', asset: '❄️' },
        ]
    },
    'Петрозаводск': {
        today: {
            temp: '-6°', desc: 'снегопад', humidity: '85%', wind: '6 м/с', asset: '🌨️'
        },
        week: [
            { day: 'ПН', temp: '-6°', desc: 'сильный снег', asset: '🌨️' },
            { day: 'ВТ', temp: '-5°', desc: 'снег', asset: '❄️' },
            { day: 'СР', temp: '-4°', desc: 'облачно', asset: '☁️' },
            { day: 'ЧТ', temp: '-6°', desc: 'снег', asset: '❄️' },
            { day: 'ПТ', temp: '-7°', desc: 'снегопад', asset: '🌨️' },
            { day: 'СБ', temp: '-5°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-4°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Нижний Новгород': {
        today: {
            temp: '-3°', desc: 'облачно', humidity: '76%', wind: '4 м/с', asset: '☁️'
        },
        week: [
            { day: 'ПН', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВТ', temp: '-2°', desc: 'солнечно', asset: '☀️' },
            { day: 'СР', temp: '-1°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-2°', desc: 'облачно', asset: '☁️' },
            { day: 'ПТ', temp: '-4°', desc: 'небольшой снег', asset: '🌨️' },
            { day: 'СБ', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-1°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Казань': {
        today: {
            temp: '-4°', desc: 'пасмурно', humidity: '79%', wind: '5 м/с', asset: '☁️'
        },
        week: [
            { day: 'ПН', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВТ', temp: '-2°', desc: 'солнечно', asset: '☀️' },
            { day: 'СР', temp: '-1°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-2°', desc: 'облачно', asset: '☁️' },
            { day: 'ПТ', temp: '-4°', desc: 'небольшой снег', asset: '🌨️' },
            { day: 'СБ', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-1°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Екатеринбург': {
        today: {
            temp: '-7°', desc: 'морозно', humidity: '72%', wind: '3 м/с', asset: '❄️'
        },
        week: [
            { day: 'ПН', temp: '-7°', desc: 'ясно', asset: '☀️' },
            { day: 'ВТ', temp: '-6°', desc: 'солнечно', asset: '☀️' },
            { day: 'СР', temp: '-5°', desc: 'облачно', asset: '☁️' },
            { day: 'ЧТ', temp: '-6°', desc: 'снег', asset: '❄️' },
            { day: 'ПТ', temp: '-8°', desc: 'морозно', asset: '❄️' },
            { day: 'СБ', temp: '-7°', desc: 'ясно', asset: '☀️' },
            { day: 'ВС', temp: '-5°', desc: 'солнечно', asset: '☀️' },
        ]
    },
};

function loadAndDisplayWeather() {
    let savedCity = localStorage.getItem('selected-city');
    if (!savedCity) {
        savedCity = 'Москва';
    }
    updateTodayWeather(savedCity);
}

function loadAndDisplayWeek() {
    let savedCity = localStorage.getItem('selected-city');
    if (!savedCity) {
        savedCity = 'Москва';
    }
    showWeek(savedCity);
}

function updateTodayWeather(city) {
    let data = weatherData[city];
    if (!data) return;
    
    const cityDisplay = document.getElementById('city-display');
    const currentTemp = document.getElementById('current-temp');
    const currentDesc = document.getElementById('current-desc');
    const weatherIcon = document.getElementById('weather-icon');
    
    if (cityDisplay) cityDisplay.textContent = city;
    if (currentTemp) currentTemp.textContent = data.today.temp;
    if (currentDesc) currentDesc.textContent = data.today.desc;
    if (weatherIcon) weatherIcon.textContent = data.today.asset;
}

function showWeek(city) {
    let data = weatherData[city];
    if (!data) return;
    
    const forecastDiv = document.getElementById('week-forecast');
    if (!forecastDiv) return;
    
    let html = '';
    data.week.forEach(day => {
        html += `
            <div class="forecast-item">
                <span class="forecast-day">${day.day}</span>
                <span class="forecast-icon">${day.asset}</span>
                <span class="forecast-desc">${day.desc}</span>
                <span class="forecast-temp">${day.temp}</span>
            </div>
        `;
    });
    forecastDiv.innerHTML = html;
}

function setCityAndSave(city) {
    localStorage.setItem('selected-city', city);
    
    const messageDiv = document.getElementById('settings-message');
    if (messageDiv) {
        messageDiv.textContent = `✅ Город изменен на ${city}`;
        messageDiv.style.color = 'green';
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 2000);
    }
}

is_Cels = true 
function solvetemp(tempval, toCelsius = true) {
    let temp = parseInt(tempval);
    if (!toCelsius) { // Если сейчас градусы Цельсия
        return Math.round(temp*1.8 + 32);
    } else { // Если градусы Фаренгейта
        return Math.round((temp - 32) / 1.8);
    }
}

function displaytemp(tempval) {
    let temp = parseInt(tempval);
    if (!is_Cels) {
        let farenheit = solvetemp(temp, false);
        return farenheit + "°F"
    } else {
        return temp + '°C'
    }
}

function loadSettings() {
    let savedUnit = localStorage.getItem('temperature-unit');
    if (savedUnit === 'fahrenheit') {
        isCelsius = false;
    } else {
        isCelsius = true;
    }
    updateUnitButtons();
}

function setUnit(unit) {
    if (unit === 'fahrenheit') {
        isCelsius = false;
        localStorage.setItem('temperature-unit', 'fahrenheit');
    } else {
        isCelsius = true;
        localStorage.setItem('temperature-unit', 'celsius');
    }
    const messageDiv = document.getElementById('settings-message');
    if (messageDiv) {
        messageDiv.textContent = `✅ Единицы изменены на ${unit === 'fahrenheit' ? '°F' : '°C'}`;
        messageDiv.style.color = 'green';
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 2000);
    }
    updateUnitButtons();
    let savedCity = localStorage.getItem('selected-city');
    if (savedCity) {
        if (document.getElementById('today-weather')) {
            updateTodayWeather(savedCity);
        }
        if (document.getElementById('week-forecast')) {
            showWeek(savedCity);
        }
    }
}

function updateUnitButtons() {
    const celsiusBtn = document.getElementById('cels-btn');
    const fahrenheitBtn = document.getElementById('fahrenheit-btn');
}

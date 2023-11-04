<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    class="auto-input"
    placeholder="Enter City Here"
    :filter-option="filterOption"
    @select="onSelect"
  />
  <a-card hoverable class="card">
    <template #cover>
      <img alt="example" src="../icons/Clouds.svg" />
      <p>16 C</p>
      <p>Cloudy</p>
    </template>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { cities } from "../stores/CitiesInfo.js";

interface Option {
  value: string;
}

const value = ref("");

const filterOption = (input: string, option: Option) => {
  return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};

let cityNames = cities.map((c) => c.city);
let options: { value: string }[] = cityNames.map((city) => ({ value: city }));

function weather(weatherCode: any) {
  let icon;
  let weather;
  switch (weatherCode) {
    case 0:
      var d = new Date();
      const hour = d.getHours();
      if (hour >= 6 && hour <= 19) {
        icon = "Clear-Day.svg";
      } else {
        icon = "Clear-Night.svg";
      }
      weather = "Clear";
      break;
    case 1:
    case 2:
    case 3:
    case 45:
    case 48:
      icon = "Clouds.svg";
      weather = "Cloudy";
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      icon = "Drizzle.svg";
      weather = "Drizzle";
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      icon = "Rain.svg";
      weather = "Rainy";
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      icon = "Snow.svg";
      weather = "Snowy";
      break;
    case 95:
    case 96:
    case 99:
      icon = "Thunderstorm.svg";
      weather = "Thunderstorm";
      break;
    default:
      icon = `Atmosphere.png`;
      weather = "Atmosphere";
  }
  console.log(icon);
  return { icon, weather };
}

async function getWeather(lat: number, lng: number) {
  let response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode&timezone=auto&forecast_days=1`
  );
  let data = await response.json();
  const temperature = data.current.temperature_2m;
  const weatherCode = data.current.weathercode;

  weather(weatherCode);
  console.log(temperature);

  return temperature;
}

function getLatLng(value: string) {
  interface selectedCity {
    city: string;
    lat: number;
    lng: number;
    country: string;
    iso2: string;
    admin_name: string;
    capital: string;
    population: string;
    population_proper: string;
  }

  const selectedCity = cities.find((c) => {
    return c.city === value;
  });

  if (selectedCity) {
    return {
      lat: selectedCity.lat,
      lng: selectedCity.lng,
    };
  }
  return null;
}

const onSelect = (value: string) => {
  // const { lat, lng } = getLatLng(value);
  // getWeather(lat, lng);
};
</script>

<style scoped>
.auto-input {
  width: 200px;
}

.card {
  width: 200px;
  margin: auto;
  margin-top: 20px;
  font-size: 25px;
}

@media screen and (max-width: 376px) {
  .card {
    width: 100px;
    font-size: 15px;
  }
  .auto-input {
    width: 100px;
  }
}
</style>
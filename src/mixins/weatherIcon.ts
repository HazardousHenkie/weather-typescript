// this component is used in every vue component so it's being set up as a plugin
const weatherIcon = {
  methods: {
    //switch to show an icon when there is a specific weather state
    weatherIcon: function(weatherState: string) {
      switch (weatherState) {
        case 'Clear':
          return 'sun'
        case 'Clouds':
          return 'cloud'
        case 'Rain':
          return 'cloud-showers-heavy'
        case 'Thunderstorm':
          return 'bolt'
        case 'Snow':
          return 'cloud-meatball'
        case 'Drizzle':
          return 'cloud-rain'
        case 'Smoke':
        case 'Ash':
        case 'Sand':
        case 'Haze':
        case 'Fog':
        case 'Dust':
        case 'Mist':
          return 'smog'
        case 'Tornado':
        case 'Wind':
          return 'wind'
        default:
          return 'question'
      }
    }
  }
}

const WeatherIcon = {
  install(Vue: any) {
    Vue.mixin(weatherIcon)
  }
}

export default WeatherIcon

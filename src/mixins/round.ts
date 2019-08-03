// this component is used in every vue component so set it's being set up as a plugin
const round = {
  //round up or down numbers
  filters: {
    round: function(value: number) {
      if (!value) {
        return ''
      }

      return Math.round(value)
    }
  }
}

const Round = {
  install(Vue: any) {
    Vue.mixin(round)
  }
}

export default Round

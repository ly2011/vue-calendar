import Vue from 'vue'
import { VTooltip } from 'v-tooltip'
import Calendar from './views/index'

VTooltip.options.autoHide = false
Vue.directive('tooltip', VTooltip)

Calendar.install = function (Vue) {
  Vue.component(Calendar.name, Calendar)
}

export default Calendar

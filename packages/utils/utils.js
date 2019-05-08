import { getDaysInMonth } from 'ittool'

// _.getDaysInMonth(2019, 2)

/**
 * @desc 计算指定月份第一天星期几(0-6)
 * @param {Number} year 年份
 * @param {Number} month 月份
 */
export const getFirstDayOfWeek = (year, month) => {
  year = +year
  month = +month
  return new Date(Date.UTC(year, month - 1, 1)).getDay()
}

/**
 * @desc 计算指定日期星期几(0-6)
 * @param {Number} year 年份
 * @param {Number} month 月份
 * @param {Number} date 日期
 */
export const getDayOfWeek = (year, month, date) => {
  year = +year
  month = +month
  date = +date
  return new Date(Date.UTC(year, month - 1, date)).getDay()
}

/**
 * @desc 生成空布局
 * @param {Number} year
 * @param {Number} month
 */
export const calculateEmptyGrids = (year, month) => {
  let firstDayOfWeek = getFirstDayOfWeek(year, month)
  let emptyGrids = []
  if (firstDayOfWeek > 0) {
    // 由于js的日期是从0算起,0:星期天,所以这里减去1
    // firstDayOfWeek = firstDayOfWeek - 1
    for (let i = 0; i < firstDayOfWeek; i++) {
      emptyGrids.push(i)
    }
    return {
      hasEmptyGrid: true,
      emptyGrids
    }
  } else {
    return {
      hasEmptyGrid: false,
      emptyGrids: []
    }
  }
}
/**
 * https://github.com/treadpit/wx_calendar/blob/master/src/template/calendar/index.js
 * @desc 计算上月应占的格子
 * @param {Number} year
 * @param {Number} month
 */
export const calculatePrevMonthGrids = (year, month) => {
  let emptyGrids = []
  const prevMonthDays = getDaysInMonth(year, month - 1)
  const firstDayOfWeek = getFirstDayOfWeek(year, month)
  if (firstDayOfWeek > 0) {
    let len = prevMonthDays - firstDayOfWeek
    for (let i = prevMonthDays; i > len; i--) {
      emptyGrids.push(i)
    }
    return emptyGrids.reverse()
  } else {
    return null
  }
}

/**
 * @desc 计算下月应占的格子
 * @param {Number} year 年份
 * @param {Number} month 月份
 */
export const calculateNextMonthGrids = (year, month) => {
  let lastEmptyGrids = []
  const thisMonthDays = getDaysInMonth(year, month)
  const lastDayOfWeek = getDayOfWeek(year, month, thisMonthDays)
  if (+lastDayOfWeek !== 6) {
    const len = 7 - (lastDayOfWeek + 1)
    for (let i = 1; i <= len; i++) {
      lastEmptyGrids.push(i)
    }
    return lastEmptyGrids
  } else {
    return null
  }
}

/**
 * @desc 设置日历面板数据
 * @param {Number} year 年份
 * @param {Number} month 月份
 */
export const calculateDays = (year, month) => {
  let days = []
  const thisMonthDays = getDaysInMonth(year, month)
  for (let i = 1; i <= thisMonthDays; i++) {
    days.push({
      year,
      month,
      day: i,
      week: getDayOfWeek(year, month, i),
      choosed: false
    })
  }
  return days
}

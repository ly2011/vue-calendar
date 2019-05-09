<template>
  <div class="calendar">
    <div class="calendar-header">
      <div class="calendar-year">
        <span @click="go(currentYear - 1, currentMonth)">
          <a href="javascript:" class="year-prev prev-icon"></a>
        </span>
        <a href="javascript:" class="calendar-year-txt calendar-title">{{currentYear || '--'}}</a>
        <span @click="go(currentYear + 1, currentMonth)" class="calendar-header-right-arrow">
          <a href="javascript:" class="year-next next-icon"></a>
        </span>
      </div>
      <div class="calendar-month">
        <span @click="prev">
          <a href="javascript:" class="month-prev prev-icon"></a>
        </span>
        <a href="javascript:" class="calendar-month-txt calendar-title">{{currentMonth || '--'}}</a>
        <span @click="next" class="calendar-header-right-arrow">
          <a href="javascript:" class="month-next next-icon"></a>
        </span>
      </div>
    </div>
    <div class="calendar-content">
      <!-- <div class="calendar-day"></div> -->
      <ul class="calendar-label">
        <li v-for="(item, index) in tableHead" :key="index">{{item.title}}</li>
      </ul>
      <ul class="calendar-num">
        <template v-if="empytGrids">
          <li v-for="(item, index) in empytGrids" :key="'empytGrids' + index">
            <span class="gray">{{item}}</span>
          </li>
        </template>
        <li v-for="(item, index) in dateArr" :key="index" @click="tapDayItem(item)">
          <template v-if="item.status">
            <span class="badge" :class="item.choosed ? 'current': ''" v-tooltip="item.msg">
              {{item.day}}
              <sup class="badge__content is-fixed is-dot"></sup>
            </span>
          </template>
          <span v-else :class="item.choosed ? 'current': ''">{{item.day}}</span>
        </li>
        <template v-if="lastEmptyGrids">
          <li v-for="(item, index) in lastEmptyGrids" :key="'lastEmptyGrids' + index">
            <span class="gray">{{item}}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { calculateDays, calculatePrevMonthGrids, calculateNextMonthGrids } from '~/utils/utils.js'
export default {
  name: 'calendar',
  data () {
    return {
      dateArr: [], // 当前月数据
      newDate: '', // 当前的日期
      currentYear: '', // 当前的年数
      currentMonth: '', // 当前月份
      tableHead: [
        { title: '日' },
        { title: '一' },
        { title: '二' },
        { title: '三' },
        { title: '四' },
        { title: '五' },
        { title: '六' }
      ],
      // tableHead: [
      //   { title: 'Sun' },
      //   { title: 'Mon' },
      //   { title: 'Tues' },
      //   { title: 'Wed' },
      //   { title: 'Thur' },
      //   { title: 'Fri' },
      //   { title: 'Sat' },
      // ],
      // hasEmptyGrid: false,
      multi: false, // 是否支持多选
      empytGrids: null, // 上月应占的格子
      lastEmptyGrids: null // 下月应占的格子
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      if (!this.newDate) { this.newDate = new Date() }
      this.currentYear = this.newDate.getFullYear()
      this.currentMonth = this.newDate.getMonth() + 1
      this.render(this.currentYear, this.currentMonth)
    },
    // 重新渲染数据
    render (year, month, force = false) {
      const days = calculateDays(year, month)
      this.dateArr = days
      // const { hasEmptyGrid, emptyGrids } = calculateEmptyGrids(this.currentYear, this.currentMonth)
      // this.hasEmptyGrid = hasEmptyGrid
      // this.empytGrids = emptyGrids
      const emptyGrids = calculatePrevMonthGrids(year, month)
      const lastEmptyGrids = calculateNextMonthGrids(year, month)
      this.empytGrids = emptyGrids
      this.lastEmptyGrids = lastEmptyGrids

      this.getTaskInfo() // TODO:
    },
    go (year, month) {
      this.render(year, month, true)
      this.currentYear = year
      this.currentMonth = month
    },
    prev () {
      let currentMonth = this.currentMonth - 1
      let currentYear = this.currentYear
      if (currentMonth < 1) {
        currentYear = currentYear - 1
        currentMonth = 12
      }
      this.render(currentYear, currentMonth, true)
      this.currentYear = currentYear
      this.currentMonth = currentMonth
    },
    next () {
      let currentMonth = this.currentMonth + 1
      let currentYear = this.currentYear
      if (currentMonth > 12) {
        currentYear = currentYear + 1
        currentMonth = 1
      }
      this.render(currentYear, currentMonth, true)
      this.currentYear = currentYear
      this.currentMonth = currentMonth
    },
    // 点击日期
    tapDayItem (item) {
      if (!this.multi) { // 单选
        this.dateArr.forEach(item => {
          item.choosed = false
        })
      }
      item.choosed = !item.choosed
    },
    getTaskInfo () {
      const taskInfo = [
        { day: 8, status: 1, msg: '亲，您的任务快到期了' },
        { day: 9, status: 1, msg: '亲，母亲节快到了，礼物准备好了吗？' },
        { day: 10, status: 1, msg: '亲，教节快到了，礼物准备好了吗？' }
      ]
      this.dateArr = this.dateArr.map(dateItem => ({ ...dateItem, ...taskInfo.find(resItem => resItem.day === dateItem.day) }))
      // console.log(this.dateArr)
    }
  }
}
</script>
<style lang="scss">
$fontSize: 16px;
$bgColor: #fff;
$fontColor: #333;
$fontTitleColor: #333;
$fontFamily: "PingFangSC-Regular", "Microsoft YaHei", Helvetica;
.calendar {
  font-size: $fontSize;
  background: $bgColor;
  box-sizing: border-box;
  width: 100%;
  font-family: $fontFamily;

  a {
    text-decoration: none;
    tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .prev-icon,
  .next-icon {
    position: absolute;
    left: 0;
    top: 15px;
    width: 12px;
    height: 12px;
    border: 1px solid #c0c0c0;
    border-radius: 0;
    border-top: none;
    border-right: none;
    transform: rotate(45deg);
    margin-left: 15px;
    line-height: 40px;
  }

  .next-icon {
    transform: rotate(-135deg);
    left: auto;
    top: 14px;
    right: 15px;
  }

  .calendar-header {
    line-height: 40px;
    font-size: 1.2em;
    overflow: hidden;
    display: flex;
    // flex-basis: 50%;
    & > {
      text-align: center;
      overflow: hidden;
    }
    .calendar-year,
    .calendar-month {
      position: relative;
      width: 50%;
      display: flex;
      align-content: space-between;

      > span {
        position: relative;
        display: inline-block;
        width: 24px;
        height: 24px;
        padding: 8px;
      }

      .calendar-title {
        flex: 1;
        margin: 0 12%;
        color: #333;
      }
    }
  }

  .calendar-label {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    li {
      flex: 1;
      height: 32px;
      line-height: 32px;
      font-size: $fontSize;
      color: $fontColor;
      text-align: center;
      list-style: none;
    }
  }

  .calendar-num {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: calc(100% / 7);
      font-size: $fontSize;
      color: $fontColor;
      text-align: center;
      list-style: none;

      span {
        position: relative;
        vertical-align: middle;
        display: inline-block;
        width: 26px;
        height: 26px;
        line-height: 26px;
      }
    }

    .gray {
      color: #b9bece;
    }
    .current {
      border-radius: 50%;
      color: #fff;
      background-color: #ff9900;
    }

    .badge__content {
      background-color: #f56c6c;
      border-radius: 10px;
      color: #fff;
      display: inline-block;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      padding: 0 6px;
      text-align: center;
      white-space: nowrap;
      border: 1px solid #fff;
      &.is-fixed.is-dot {
        top: 8px;
        right: 5px;
      }
      &.is-fixed {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(-50%) translateX(100%);
      }
      &.is-dot {
        height: 8px;
        width: 8px;
        padding: 0;
        right: 0;
        border-radius: 50%;
      }
    }
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;
  font-size: $fontSize;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 5px;
    padding: 3px 5px 2px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>

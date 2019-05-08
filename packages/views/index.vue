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
          <span :class="item.choosed ? 'current': ''">{{item.day}}</span>
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
  }
}
</style>

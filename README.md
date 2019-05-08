# vue-calendar(移动端)

## 思路分析

要实现一个简单的移动端日历，需要先知道几个值：

- 每月有多少天

- 每月第一天、最后一天各星期几

- 每月1号之前应有多少天属于上一个月

- 每月最后一天之后应有多少天属于下一个月

> 每月最多31天，最少28天

## 安装
```
yarn install
```

### 启动开发环境
```
yarn run serve
```

### 生成库文件
```
yarn run lib
```

## 效果图

![](https://raw.githubusercontent.com/treadpit/wx_calendar/reconstruction/screenshot/calendar-example.png)

## 参考文档

1. [https://github.com/treadpit/wx_calendar](https://github.com/treadpit/wx_calendar)
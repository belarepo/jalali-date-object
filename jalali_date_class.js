class JalaliDate {
  // List of leap years
  static leapYearsSet = new Set([
    1300, 1304, 1308, 1313, 1317, 1321, 1325, 1329, 1333, 1337, 1341, 1346,
    1350, 1354, 1358, 1362, 1366, 1370, 1375, 1379, 1383, 1387, 1391, 1395,
    1399, 1403, 1408, 1412, 1416, 1420, 1424, 1428, 1432, 1436, 1441, 1445,
    1449, 1453, 1457, 1461, 1465, 1469, 1473, 1478, 1482, 1486, 1490, 1494,
    1498,
  ]);
  static monthNames = {
    1: 'فروردین',
    2: 'اردیبهشت',
    3: 'خرداد',
    4: 'تیر',
    5: 'مرداد',
    6: 'شهریور',
    7: 'مهر',
    8: 'آبان',
    9: 'آذر',
    10: 'دی',
    11: 'بهمن',
    12: 'اسفند',
  };

  get dateString() {
    if (this._day == undefined || this._month || this._year) {
      return 'no date found';
    }
    return this._day + '/' + this._month + '/' + this._year;
  }

  set dateString(date) {
    date = date.split('/');
    this._day = x[0] * 1;
    this._month = x[1] * 1;
    this._year = x[2] * 1;
  }

  get day() {
    return this._day;
  }
  set day(x) {
    this._day = x;
  }
  get month() {
    return this._month;
  }
  set month(x) {
    this._month = x;
  }
  get year() {
    return this._year;
  }
  set year(x) {
    this._year = x;
  }

  monthLength() {
    if (this._month <= 6 && this._month >= 1) {
      return 31;
    }
    if (this._month <= 11 && this._month >= 7) {
      return 30;
    }
    if (this._month == 12 && JalaliDate.isLeapYear(this._year)) {
      return 30;
    }
    return 29;
  }

  monthName() {
    return JalaliDate.monthNames[this._month];
  }

  nextMonth() {
    if (this.month == 12) {
      this.year += 1;
      this.month = 1;
    } else {
      this.month += 1;
    }
  }

  prevMonth() {
    if (this.month == 1) {
      this.year -= 1;
      this.month = 12;
    } else {
      this.month -= 1;
    }
  }

  weekday() {
    let d = 1;
    for (let i = 1300; i < this._year; i++) {
      d += JalaliDate.isLeapYear(i) ? 2 : 1;
    }
    for (let i = 1; i < this._month; i++) {
      if (i >= 1 && i <= 6) {
        d += 31;
      }
      if (i >= 7 && i <= 11) {
        d += 30;
      }
      if (i == 12 && JalaliDate.isLeapYear(this._year)) {
        d += 30;
      }
      if (i == 12 && !JalaliDate.isLeapYear(this._year)) {
        d += 29;
      }
    }
    d += this._day;
    return d % 7;
  }

  static isLeapYear(year) {
    return JalaliDate.leapYearsSet.has(year);
  }
}

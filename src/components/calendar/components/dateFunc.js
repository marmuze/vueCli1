
import XDate from 'xdate';

let dateFunc = {
  getMonthViewStartDate (date, firstDay) {
    firstDay = parseInt(firstDay);
    let start = date? new XDate(date):new XDate();
    let startOfMonth = new XDate (start.setDate(1));

    start.addDays(-startOfMonth.getDay());

    if (startOfMonth.getDay() < firstDay) {
      start.addDays(-7);
    }

    start.addDays(firstDay);

    return start;
  },
  getMonthViewEndDate (date,firstDay) {
    return this.getMonthViewStartDate(date,firstDay).addMonths(6);
  }
};

export default dateFunc;

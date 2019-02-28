import moment from 'moment';

export const diffDates = (fromDate, untilDate) => {
  let diff = ' (';
  let years = 0;
  if (untilDate) {
    years = moment(untilDate).diff(fromDate, 'years');
    if (years === 0) {
      return diff + moment(untilDate).diff(fromDate, 'months') + ' months)';
    }
  } else {
    return '';
  }
  diff = diff + years + ' years)';
  return diff;
};

export const dates = (fromDate, untilDate, finishDate) => {
  if (finishDate) return moment(finishDate).format('YYYY');
  let dates = moment(fromDate).format('MMM YYYY');
  if (untilDate) {
    dates = dates + ' - ' + moment(untilDate).format('MMM YYYY');
  } else {
    dates = dates + ' - Present';
  }
  return dates;
};

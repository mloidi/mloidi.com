import moment from 'moment';

export const job = 'job';
export const study = 'study';
export const course = 'course';
export const project = 'project';

export const diffDates = (fromDate, untilDate) => {
  let years = moment(untilDate ? untilDate : new Date()).diff(
    fromDate,
    'years'
  );
  let months = moment(untilDate ? untilDate : new Date()).diff(
    fromDate,
    'months'
  );

  if (months > 12) {
    months = Math.floor(months % 12);
  }

  if (years === 0) {
    return `${months} months`;
  } else {
    return `${years} years and ${months} months`;
  }
};

export const dates = (fromDate, untilDate, finishDate) => {
  if (finishDate) return moment(finishDate).format('MMM YYYY');
  let dates = moment(fromDate).format('MMM YYYY');
  if (untilDate) {
    dates = dates + ' - ' + moment(untilDate).format('MMM YYYY');
  } else {
    dates = dates + ' - Present';
  }
  return dates;
};

export const lastElementInArray = (lineElement, maxElements) => {
  return lineElement !== maxElements;
};

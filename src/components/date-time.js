import {formatTime} from '../utils.js';
import {MonthNames} from '../const.js';

export const createDateForTaskTemplate = (dueDate) => {

  const isDateShowing = dueDate instanceof Date;
  const isExpired = isDateShowing && dueDate < Date.now();

  const date = isDateShowing ? `${dueDate.getDate()} ${MonthNames[dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? formatTime(dueDate) : ``;
  return {date, time, isExpired, isDateShowing};
};


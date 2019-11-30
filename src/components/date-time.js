import {formatTime} from '../utils.js';
import {MonthNames} from '../const.js';

export const createDateForTaskTemplate = (dueDate) => {

  const isExpired = dueDate instanceof Date && dueDate < Date.now();
  const isDateShowing = !!dueDate;

  const date = isDateShowing ? `${dueDate.getDate()} ${MonthNames[dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? formatTime(dueDate) : ``;
  return (date, time, isExpired, isDateShowing);
};


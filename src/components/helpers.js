export function dayParser(dayOfWeek) {
  const days = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
  ];

  return days[dayOfWeek];
}

export function monthParser(monthOfYear) {
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  return months[monthOfYear];
}
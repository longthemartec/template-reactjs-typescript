export const monthsInYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const storyStatusesOrder: string[] = ['IDEATION', 'DRAFT', 'ASSIGNED', 'ACCEPTED', 'IN_PROGRESS', 'REVIEW', 'IN_EDIT', 'IN_APPROVAL', 'READY_TO_PUBLISH', 'TO_PUBLISH', 'PUBLISHED', 'DELETED'];


export const isMobile = (): boolean => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    return true;
  else
    return false;
};

export const isIOS = (): boolean => {
  if (/iPad|iPhone|iPod/i.test(navigator.userAgent))
    return true;
  else
    return false;
};

export const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
navigator.userAgent &&
navigator.userAgent.indexOf('CriOS') === -1 &&
navigator.userAgent.indexOf('FxiOS') === -1;


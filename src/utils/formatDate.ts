import dayjs from 'dayjs';

export const parseUnixTimestamp = (date: number) => dayjs.unix(date);

export const formatTime = (date: number) => dayjs.unix(date).format('hh:mm A');

// export const getDay = (date: number) => dayjs(dayjs.unix(date).format()).day();

export const getDay = (date: number) => {
  const dayNo = dayjs(dayjs.unix(date).format()).get('day')
  let dayOfWeek;
  switch(dayNo) {
    case 0:
      dayOfWeek = 'Sunday';
      break;
    case 1:
      dayOfWeek = 'Monday';
      break;
    case 2:
      dayOfWeek = 'Tuesday';
      break;
    case 3:
      dayOfWeek = 'Wednesday';
      break;
    case 4:
      dayOfWeek = 'Thursday';
      break;
    case 5:
      dayOfWeek = 'Friday';
      break;
    case 6:
      dayOfWeek = 'Saturday';
      break;
    default: 
      dayOfWeek = 'Loading...';
      break;
  }
  return dayOfWeek;
};

export const getDate = (date: number) => dayjs.unix(date).format('D MMM')

export const getNow = (date: string) => dayjs.unix(Number(date)).format('D MMM hh:mm A')

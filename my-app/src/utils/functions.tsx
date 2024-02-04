

const ct = require('countries-and-timezones');
// const moment = require('moment');

export type TimezoneType = {
  name: string,
  utcOffset: number
}

type CountriesType = {
  countryName: string,
  utcOffset: number
  // time:number;
}

const getTimezonesArray =()=> {

  const timezones = ct.getAllTimezones();
  let timezonesArray: TimezoneType[] = [];

  for (let timezone in timezones) {
    timezonesArray.push(timezones[timezone])
  }

  return timezonesArray.filter(item => !item.name.startsWith('Etc/GMT'))
}

export const timezones = getTimezonesArray()

const getCountryData = (timezoneData: TimezoneType[]) => {
 return timezoneData.map((item) => {
    const arrayOfCountryNames = item.name.split('/');
    const countryName = arrayOfCountryNames[arrayOfCountryNames.length - 1];
    // const time = moment().utcOffset(item.utcOffset).format('HH:mm');
    return {countryName:countryName, utcOffset: item.utcOffset}
  })
}

export const countriesData: CountriesType[] = getCountryData(timezones).sort((a,b) => {
  if (a.countryName < b.countryName) {
    return -1;
  }
  if (a.countryName > b.countryName) {
    return 1;
  }
  return 0;
});


export const getCorrectData = (value: number) => {
  return value.toString().padStart(2, '0');
}


export const getDifference = (startTime: string, dynamicTime: string) => {
 return convertMillisecondsToTime((getTimeInMilliseconds(dynamicTime)-getTimeInMilliseconds(startTime)));
}

const getTimeInMilliseconds = (time: string) => {
  const timeArray = time.replace(',',':').split(':').map(item => parseInt(item));
  const timeInMilliseconds = (timeArray[0]*60+timeArray[1])*1000+timeArray[2];
  // console.log(timeInMilliseconds);
  return timeInMilliseconds;
}

const convertMillisecondsToTime = (time: number) => {
  const min = getCorrectData(Math.floor((time) / 60000));
  const sec = getCorrectData(Math.floor(time/1000));
  const millisec = getCorrectData(time%100);
  return `${min}:${sec},${millisec}`;
}



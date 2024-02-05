import moment from 'moment';


const ct = require('countries-and-timezones');

export type TimezoneType = {
  name: string,
  utcOffset: number
}

type CountriesType = {
  countryName: string,
  utcOffset: number
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


export const formatMilliseconds = (time: number) => {
  // return `${getCorrectData(minutes)}:${getCorrectData(seconds)},${getCorrectData(milliseconds)}`;

  return moment(time*10).format('mm:ss,SS');
}
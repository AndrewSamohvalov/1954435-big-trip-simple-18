import {getRandomInteger, getRandomElement} from '../utils.js';
import {POINT_TYPES} from './const.js';
import dayjs from 'dayjs';

const PointPrise = {
  MIN: 10,
  MAX: 50,
  MULTIPLIER: 10
};

const PointDate = {
  MIN_GAP: 1,
  MINUTE_GAP: 59,
  HOUR_GAP: 3,
  DAY_GAP: 14
};

const generateType = () => getRandomElement(POINT_TYPES);

const generatePrice = () => getRandomInteger(PointPrise.MIN, PointPrise.MAX) * PointPrise.MULTIPLIER;

const generateRandomDate = () => ({
  minute: getRandomInteger(PointDate.MIN_GAP, PointDate.MINUTE_GAP),
  hour: getRandomInteger(PointDate.MIN_GAP, PointDate.HOUR_GAP),
  day: getRandomInteger(PointDate.MIN_GAP, PointDate.DAY_GAP)
});

const generateDateFrom = ({minute, hour, day}) =>
  dayjs()
    .add(minute, 'minute')
    .add(hour, 'hour')
    .add(day, 'day')
    .format();

const generateDateTo = (dateFrom, {minute, hour}) =>
  dayjs(dateFrom)
    .add(minute, 'minute')
    .add(hour, 'hour')
    .format();

/**
 * Сгенерирует событие на маршруте
 * @param {number} id
 * @return {Point}
 */
const generatePoint = (id) => {
  const randomDate = generateRandomDate();
  const dateFrom = generateDateFrom(randomDate);
  const dateTo = generateDateTo(dateFrom, randomDate);

  return({
    id,
    type: generateType(),
    destination: id,
    dateFrom,
    dateTo,
    basePrice: generatePrice(),
    offers: [id]
  });
};

/**
 * Сгенерирует список событий на маршруте
 * @param {number} length
 * @returns {Point[]}
 */
export const generatePoints = (length = 10) =>
  Array.from({length}, (_item, index) => generatePoint(index + 1));


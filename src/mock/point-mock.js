import { getRandomInteger } from '../utils.js';


/** Создает случайный тип события на маршруте */
const generatePointType = () => {
  const pointType = [
    'taxi',
    'bus',
    'train',
    'ship',
    'drive',
    'flight',
    'check-in',
    'sightseeing',
    'restaurant'
  ];

  const randomIndex = getRandomInteger(0, pointType.length - 1);

  return pointType[randomIndex];
};

/** Генерирует данные пункта назначения
 * @param {number} id
 * @return {destination}
*/
export const generateDestination = (id) => ({
  id,
  name: 'Chamonix',
  description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: 'Chamonix parliament building'
    }
  ]
});

const generateOffer = (id)=>({
  id,
  title: 'Upgrade to a business class',
  price: 120

});

/**Генерирует данные дополнительных опций
 * @return {OfferGroup}
 */
export const generateOfferGroup = () => ({
  type: 'taxi',
  offers:[
    generateOffer(0)
  ]
});

/** Создает данные для события на маршруте путешествия
 * @param {number} id
 * @return {Point}
*/
export const generatePoint = (id) => ({
  'id':String(id),
  'type': 'taxi',
  'destination': id,
  'dateFrom': '2019-07-10T22:55:56.845Z',
  'dateTo': '2019-07-11T11:22:13.375Z',
  'basePrice': 222,
  'offers': [id],
});



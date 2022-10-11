import {generatePoint} from '../mock/point-mock.js';
import {generateDestination} from '../mock/destination-mock.js';
import {generateOfferGroups} from '../mock/offer-mock.js';

/**Получает данные для события на маршруте путешествия */
export default class RouteModel {
  /**
   * @typedef AggregatedPoint
   * @prop {number} id
   * @prop {OfferType} type
   * @prop {Destination} destination
   * @prop {string} date_from
   * @prop {string} date_to
   * @prop {number} base_price
   * @prop {Offer[]} offers
 */
  /**
 * Вернёт точки маршрута
 * @return {AggregatedPoint[]}
  */
  get() {
    const points = Array.from({length: 3}, generatePoint);
    const destinations = Array.from({length: 3}, generateDestination);
    const offersGroups = generateOfferGroups();

    return points.map((point)=>({
      ...point,
      destination: destinations.find((destination)=>destination.id === point.destination),
      offers: offersGroups.find((group)=>group.type === point.type).offers,

    }));
  }

}

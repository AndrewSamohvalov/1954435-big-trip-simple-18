import {generatePoints} from '../mock/point-mock.js';
import {generateDestinations} from '../mock/destination-mock.js';
import {generateOfferGroups} from '../mock/offer-mock.js';

const points = generatePoints();
const destinations = generateDestinations();
const offerGroups = generateOfferGroups();

/**Модель маршрута */
export default class RouteModel {
  /**
   * Получит доступные опции для определенного типа точки
   * @param {OfferType} type
   */
  getAvailableOffers(type) {
    return offerGroups.find((group) => group.type === type).offers;
  }

  /**
 * Получит точки маршрута
 * @return {AggregatedPoint[]}
  */

  get() {

    return points.map((point)=>({
      ...point,
      destination: destinations.find((destination)=>destination.id === point.destination),
      offers: offerGroups.find((group)=>group.type === point.type).offers,

    }));
  }

}

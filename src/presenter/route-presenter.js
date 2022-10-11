import {formatDate,formatTime} from '../utils.js';
import RouteView from '../view/route-veiw.js';
import PointView from '../view/point-view.js';
import PointEditorView from '../view/point-editor-view';
import RouteModel from '../model/route-model.js';
import PointOfferView from '../view/point-offer-view.js';


export default class RoutePresenter {
  view = new RouteView();
  model = new RouteModel();

  init(containerElement) {

    const points = this.model.get();

    this.view.append(new PointEditorView());
    this.view.append(...points.map(this.createPointView,this));

    containerElement.append(this.view);

  }

  /**
   *
   * @param {AggregatedPoint} point
   */
  createPointView(point) {
    const {
      type,
      destination,
      dateFrom,
      dateTo,
      basePrice,
      offers
    } = point;

    const title = `${type} ${destination.name}`;


    return new PointView()

      .setDate(formatDate(dateFrom), dateFrom)
      .setIcon(type)
      .setTitle(title)
      .setStartTime(formatTime(dateFrom),dateFrom)
      .setEndTime(formatTime(dateTo), dateTo)
      .setPrice(basePrice)
      .appendOffer(...offers.map(this.createOfferView, this));
  }

  /**
   * Создает дополнительную опцию
   * @param {Offer} offer
   */
  createOfferView(offer) {
    return new PointOfferView()
      .setTitle(offer.title)
      .setPrice(offer.price);
  }

}


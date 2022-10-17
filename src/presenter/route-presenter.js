import {formatDate,formatTime,formatDateWithTime} from '../utils.js';
import RouteView from '../view/route-veiw.js';
import PointView from '../view/point-view.js';
import PointEditorView from '../view/point-editor-view';
import RouteModel from '../model/route-model.js';
import OfferView from '../view/offer-view.js';
import PointOfferView from '../view/point-offer-view.js';


export default class RoutePresenter {
  constructor() {
    this.model = new RouteModel();
    this.view = new RouteView();
    this.pointEditorView = new PointEditorView();
  }

  /**
   * Инициализирует RoutePresenter
   * @param {HTMLElement} routeContainer
   */

  init(routeContainer) {

    const points = this.model.get();


    //this.view.append(new PointEditorView());
    this.view.append(...points.map(this.createPointView,this));

    routeContainer.append(this.view);

  }


  /**
   *
   * @param {AggregatedPoint} point
   */

  /**
   * Создаст точку на маршруте
   * @param {AggregatedPoint} point
   */

  createPointView(point) {
    const pointView = new PointView();

    const title = `${point.type} ${point.destination.name}`;

    pointView
      .setDate(formatDate(point.dateFrom), point.dateFrom)
      .setIcon(point.type)
      .setTitle(title)
      .setStartTime(formatTime(point.dateFrom), point.dateFrom)
      .setEndTime(formatTime(point.dateTo), point.dateTo)
      .setPrice(point.basePrice)
      .replaceOffers(...point.offers.map(this.createSelectedOfferView, this));

    pointView.addEventListener('expand', () => {
      this.pointEditorView.close();
      this.updatePointView(point);
      this.pointEditorView
        .link(pointView)
        .open();
    });

    return pointView;
  }

  /**
   * Создаст (выбранную) дополнительную опцию
   * @param {Offer} offer
   */
  createSelectedOfferView(offer) {
    return new PointOfferView()
      .setTitle(offer.title)
      .setPrice(offer.price);
  }

  /**
   * Создаст форму редактирования точки
   * @param {AggregatedPoint} point
   */

  updatePointView(point) {
    return this.pointEditorView
      .setIcon(point.type)
      .setType(point.type)
      .setDestination(point.destination.name)
      .setStartTime(formatDateWithTime(point.dateFrom))
      .setEndTime(formatDateWithTime(point.dateTo))
      .setPrice(point.basePrice)
      .replaceOffers(...point.offers.map(this.createAvailableOfferView, this));
  }


  /**
   * Создаст (доступную) дополнительную опцию
   * @param {Offer} offer
   */
  createAvailableOfferView(offer) {
    return new OfferView()
      .setTitle(offer.title)
      .setPrice(offer.price);
  }
}



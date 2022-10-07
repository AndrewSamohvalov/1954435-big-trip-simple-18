import {formatDate,formatTime} from '../utils.js';
import RouteView from '../view/route-veiw.js';
import PointView from '../view/point-view.js';
import PointEditorView from '../view/point-editor-view';
import RouteModel from '../model/route-model.js';


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
      date_from,
      date_to,
      base_price
    } = point;

    const title = `${type} ${destination.name}`;


    return new PointView()

      .setDate(formatDate(date_from), date_from)
      .setIcon(type)
      .setTitle(title)
      .setStartTime(formatTime(date_from),date_from)
      .setEndTime(formatTime(date_to), date_to)
      .setPrice(base_price);
  }
}


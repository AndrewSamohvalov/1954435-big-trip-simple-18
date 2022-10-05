import {formatDate,formatTime} from '../utils.js';
import RouteView from '../view/route-veiw.js';
import PointView from '../view/point-view.js';
import PointEditorView from '../view/point-editor-view';
import RouteModel from '../model/route-model.js';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);


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
    console.log(point);

    //const startDate = dayjs(point['date_from']).format('HH:mm');

    return new PointView()

      .setTitle(point.destination.name)
      //.setStartTime(point.date_from)
      //.setStartTime(startDate);
      .setStartTime(formatTime(point.date_from),point.date_from);


  }
}


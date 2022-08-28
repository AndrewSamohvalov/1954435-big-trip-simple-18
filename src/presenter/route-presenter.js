import TripRouteView from '../view/trip-route-view.js';
import TripSortView from '../view/trip-sort-view.js';
import TripPointView from '../view/trip-route-view';
import TripNewPointView from '../view/trip-new-point-view';
import TripPointEditorView from '../view/trip-point-editor-view';

export default class RoutePresenter {
  routeElement = new TripRouteView();

  init(containerElement) {
    this.containerElement = containerElement;

    this.routeElement.append(new TripSortView());
    this.routeElement.append(new TripNewPointView());
    this.routeElement.append(new TripPointEditorView());

    for (let i = 0; i < 3; i++) {
      this.routeElement.append(new TripPointView());
    }

    containerElement.append(this.routeElement);
  }
}

/*
import BaseView from '../view/base-view.js';
import SortView from '../view/sort-view.js';
import WayPointListView from '../view/way-point-list-view.js';
import WayPointView from '../view/way-point-view.js';
import CreationFormView from '../view/creation-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import { render } from '../render.js';

export default class RoutePresenter {
  wayPointListComponent = new WayPointListView();

  init = (eventsContainer) => {
    this.eventsContainer = eventsContainer;
    render(new SortView(), this.eventsContainer);
    render(this.wayPointListComponent, this.eventsContainer);
    render(new EditFormView(), this.wayPointListComponent.getElement());
    render(new CreationFormView(), this.wayPointListComponent.getElement());
    for (let i = 0; i < 3; i++) {
      render(new WayPointView(), this.wayPointListComponent.getElement());
    }
  };
}
*/

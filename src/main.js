import FilterView from './view/filter-view.js';
//import SortView from './view/sort-view.js';
import RoutePresenter from './presenter/route-presenter.js';

const routeContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');

filterContainer.append(new FilterView());
//routeContainer.append(new SortView());


const routePresenter = new RoutePresenter(routeContainer);
routePresenter.init(routeContainer);



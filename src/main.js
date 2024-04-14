import { render, RenderPosition } from './render.js';

import BoardPresenter from './presenter/board-presenter.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';

import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.page-header');
const tripInfoElement = headerElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const mainElement = bodyElement.querySelector('.page-main');
const eventListElement = mainElement.querySelector('.trip-events');

const pointsModel = new PointModel();
const offerModel = new OfferModel();

const boardPresenter = new BoardPresenter({
  container: eventListElement,
  pointsModel,
  offerModel,
});

render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);

boardPresenter.init();

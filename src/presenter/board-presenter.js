import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor ({ container, pointsModel, offerModel }) {
    this.container = container;
    this.pointsModel = pointsModel;
    this.offerModel = offerModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    this.offers = [...this.offerModel.getOffers()];

    render(this.sortComponent, this.container);
    render(this.eventListComponent, this.container);

    render(new PointEditView(), this.eventListComponent.getElement());

    for (let i = 0; i < this.points.length; i++) {
      render(new PointView({point: this.points[i]}), this.eventListComponent.getElement());
    }
  }
}

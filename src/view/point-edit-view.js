import { createElement } from '../render.js';
import { createPointEditTemplate, BLANK_POINT } from '../template/point-edit-template.js';

export default class PointEditView {
  constructor(point = BLANK_POINT) {
    this.point = point;
  }

  getTemplate() {
    return createPointEditTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
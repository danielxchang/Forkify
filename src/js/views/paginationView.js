import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    return `${this._generateMarkupButton(curPage, 'Previous', numPages)}
    <p class="total-pages">Page ${curPage} of ${numPages}</p>
    ${this._generateMarkupButton(curPage, 'Next', numPages)}`;
  }

  _generateMarkupButton(curPage, type, numPages) {
    const goToPage = type === 'Next' ? curPage + 1 : curPage - 1;
    const icon = type === 'Next' ? 'right' : 'left';
    return `
    <button data-goto="${goToPage}" class="btn--inline pagination__btn--${type}${
      (goToPage === 0) | (goToPage > numPages) ? ' pagination-disabled' : ''
    }">
        ${type === 'Next' ? `<span>${type}</span>` : ''}
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-${icon}"></use>
        </svg>
        ${type === 'Previous' ? `<span>${type}</span>` : ''}
    </button>
  `;
  }
}

export default new PaginationView();

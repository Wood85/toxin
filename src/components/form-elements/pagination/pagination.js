(function() {
  const rooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
    101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,
    139,140,141,142,143,144,145,146,147,148,149,150, 151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176];

  function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    const sideWidth = maxLength < 9 ? 1 : 2,
      leftWidth = (maxLength - sideWidth * 2 - 3) >> 1,
      rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if(totalPages <= maxLength) {
      return range(1, totalPages);
    }

    if(page <= maxLength - sideWidth - 1 - rightWidth) {
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if(page >= totalPages - sideWidth - 1 - rightWidth) {
      return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }

  $(function() {
    const numberOfItems = rooms.length,
      //задаем количество карточек которое нужно отобразить на странице
      limitPerPage = 12,
      totalPages = Math.ceil(numberOfItems / limitPerPage),
      //устанавливаем количество элементов которые нужно показать в пагинаторе
      paginationSize = 5;
    let currentPage;
    const $paginationPanel = $('.js-pagination__panel');

    function showPage(whichPage) {

      const $informationLine = $('.js-pagination__information-line'),
        $item = $('.js-pagination__item');

      if(whichPage < 1 || whichPage > totalPages) return false;

      currentPage = whichPage;

      $item.slice(1, -1).remove();

      getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        const $link = $('<a>').addClass('pagination__page-link').attr({href: 'javascript:void(0)'}).text(item || '...');
        $('<li>').addClass('pagination__item js-pagination__item')
          .addClass(item ? 'pagination__current-page js-pagination__current-page' : 'pagination__dots')
          .toggleClass('pagination__item_active', item === currentPage)
          .append($link)
          .insertBefore('.js-pagination__button_next');
      });
      const startTrim = currentPage * limitPerPage - (limitPerPage - 1);
      let endTrim = currentPage * limitPerPage,
        amountOfItems = numberOfItems;

      if(endTrim > amountOfItems) {
        endTrim = amountOfItems;
      }

      if(+amountOfItems > 100) {
        amountOfItems = '100+';
      }else{
        amountOfItems = numberOfItems;
      }

      $informationLine.remove();

      $('<div>').addClass('pagination__information-line js-pagination__information-line')
        .text(`${startTrim} – ${endTrim} из ${amountOfItems} вариантов аренды`)
        .insertAfter('.js-pagination__panel');

      $buttonPrev.toggleClass('pagination__item_disabled', currentPage === 1);
      $buttonNext.toggleClass('pagination__item_disabled', currentPage === totalPages);
      return true;
    }

    const $link = $('<a>').addClass('pagination__page-link')
      .attr({href: 'javascript:void(0)'});

    const $createButtonPrev = $('<li>').addClass('pagination__item js-pagination__item pagination__button_prev js-pagination__button_prev')
      .append($link);

    const $createButtonNext = $('<li>').addClass('pagination__item js-pagination__item pagination__button_next js-pagination__button_next')
      .append($link);

    $paginationPanel.append($createButtonPrev,$createButtonNext);

    const $document = $(document),
      $buttonNext = $('.js-pagination__button_next'),
      $buttonPrev = $('.js-pagination__button_prev');

    showPage(1);

    $document.on('click', '.js-pagination__current-page:not(.pagination__item_active)', function(){
      return showPage(+$(this).text());
    });

    $buttonNext.on('click', function(){
      return showPage(currentPage + 1);
    });

    $buttonPrev.on('click', function(){
      return showPage(currentPage - 1);
    });
  });

}());
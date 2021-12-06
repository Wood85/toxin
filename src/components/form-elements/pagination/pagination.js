let totalElements = 170; // elements to show on the page
let perPage = 12; // how many elements need to show per page
let visibleLinks = 4; // how many links need to be visible;

const linksCount = Math.ceil(totalElements / perPage); // pagination links count;
const paginationContainer = document.querySelector('.pagination__panel');
const informationLine = document.querySelector('.pagination__information-line');

// create the first array of links
const paginationArray = [...Array(linksCount > visibleLinks ? visibleLinks + 1 : linksCount).keys()].slice(1);
paginationArray.splice(visibleLinks - 1, 1, linksCount);

// Pagination init function
(function paginationInit(currentPage = 1) {
  if (linksCount > visibleLinks) {
    if ( linksCount - currentPage < visibleLinks - 1 && currentPage !== paginationArray[1] ) {
      if (linksCount - currentPage >= visibleLinks - 2) {
        currentPage = currentPage - 1;
      } else if(currentPage !== paginationArray[paginationArray.length - 2] &&
        currentPage !== paginationArray[paginationArray.length - 1]){
        return;
      }else {
        currentPage = currentPage - 1 - (visibleLinks - 2 - (linksCount - currentPage));
      }
    } else if (currentPage !== 1) {
      if (
        currentPage > paginationArray[1] &&
        currentPage < paginationArray[paginationArray.length - 2]
      ) {
        return;
      } else if ( currentPage === paginationArray[1] ){
        if( currentPage - (visibleLinks - 2) >= -1 ) {
          currentPage = currentPage - (visibleLinks - 2) >= 2 ? currentPage - (visibleLinks - 2) : 1;
        }else{
          currentPage = 1;
        }
      } else {
        currentPage -= 1;
      }
    } else {
      currentPage = 1;
    }
    paginationArray.splice(1, paginationArray.length - 2,...Array(visibleLinks - 2)
      .fill(currentPage)
      .map((e, i) => (e += i + 1))
    );
  }

  paginationContainer.innerHTML = '';

  paginationArray.map(e => {
    let link = document.createElement('a');
    link.classList.add('pagination__link');
    link.textContent = e;
    link.setAttribute('href', e);
    paginationContainer.append(link);
  });

  if(paginationArray[1] > 2) {
    paginationContainer.children[1].before(' ... ');
  }
  if(paginationArray[paginationArray.length - 2] < linksCount - 1) {
    paginationContainer.children[paginationArray.length - 1].before(' ... ');
  }

  for(let i=0; i<paginationContainer.children.length; i++) {
    paginationContainer.children[i].addEventListener('click', function (e) {
      e.preventDefault();
      paginationInit(+(e.target.getAttribute('href')));
      console.log(+(e.target.getAttribute('href')));
      paginationContainer.children[i].classList.add('pagination__link_active');
    })
  }
})();




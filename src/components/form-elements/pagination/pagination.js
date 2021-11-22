const rooms = [
    {number: '800', coast: '9990'},
    {number: '801', coast: '9990'},
    {number: '802', coast: '9990'},
    {number: '803', coast: '9990'},
    {number: '804', coast: '9990'},
    {number: '805', coast: '9990'},
    {number: '806', coast: '9990'},
    {number: '807', coast: '9990'},
    {number: '808', coast: '9990'},
    {number: '809', coast: '9990'},
    {number: '810', coast: '9990'},
    {number: '811', coast: '9990'},
    {number: '812', coast: '9990'},
    {number: '813', coast: '9990'},
    {number: '814', coast: '9990'},
    {number: '815', coast: '9990'},
    {number: '816', coast: '9990'},
    {number: '817', coast: '9990'},
    {number: '800', coast: '9990'},
    {number: '801', coast: '9990'},
    {number: '802', coast: '9990'},
    // {number: '803', coast: '9990'},
    // {number: '804', coast: '9990'},
    // {number: '805', coast: '9990'},
    // {number: '806', coast: '9990'},
    // {number: '807', coast: '9990'},
    // {number: '808', coast: '9990'},
    // {number: '809', coast: '9990'},
    // {number: '810', coast: '9990'},
    // {number: '811', coast: '9990'},
    // {number: '812', coast: '9990'},
    // {number: '813', coast: '9990'},
    // {number: '814', coast: '9990'},
    // {number: '815', coast: '9990'},
    // {number: '816', coast: '9990'},
    // {number: '817', coast: '9990'},
    // {number: '800', coast: '9990'},
    // {number: '801', coast: '9990'},
    // {number: '802', coast: '9990'},
    // {number: '803', coast: '9990'},
    // {number: '804', coast: '9990'},
    // {number: '805', coast: '9990'},
    // {number: '806', coast: '9990'},
    // {number: '807', coast: '9990'},
    // {number: '808', coast: '9990'},
    // {number: '809', coast: '9990'},
    // {number: '810', coast: '9990'},
    // {number: '811', coast: '9990'},
    // {number: '812', coast: '9990'},
    // {number: '813', coast: '9990'},
    // {number: '814', coast: '9990'},
    // {number: '815', coast: '9990'},
    // {number: '816', coast: '9990'},
    // {number: '817', coast: '9990'},
    // {number: '800', coast: '9990'},
    // {number: '801', coast: '9990'},
    // {number: '802', coast: '9990'},
    // {number: '803', coast: '9990'},
    // {number: '804', coast: '9990'},
    // {number: '805', coast: '9990'},
    // {number: '806', coast: '9990'},
    // {number: '807', coast: '9990'},
    // {number: '808', coast: '9990'},
    // {number: '809', coast: '9990'},
    // {number: '810', coast: '9990'},
    // {number: '811', coast: '9990'},
    // {number: '812', coast: '9990'},
    // {number: '813', coast: '9990'},
    // {number: '814', coast: '9990'},
    // {number: '815', coast: '9990'},
    // {number: '816', coast: '9990'},
    // {number: '817', coast: '9990'}
]


const paginator = document.querySelector('.pagination__pages');
let itemsPortion = 12;
let countPages = Math.ceil(rooms.length/itemsPortion);

const items = [];
for (let i=1; i<=countPages; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    li.classList.add('pagination__page')
    paginator.appendChild(li);
    items.push(li);
}
showPage(items[0]);
for (let item of items) {
    item.addEventListener('click', function () {
        showPage(this);
    })
}

function showPage(item) {
  const active = document.querySelector('.pagination__page_active');
  if(active) {
    active.classList.remove('pagination__page_active');
  }
  item.classList.add('pagination__page_active')
  let pageNum = +item.innerHTML;
  let start = (pageNum-1)*itemsPortion;
  let end = start + itemsPortion;
  let countPortions = rooms.slice(start,end)
  console.log(countPortions)
}
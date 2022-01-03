function dropdownQuests() {
  //Дропдаун
  let isDrop = false;
  const $trigger = $('.js-dropdown-quests__trigger'),
    $dropdown = $('.dropdown-quests__dropdown'),
    $backdrop = $('.dropdown-quests__backdrop'),
    $adults = $(".button-minus[data-title='adults']"),
    $children = $(".button-minus[data-title='children']"),
    $babies = $(".button-minus[data-title='babies']");

  $trigger.click(function () {
    if(!isDrop) {
      $dropdown.slideDown();
      $backdrop.css('border-radius', '4px 4px 0 0 ');
      $adults.addClass('limit');
      $children.addClass('limit');
      $babies.addClass('limit');
    }else{
      $dropdown.slideUp();
      setTimeout(resetCSS, 400);
      resetCSS();
    }
    isDrop = !isDrop;
    function resetCSS() {
      $backdrop.css('border-radius', '4px')
    }
  })
}
dropdownQuests();

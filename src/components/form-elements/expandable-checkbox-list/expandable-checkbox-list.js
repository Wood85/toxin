import $ from 'jquery';

(function() {
  let isExpandable = false;
  const $trigger = $('.expandable-checkbox-list__trigger'),
    $dropdown = $('.expandable-checkbox-list__dropdown');
  $trigger.click(function () {
    if(!isExpandable) {
      $dropdown.slideDown();
      $trigger.addClass('trigger-up');
      $trigger.removeClass('trigger-down');
    }else{
      $dropdown.slideUp();
      $trigger.removeClass('trigger-up');
      $trigger.addClass('trigger-down');
    }
    isExpandable = !isExpandable;
  });
}());
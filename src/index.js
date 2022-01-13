import './styles/style.scss';
import './components/form-elements/dropdown-selection/dropdown-selection';
// import './pages/cards/cards';
// import './pages/form-elements/form-elements';
// import './pages/website-pages/main/main';
// import './pages/website-pages/search-room/search-room';
// import './pages/website-pages/room-details/room-details';
// import './pages/website-pages/auth/auth';
// import {DropdownQuantity} from './components/form-elements/dropdown-quantity/dropdown-quantity';
//
// //====================
// const dropdown = new DropdownQuantity('#dropdown', {
//   placeholder: 'Сколько гостей',
//   data: [
//     {id: '1', title: 'взрослые', value: '2'},
//     {id: '2', title: 'дети', value: '2'},
//     {id: '3', title: 'младенцы', value: '3'}
//   ]
// });
//
// window.d = dropdown;
//=====
// !function (t, n) {
//   "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("item-quantity-dropdown", [], n) : "object" == typeof exports ? exports["item-quantity-dropdown"] = n() : t["item-quantity-dropdown"] = n()
// }(window, function () {
//   return function (t) {
//     var n = {};
//
//     function e(o) {
//       if (n[o]) return n[o].exports;
//       var r = n[o] = {i: o, l: !1, exports: {}};
//       return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
//     }
//
//     return e.m = t, e.c = n, e.d = function (t, n, o) {
//       e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: o})
//     }, e.r = function (t) {
//       "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
//     }, e.t = function (t, n) {
//       if (1 & n && (t = e(t)), 8 & n) return t;
//       if (4 & n && "object" == typeof t && t && t.__esModule) return t;
//       var o = Object.create(null);
//       if (e.r(o), Object.defineProperty(o, "default", {
//         enumerable: !0,
//         value: t
//       }), 2 & n && "string" != typeof t) for (var r in t) e.d(o, r, function (n) {
//         return t[n]
//       }.bind(null, r));
//       return o
//     }, e.n = function (t) {
//       var n = t && t.__esModule ? function () {
//         return t.default
//       } : function () {
//         return t
//       };
//       return e.d(n, "a", n), n
//     }, e.o = function (t, n) {
//       return Object.prototype.hasOwnProperty.call(t, n)
//     }, e.p = "", e(e.s = 0)
//   }([function (t, n, e) {
//     "use strict";
//     e.r(n);
//     e(1);
//     !function (t) {
//       var n = {
//         maxItems: 1 / 0,
//         minItems: 0,
//         selectionText: "item",
//         textPlural: "items",
//         controls: {
//           position: "right",
//           displayCls: "iqdropdown-content",
//           controlsCls: "iqdropdown-item-controls",
//           counterCls: "counter"
//         },
//         items: {},
//         onChange: function () {
//         },
//         beforeDecrement: function () {
//           return !0
//         },
//         beforeIncrement: function () {
//           return !0
//         },
//         setSelectionText: function (t, n) {
//           var e = 1 !== n && this.textPlural.length > 0 ? this.textPlural : this.selectionText;
//           return "".concat(n, " ").concat(e)
//         }
//       };
//       t.fn.iqDropdown = function (e) {
//         return this.each(function () {
//           var o = t(this), r = o.find("p.iqdropdown-selection").last(),
//             i = o.find("div.iqdropdown-menu").find("div.iqdropdown-menu-option"),
//             u = {selectionText: r.data("selection-text"), textPlural: r.data("text-plural")},
//             c = t.extend(!0, {}, n, u, e), a = {}, l = 0;
//
//           function s() {
//             r.html(c.setSelectionText(a, l))
//           }
//
//           o.click(function () {
//             o.toggleClass("menu-open")
//           }), i.each(function () {
//             var n = t(this), e = n.data("id"), o = Number(n.data("defaultcount") || "0");
//             a[e] = o, l += o, function (t, n) {
//               var e = Number(n.data("mincount")), o = Number(n.data("maxcount"));
//               c.items[t] = {minCount: Number.isNaN(Number(e)) ? 0 : e, maxCount: Number.isNaN(Number(o)) ? 1 / 0 : o}
//             }(e, n), function (n, e) {
//               var o = t("<div />").addClass(c.controls.controlsCls),
//                 r = t('\n          <button class="button-decrement">\n            <i class="icon-decrement"></i>\n          </button>\n        '),
//                 i = t('\n          <button class="button-increment">\n            <i class="icon-decrement icon-increment"></i>\n          </button>\n        '),
//                 u = t("<span>".concat(a[n], "</span>")).addClass(c.controls.counterCls);
//               e.children("div").addClass(c.controls.displayCls), o.append(r, u, i), "right" === c.controls.position ? e.append(o) : e.prepend(o), r.click(function (t) {
//                 var e = c.items, o = c.minItems, r = c.beforeDecrement, i = c.onChange;
//                 r(n, a) && l > o && a[n] > e[n].minCount && (a[n] -= 1, l -= 1, u.html(a[n]), s(), i(n, a[n], l)), t.preventDefault()
//               }), i.click(function (t) {
//                 var e = c.items, o = c.maxItems, r = c.beforeIncrement, i = c.onChange;
//                 r(n, a) && l < o && a[n] < e[n].maxCount && (a[n] += 1, l += 1, u.html(a[n]), s(), i(n, a[n], l)), t.preventDefault()
//               }), e.click(function (t) {
//                 return t.stopPropagation()
//               })
//             }(e, n)
//           }), s()
//         }), this
//       }
//     }(jQuery)
//   }, function (t, n, e) {
//   }])
// });
//# sourceMappingURL=item-quantity-dropdown.min.js.map
//=======

// $(document).ready(() => {
//   $('.iqdropdown').iqDropdown({
//     // max total items
//     maxItems: Infinity,
//     // min total items
//     minItems: 0,
//     // text to show on the dropdown override data-selection-text attribute
//     selectionText: 'item',
//     // text to show for multiple items
//     textPlural: 'items',
//     // optionally can use setSelectionText function to override selectionText
//     setSelectionText: (itemCount, totalItems) => { /* return string */
//     },
//     // buttons to increment/decrement
//     controls: {
//       position: 'right',
//       displayCls: 'iqdropdown-item-display',
//       controlsCls: 'iqdropdown-item-controls',
//       counterCls: 'counter'
//     },
//     // fires when an item quantity changes
//     onChange: (id, count, totalItems) => {
//     },
//     // return false to prevent an item decrement
//     beforeDecrement: (id, itemCount) => {
//     },
//     // return false to prevent an item increment
//     beforeIncrement: (id, itemCount) => {
//     }
//   });
// });


//====================


/*//quantitySelect
$(document).ready(function() {
  $('body').on('click', '.button-minus, .button-plus', function(){
    let $row = $(this).closest('.quantity-change-block')
    let $input = $row.find('.quantity')
    let step = $row.data('step')
    let val = parseFloat($input.val())
    if ($(this).hasClass('button-minus')) {
      val -= step
    } else {
      val += step
    }
    $input.val(val)
    $input.change()
    return false;
  });

  $('body').on('change', '.quantity', function(){
    let $input = $(this)
    let $row = $input.closest('.quantity-change-block')
    let step = $row.data('step')
    let min = parseInt($row.data('min'),10)
    let max = parseInt($row.data('max'),10)
    let val = parseFloat($input.val())
    if (isNaN(val)) {
      val = step
    } else if (min && val < min) {
      val = min
    } else if (val <= 0) {
      val = 0;
    } else if (max && val > max) {
      val = max
    }
    $input.val(val)
    let bedroomsValue = $(".quantity[name='bedrooms']").val()
    let bedValue = $(".quantity[name='bed']").val()
    let bathroomsValue = $(".quantity[name='bathrooms']").val()
    let bedroomsTitle = 'спальни'
    let bedTitle = 'кровати'
    if(bedroomsValue==0) {
      bedroomsTitle = 'спален'
      $(".button-minus[data-title='bedrooms']").addClass('limit')
    }else{
      $(".button-minus[data-title='bedrooms']").removeClass('limit')
    }

    if(bedroomsValue==1){
      bedroomsTitle = 'спальня'
    }
    if(bedroomsValue>=5){
      bedroomsTitle = 'спален'
    }
    if(bedroomsValue==10) {
      $(".button-plus[data-title='bedrooms']").addClass('limit')
    }else{
      $(".button-plus[data-title='bedrooms']").removeClass('limit')
    }
    if(bedValue==0) {
      bedTitle = 'кроватей'
      $(".button-minus[data-title='bed']").addClass('limit')
    }else{
      $(".button-minus[data-title='bed']").removeClass('limit')
    }
    if(bedValue==1){
      bedTitle = 'кровать'
    }
    if(bedValue>=5){
      bedTitle = 'кроватей'
    }
    if(bedValue==10) {
      $(".button-plus[data-title='bed']").addClass('limit')
    }else{
      $(".button-plus[data-title='bed']").removeClass('limit')
    }
    if(bathroomsValue==0) {
      bedroomsTitle = 'спален'
      $(".button-minus[data-title='bathrooms']").addClass('limit')
    }else{
      $(".button-minus[data-title='bathrooms']").removeClass('limit')
    }
    if(bathroomsValue==10) {
      $(".button-plus[data-title='bathrooms']").addClass('limit')
    }else{
      $(".button-plus[data-title='bathrooms']").removeClass('limit')
    }

    $('.dropdown-selection__backdrop').val(`${bedroomsValue} ${bedroomsTitle}, ${bedValue} ${bedTitle}...`)

    //dropdownQuests
    let adultsValue = $(".quantity[name='adults']").val()
    let childrenValue = $(".quantity[name='children']").val()
    let babiesValue = $(".quantity[name='babies']").val()
    let countsQuests = Number(adultsValue) + Number(childrenValue)
    let countsBabies = Number(babiesValue)
    let questsTitle = 'гостей'
    let babiesTitle = 'младенцев'

    $('.dropdown-quests__reset').click(function () {
      $(".quantity[name='adults']").val(0)
      $(".quantity[name='children']").val(0)
      $(".quantity[name='babies']").val(0)
      $('.dropdown-quests__backdrop').val(`Сколько гостей`)
      $(".button-minus[data-title='adults']").addClass('limit')
      $(".button-minus[data-title='children']").addClass('limit')
      $(".button-minus[data-title='babies']").addClass('limit')
      $(this).css('visibility','hidden')
    })

    $('.dropdown-quests__apply').click(function () {
      if (countsQuests > 0) {
        $('.dropdown-quests__dropdown').slideUp()
        setTimeout(resetCSS, 400)
        resetCSS()}
      }
    )

    if(countsQuests==0) {
      countsQuests= 'Сколько'
      questsTitle = 'гостей'
    }
    if(countsQuests > 0) {
      $('.dropdown-quests__reset').css('visibility','visible')
    }else{
      $('.dropdown-quests__reset').css('visibility','hidden')
    }
    if(countsQuests==1 || countsQuests==21) {
      questsTitle = 'гость'
    }
    if((countsQuests > 1 && countsQuests < 5) || (countsQuests > 21 && countsQuests < 25)) {
      questsTitle = 'гостя'
    }

    if(countsBabies==1 || countsBabies==21) {
      babiesTitle = 'младенец'
    }

    if((countsBabies > 1 && countsBabies < 5) || (countsBabies > 21 && countsBabies < 25)) {
      babiesTitle = 'младенца'
    }

    if(adultsValue==0) {
      $(".button-minus[data-title='adults']").addClass('limit')
    }else{
      $(".button-minus[data-title='adults']").removeClass('limit')
    }
    if(adultsValue==10) {
      $(".button-plus[data-title='adults']").addClass('limit')
    }else{
      $(".button-plus[data-title='adults']").removeClass('limit')
    }

    if(childrenValue==0) {
      $(".button-minus[data-title='children']").addClass('limit')
    }else{
      $(".button-minus[data-title='children']").removeClass('limit')
    }
    if(childrenValue==10) {
      $(".button-plus[data-title='children']").addClass('limit')
    }else{
      $(".button-plus[data-title='children']").removeClass('limit')
    }
    if(babiesValue==0) {
      $(".button-minus[data-title='babies']").addClass('limit')
    }else{
      $(".button-minus[data-title='babies']").removeClass('limit')
    }
    if(babiesValue==10) {
      $(".button-plus[data-title='babies']").addClass('limit')
    }else{
      $(".button-plus[data-title='babies']").removeClass('limit')
    }
    if(countsBabies > 0){
      $('.dropdown-quests__backdrop').val(`${countsQuests} ${questsTitle}, ${countsBabies} ${babiesTitle}`)
    }else{
      $('.dropdown-quests__backdrop').val(`${countsQuests} ${questsTitle}`)
    }

  })
});
function resetCSS() {
  $('.dropdown-quests__backdrop').css('border-radius', '4px')
}*/





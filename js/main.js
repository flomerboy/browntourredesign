/* Scroll-sensitive Navigation
 * Source: http://codetheory.in/change-active-state-links-sticky-navigation-scroll/ 
 */
var sections = $('section'),
    nav = $('nav');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      /* Make section active */
      $(this).addClass('active');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');

      var parent = $(this).parent();
      /* If subsection, make parent active too */
      if(parent.is('section')) {
        parent.addClass('active');
        nav.find('a[href="#' + parent.attr('id') + '"]').addClass('active');
      }
    }
  });
});

/* Smooth-scrolling */
 $('a[href^="#"]').click(function(event) {
    var id = $(this).attr("href"),
        offset = -10,
        target = $(id).offset().top - offset;

    $('html, body').animate({scrollTop: target}, 200);
    event.preventDefault();
 });

 /* See More buttons */
$('button.see-more').click(function() {
  $(this).prev().toggleClass('more-content');

  var currentText = $(this).text();
  $(this).text(currentText === "SEE MORE ▼" ? "SEE LESS ▲" : "SEE MORE ▼");
});


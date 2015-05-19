// Edit text function
$.fn.inlineEdit = function(replaceWith, connectWith) {
  var replaceWith = $('<input type="text"' + 'value="' + $(this).text() + '">');
  var connectWith = $('input[name="hiddenField"]');
  var elem = $(this);

  elem.hide();
  elem.after(replaceWith);
  replaceWith.focus();

  replaceWith.keypress(function(event) {
    var key = (event.keyCode ? event.keyCode : event.which);
    if (key == '13') {      
      if ($(this).val() != "") {
          connectWith.val($(this).val()).change();
          elem.text($(this).val());
      }
      $(this).remove();

      if (!$(elem).hasClass('ads-creative')) {
        elem.css( "color", "rgb(26,13,171)" );
      };
      elem.show();
    }
  });

  replaceWith.blur(function() {
    if ($(this).val() != "") {
        connectWith.val($(this).val()).change();
        elem.text($(this).val());
    }
    $(this).remove();

    if (!$(elem).hasClass('ads-creative')) {
      elem.css( "color", "rgb(26,13,171)" );
    };
    elem.show();
  });
}

// Editable text sections
$('.ads-ad h3').click(function(event) {
  event.preventDefault();
  $(this).inlineEdit();
});

$('.ads-ad ul li').click(function(event) {
  event.preventDefault();
  $(this).inlineEdit();
});

$('.ads-creative').click(function() {
  $(this).inlineEdit();
});

// Icon that directs to stripped down link (ad titles)
var logo = chrome.extension.getURL("images/adpearance.png");

$('.ads-ad').each(function() {
  var uri = $(this).find("a").attr("href");
  var uri_array = uri.split("http://");
	var new_uri = uri_array.pop();
	var decoded_uri = decodeURIComponent(new_uri);
  $(this).find("h3:first").before(
  	'<a target="_blank" style="float: left" href="http://' +
  	decoded_uri +
  	'">' +
  	"<img src='" +
  	logo +
  	"'>" +
  	'</a> '
  );
});

// Icon that directs to stripped down link (ad subsections)
$('.ads-ad ul li').each(function() {
  var uri = $(this).find("a").attr("href");
  var uri_array = uri.split("http://");
	var new_uri = uri_array.pop();
	var decoded_uri = decodeURIComponent(new_uri);
  $(this).wrap("<li></li>");
  $(this).before(
  	'<a target="_blank" style="float: left" href="http://' +
  	decoded_uri +
  	'">' +
  	"<img src='" +
  	logo +
  	"'>" +
  	'</a> '
  );
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "updated" ) {
      console.log('foo');
    }
  }
);






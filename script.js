// Edit text
$('.ads-ad h3').click(function(event) {
	event.preventDefault();
	var replaceWith = $('<input name="temp" type="text"' + 'value="' + $(this).text() + '">');
	var connectWith = $('input[name="hiddenField"]');
  var elem = $(this);

	elem.hide();
  elem.after(replaceWith);
  replaceWith.focus();

  replaceWith.blur(function() {
    if ($(this).val() != "") {
        connectWith.val($(this).val()).change();
        elem.text($(this).val());
    }
    $(this).remove();
    elem.show();
    elem.
    console.log(elem);
  });
});


var logo = chrome.extension.getURL("images/adpearance.png");

$('.ads-ad').each(function() {
  var uri = $(this).find("a").attr("href");
  var uri_array = uri.split("http://");
	var new_uri = uri_array.pop();
	var decoded_uri = decodeURIComponent(new_uri);
  $(this).find("h3:first").append(
  	' <a href="http://' +
  	decoded_uri +
  	'">' +
  	"<img src='" +
  	logo +
  	"'>" +
  	'</a>'
  );
});

$('.ads-ad ul li').each(function() {
  var uri = $(this).find("a").attr("href");
  var uri_array = uri.split("http://");
	var new_uri = uri_array.pop();
	var decoded_uri = decodeURIComponent(new_uri);
  $(this).append(
  	' <a href="http://' +
  	decoded_uri +
  	'">' +
  	"<img src='" +
  	logo +
  	"'>" +
  	'</a>'
  );
});
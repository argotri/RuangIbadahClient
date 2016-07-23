$(function() {

  // Initialize nativeDroid2

  $.nd2({
    stats : {
      analyticsUA: null // Your UA-Code for Example: 'UA-123456-78'
    },
    advertising : {
      active : false, // true | false
      path : null, // Define where the Ad-Templates are: For example: "/examples/fragments/adsense/"
      extension : null // Define the Ad-Template content Extension (Most case: ".html" or ".php")
    }
  });


});
//var baseUrl = 'http://localhost/project/mas_samsul_server';
var baseUrl = 'http://gosoft.web.id/ri_server';
//var baseUrl = 'http://localhost/ruangibadah_server';
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

html5sql.openDatabase("userDetail", "userDetail", 5*1024*1024);

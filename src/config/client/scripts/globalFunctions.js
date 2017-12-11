/**
 * Get a local (or not local) JSON file and return its contents
 */
function loadJSON(url, callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);

    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };

    xobj.send(null);
 }

//------------------------------------------------------------------------------

 // NOTE - This is the only global variable
 // in regular JavaScript scope (other than app). This allows
 // content from the config file to be accessed
 // from anywhere within the application, independent
 // of AngularJS rules, dependencies, etc
 var config = (function getConfig() {
   return JSON.parse(
     $.ajax({
       url: "config/client/app.config.json",
       dataType: 'json',
       async: false,
     }).responseText
   );
 })();

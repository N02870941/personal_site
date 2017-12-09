//------------------------------------------------------------------------------

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
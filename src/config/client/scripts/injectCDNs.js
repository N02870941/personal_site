/**
 * Inject title of page via config file
 */
(function() {
  try {
    loadJSON("./config/client/index.config.json", function(response) {
      var indexConfig = JSON.parse(response);

      // Set the title
      var head = document.getElementsByTagName('head')[0];
      document.title = indexConfig.title;

      // Create the favicon
      var favicon = document.createElement('link');
      favicon.rel = indexConfig.favicon.rel;
      favicon.type = indexConfig.favicon.type;
      favicon.href = indexConfig.favicon.href;
      head.appendChild(favicon);

      // Insert all css CDNs
      for (var i in indexConfig.cdn.css) {
        var link = document.createElement('link');
        link.rel = indexConfig.cdn.css[i].rel;
        link.type = indexConfig.cdn.css[i].type;
        link.href = indexConfig.cdn.css[i].href;
        head.appendChild(link);
      }

      // Insert all js CDNs
      for (var i in indexConfig.cdn.js) {
        var link = document.createElement('link');
        link.type = indexConfig.cdn.js[i].type;
        link.href = indexConfig.cdn.js[i].href;
        head.appendChild(link);
      }

    });

  } catch (err) {
    console.error(err);
  }
})();

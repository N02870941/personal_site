/**
 * Dynamically sets up all of the meta tags
 */
(function() {
  try {
    loadJSON("./config/client/index.config.json", function(response) {
      var indexConfig = JSON.parse(response);
      var head = document.getElementsByTagName('head')[0];
      var charset = document.createElement('meta');

      // Set the charset
      charset.charset = indexConfig.meta.charset;
      head.appendChild(charset);

      // Look through and create all meta tags
      for (var i in indexConfig.meta.entries) {
        var link = document.createElement('meta');

        // Set the attributes
        link.name = indexConfig.meta.entries[i].name,
        link.content = indexConfig.meta.entries[i].content;

        head.appendChild(link);
      }

    });

  } catch (err) {
    console.error(err);
  }
})();

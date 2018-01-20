/*
 * NOTE - These variables are the only variables
 * that are intentially in the global scope of the
 * application. They are config files that should
 * be accessible from any controller, component, etc
 * of the AngularJS application.
 */
const config = (function getConfig() {
 return JSON.parse(
   $.ajax({
     url: "config/client/app.config.json",
     dataType: 'json',
     async: false,
   }).responseText
 );
})();

 //------------------------------------------------------------------------------

const indexConfig = (function getConfig() {
 return JSON.parse(
   $.ajax({
     url: "./config/client/index.config.json",
     dataType: 'json',
     async: false,
   }).responseText
 );
})();

//------------------------------------------------------------------------------

const serverConfig = (function getConfig() {
 return JSON.parse(
   $.ajax({
     url: "./config/server/server.config.json",
     dataType: 'json',
     async: false,
   }).responseText
 );
})();

//------------------------------------------------------------------------------

/**
 * Dynamically sets up all of the meta tags
 */
(function() {
  try {

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

  } catch (err) {
    console.error(err);
  }
})();

//------------------------------------------------------------------------------

/**
 * Inject title of page
 * Inject favicon
 * Inject .css and .js CDNs
 */
(function() {
  try {

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

  } catch (err) {
    console.error(err);
  }
})();

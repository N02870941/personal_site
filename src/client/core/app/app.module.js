
// NOTE - This is the only global function
// in regular JavaScript scope. This allows
// content from the config file to be accessed
// from anywhere within the application, independent
// of AngularJS rules, modules, etc
function getConfig() {
  return JSON.parse(
    $.ajax({
      url: "client/core/app/config.json",
      dataType: 'json',
      async: false,
    }).responseText
  );
}

//------------------------------------------------------------------------------

var config = getConfig();
var modules = config.modules;
var dependencies = config.dependencies;

//------------------------------------------------------------------------------

// Create the module
var app = angular.module("app", modules.concat(dependencies));

/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  // ***
  // *** Required modules, Listed in the order of importance
  // ***
  var OpenTokLibrary = require('opentok');

  // ***
  // *** OpenTok Constants for creating Session and Token values
  // ***
  var OTKEY = process.env.TB_KEY;
  var OTSECRET = process.env.TB_SECRET;

  // ***
  // *** Setup when server first starts
  // ***
  var urlSessions = {};
  var OpenTokObject = new OpenTokLibrary.OpenTokSDK(OTKEY, OTSECRET);
  
  cb();
};

/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#/documentation/concepts/ORM
 */

var postCreds;
var bluemixport = (process.env.VCAP_APP_PORT || '2368');
var bluemixhost = (process.env.VCAP_APP_HOST || '127.0.0.1');

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/

    connection: 'bluemixMySQL' 

};

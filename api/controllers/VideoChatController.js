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
  // *** All sessionIds need a corresponding token
  // *** generateToken and then sendResponse based on ejs template
  // ***
  function sendResponse(sessionId, responder ){
	  var token = OpenTokObject.generateToken( {session_id: sessionId} );
	  var data = {OpenTokKey:OTKEY, sessionId: sessionId, token:token};
	  responder.view('video-chat', data );
  }

module.exports = {
  vchat: function (req, res) {
	  if(urlSessions[ req.params.room ] == undefined){
	    OpenTokObject.createSession(function(err, sessionId){
	      urlSessions[ req.params.room ] = sessionId;
	      sendResponse( sessionId, res );
	    });
	  } else{
	    sessionId = urlSessions[req.params.room];
	    sendResponse( sessionId, res );
	  }
  },
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
  
};

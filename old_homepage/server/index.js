var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;
handle["/sharing"]=requestHandlers.sharing;
handle["/login"]=requestHandlers.login;
handle["/register"]=requestHandlers.register;
handle["/show_svg"]=requestHandlers.show_svg;
handle["/pkuvis"]=requestHandlers.pkuvis;
handle["/addoncss"]=requestHandlers.addoncss;
server.start(router.route,handle);

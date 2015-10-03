/**
 * Created by heriipurnama on 03/10/15.
 */
var http = require('http');
var server = http.createServer(
    function (req, res) {
        res.write('wahahahahahahah jalan coy, Welcome to http nodejs');
        res.end();
    });
server.listen(8090);
console.log('Server is running on port 8090');
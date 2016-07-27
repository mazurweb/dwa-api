/**
 * Created by mikem on 7/26/2016.
 */
module.exports = function(express) {
    var router = express.Router();

    router.get('/', function(req, res){
        res.json({hello: 'world'});
    });

    return router;
}
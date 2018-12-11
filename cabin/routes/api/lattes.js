const router = require("express").Router();
const db = require("../../models");
// matches with /api/rooms/:roomid
router.route("//api/lattes")
    .get(function(req, res){
        db.Rooms.findOne({
            where: {
                id: req.params.roomid
            },
            include: db.Messages
        }).then(dbRoom => {
            res.json(dbRoom);
        });
    });
    
module.exports = router;
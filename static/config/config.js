define(function(require,exports,module){
    require('../js/globle.js');
    var investment = require('../js/investment.js');
    var security = require('../js/security.js');
    var zreoSave = require('../js/zreoSave.js');
    var xszy = require('../js/xszy.js');
    var plan = require('../js/plan.js');
    var index = require('../js/index.js');
    var footer = require('../js/footer');
    var login = require('../js/login');
    var login2 = require('../js/login2');
    var Index = {
        init:function(){
            console.log('hello my bbt');
            investment.init();
            security.init();
            zreoSave.init();
            xszy.init();
            plan.init();
            index.init();
            footer.init();
            login.init();
            login2.init();
        }
    }
    module.exports = Index;
})

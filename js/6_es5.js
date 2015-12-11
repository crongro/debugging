'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myObj = (function () {
    function myObj() {
        _classCallCheck(this, myObj);

        this.nClickCount = 0;
    }

    _createClass(myObj, [{
        key: "addClickNumber",
        value: function addClickNumber() {
            this.nClickCount++;
        }
    }, {
        key: "validNumber",
        value: function validNumber(data) {
            if (typeof data === "number" && data > 0) return true;else return false;
        }
    }, {
        key: "sendAjax",
        value: function sendAjax(sAjaxURL) {
            var _this = this;

            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", function (e) {
                var htData = JSON.parse(oReq.responseText);
                if (htData.userId) _this.addClickNumber();
            });
            oReq.open("GET", sAjaxURL);
            oReq.send();
        }
    }, {
        key: "count",
        get: function get() {
            if (this.validNumber(this.nClickCount)) return this.nClickCount;else return "not changed";
        }
    }]);

    return myObj;
})();

var elSecondLI = document.querySelector("li:nth-child(2)");
var sAjaxURL = "http://jsonplaceholder.typicode.com/posts/2";

var oMyObj = new myObj();
elSecondLI.addEventListener("click", oMyObj.sendAjax.bind(oMyObj, sAjaxURL), false);

//oMyobj.count 로 결과 확인

//# sourceMappingURL=6_es5.js.map
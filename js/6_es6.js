'use strict';

class myObj {
    constructor() {
        this.nClickCount = 0;
    }

    addClickNumber() {
        this.nClickCount++;
    }

    get count() {
        if(this.validNumber(this.nClickCount)) return this.nClickCount;
        else return "not changed";
    }

    validNumber(data) {
        if(typeof data === "number" && data > 0) return true;
        else return false;
    }

    sendAjax(sAjaxURL) {
        let oReq = new XMLHttpRequest();
        oReq.addEventListener("load", e => {
            let htData = JSON.parse(oReq.responseText);
            if(htData.userId) this.addClickNumber();
        });
        oReq.open("GET", sAjaxURL);
        oReq.send();
    }
}

let elSecondLI = document.querySelector("li:nth-child(2)");
let sAjaxURL = "http://jsonplaceholder.typicode.com/posts/2";

let oMyObj = new myObj();
elSecondLI.addEventListener("click", oMyObj.sendAjax.bind(oMyObj,sAjaxURL), false);


//oMyobj.count 로 결과 확인
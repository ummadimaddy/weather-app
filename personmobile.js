"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var MobileOperator_1 = require("./MobileOperator");
var person1 = new Person_1["default"](1, "madhav", 557);
var person2 = new Person_1["default"](2, "usha", 667);
var person3 = new Person_1["default"](3, "ahamed", 786);
var person4 = new Person_1["default"](4, "momo", 765);
var person5 = new Person_1["default"](5, "Roopa", 234);
var persons = [person1, person2, person3, person4, person5];
var mo1 = new MobileOperator_1.MobileOperator(557, "Vodafone", 4.0);
var mo2 = new MobileOperator_1.MobileOperator(667, "Jio", 4.5);
var mo3 = new MobileOperator_1.MobileOperator(786, "BSNL", 4.8);
var mo4 = new MobileOperator_1.MobileOperator(765, "Idea", 4.9);
var mo5 = new MobileOperator_1.MobileOperator(234, "Airtel", 3.5);
var operators = [mo1, mo2, mo3, mo4, mo5];
var mobilesearch = "Airtel";
for (var i = 0; i < operators.length; i++) {
    if (mobilesearch == MobileOperator_1.MobileOperator[i]) {
        for (var j = 0; j < persons.length; j++) {
            if (MobileOperator_1.MobileOperator[i].operatorId = Person_1["default"][j].persponId) {
                console.log("ID:" + Person_1["default"][i].personId, "Nmae:" + Person_1["default"][i].name, "Mobile Operator: " + Person_1["default"][i].mobileOperator);
            }
        }
    }
    else {
        console.log("invalid operator");
    }
}
for (var i = 0; i < operators.length - 1; i++) {
    for (var j = 0; j < operators.length - i - 1; i++) {
        if (MobileOperator_1.MobileOperator[j + 1].rating > MobileOperator_1.MobileOperator[j].rating) {
            var temp = MobileOperator_1.MobileOperator[j];
            MobileOperator_1.MobileOperator[j] = MobileOperator_1.MobileOperator[j + 1];
            MobileOperator_1.MobileOperator[j + 1] = temp;
        }
    }
}
console.log("person details who are using top 1 and 2 mobile operators are");
for (var i = 0; i < persons.length; i++) {
    if (MobileOperator_1.MobileOperator[0].operatorId == Person_1["default"][i].personId) {
        console.log("id: " + Person_1["default"][i].personId, "Nmae: " + Person_1["default"][i].name, "operator id" + Person_1["default"][i].mobileOperator);
    }
}

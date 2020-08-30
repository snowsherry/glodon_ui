"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button = function (props) {
    var type = props.type, size = props.size, children = props.children;
    react_1.useEffect(function () {
        console.log('hello,world');
    }, []);
    return react_1.default.createElement("button", { className: type + " " + size }, children);
};
exports.default = Button;
//# sourceMappingURL=index.js.map
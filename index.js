"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var b_ = require("b_");
function bind(tag, block, elem) {
    return factory.bind(void 0, tag, block, elem);
}
exports.bind = bind;
function factory(tag, block, elem) {
    var i = 3;
    var propsArg = arguments[i];
    var propsPassed = !!propsArg &&
        typeof propsArg === 'object' &&
        !Array.isArray(propsArg) &&
        !React.isValidElement(propsArg);
    var resultProps;
    if (propsPassed) {
        if ('mods' in propsArg) {
            var mods = propsArg.mods, props = __rest(propsArg, ["mods"]);
            resultProps = __assign({ className: b_(block, elem, mods) }, props);
        }
        else {
            resultProps = __assign({ className: b_(block, elem) }, propsArg);
        }
        i++;
    }
    else {
        resultProps = { className: b_(block, elem) };
    }
    var args = [tag, resultProps];
    while (i < arguments.length) {
        args.push(arguments[i]);
        i++;
    }
    return React.createElement.apply(React, args);
}
exports.factory = factory;

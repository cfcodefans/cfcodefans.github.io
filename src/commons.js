"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function compare(s1, s2) {
    return (s1 == s2) ? 0 : (s1 > s2 ? 1 : -1);
}
exports.compare = compare;
function deepTraverse(nodes, traverser) {
    var nodeStack = __spreadArrays(nodes.reverse());
    var result = [];
    while (nodeStack.length > 0) {
        var node = nodeStack.pop();
        result.push(node);
        var subNodes = traverser ? traverser(node) : node.children;
        nodeStack.push.apply(nodeStack, subNodes.reverse());
    }
    return result;
}
exports.deepTraverse = deepTraverse;

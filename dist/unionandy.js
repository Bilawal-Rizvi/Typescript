"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making a cup of ${kind} tea.`;
    }
    return `Making a cup of ${kind} tea.`;
}
function serverOOrder(msg) {
    if (msg) {
        return `Order received: ${msg}`;
    }
    return `No order received.`;
}
function isOrder(obj) {
    return obj && typeof obj.type === "string" && typeof obj.sugar === "number";
}
function ProcessOrder(order) {
    if (isOrder(order)) {
        // Process the order
        return `Processing order for ${order.type} tea with ${order.sugar} sugar.`;
    }
}
//# sourceMappingURL=unionandy.js.map
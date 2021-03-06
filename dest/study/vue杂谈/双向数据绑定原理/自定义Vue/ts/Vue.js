define(["require", "exports", "./Observer", "./Compile"], function (require, exports, Observer_1, Compile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vue = (function () {
        function Vue(options) {
            this.el = document.querySelector(options.el);
            this.data = options.data();
            this.methods = options.methods;
            this.start();
        }
        Vue.prototype.start = function () {
            var observer = new Observer_1.default(this.data);
            var compile = new Compile_1.default(this);
        };
        return Vue;
    }());
    exports.default = Vue;
});
//# sourceMappingURL=Vue.js.map
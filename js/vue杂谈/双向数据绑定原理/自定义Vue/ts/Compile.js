(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Watcher"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Watcher_1 = require("./Watcher");
    var Compile = /** @class */ (function () {
        function Compile(vm) {
            this.vm = vm;
            this.compile(this.vm.el);
        }
        Compile.prototype.compile = function (el) {
            var _this = this;
            var nodes = el.children;
            var _loop_1 = function (i) {
                var node = nodes[i];
                if (node.children.length > 0) {
                    this_1.compile(node);
                }
                // 解析 v-on:click 指令
                if (node.hasAttribute('v-on:click')) {
                    var attr = node.getAttribute('v-on:click');
                    // 监听原生事件
                    node.addEventListener('click', this_1.vm.methods[attr].bind(this_1.vm.data));
                }
                // 解析 v-if 指令
                if (node.hasAttribute('v-if')) {
                    var attr = node.getAttribute('v-if');
                    new Watcher_1.default(this_1.vm, attr, function (_val) {
                        console.log('v-if:', _val);
                        _val === true ? node.style.display = 'block' : node.style.display = 'none';
                    });
                }
                // 解析 v-model 指令
                if (node.hasAttribute('v-model')) {
                    var attr_1 = node.getAttribute('v-model');
                    new Watcher_1.default(this_1.vm, attr_1, function (_val) {
                        console.log('_val:', _val);
                        node.value = _val;
                    });
                    // 监听原生事件
                    node.addEventListener('input', function (e) {
                        _this.vm.data[attr_1] = e.target.value;
                        console.log('e.target.value:', e.target.value);
                    });
                }
                // 解析 v-text 指令
                if (node.hasAttribute('v-text')) {
                    var attr = node.getAttribute('v-text');
                    new Watcher_1.default(this_1.vm, attr, function (_val) {
                        console.log('innerText:', _val);
                        node.innerText = _val;
                    });
                }
            };
            var this_1 = this;
            for (var i = 0; i < nodes.length; i += 1) {
                _loop_1(i);
            }
        };
        return Compile;
    }());
    exports.default = Compile;
});
//# sourceMappingURL=Compile.js.map
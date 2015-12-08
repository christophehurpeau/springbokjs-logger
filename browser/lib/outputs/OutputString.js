'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OutputString = (function () {
    function OutputString() {
        _classCallCheck(this, OutputString);

        this._buffer = '';
    }

    _createClass(OutputString, [{
        key: 'write',
        value: function write(str, logLevel) {
            this._buffer += str;
            return this;
        }
    }, {
        key: 'string',
        get: function get() {
            return this._buffer;
        }
    }]);

    return OutputString;
})();

exports.default = OutputString;
//# sourceMappingURL=OutputString.js.map
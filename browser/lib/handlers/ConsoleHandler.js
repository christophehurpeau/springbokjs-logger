'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Handler2 = require('../Handler');

var _Handler3 = _interopRequireDefault(_Handler2);

var _LogLevel = require('../LogLevel');

var _LogLevel2 = _interopRequireDefault(_LogLevel);

var _LayoutDefault = require('../layouts/LayoutDefault');

var _LayoutDefault2 = _interopRequireDefault(_LayoutDefault);

var _formatterANSI = require('../formatters/formatterANSI');

var formatterANSI = _interopRequireWildcard(_formatterANSI);

var _outputConsole = require('../outputs/outputConsole');

var outputConsole = _interopRequireWildcard(_outputConsole);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debugValues = process.env.DEBUG && process.env.DEBUG.split(',') || [];

var ConsoleHandler = (function (_Handler) {
    _inherits(ConsoleHandler, _Handler);

    /**
     * @param {int|string} minLevel if int, see {@link LogLevel} ; if string, based on process.env.DEBUG
     */

    function ConsoleHandler(minLevel) {
        _classCallCheck(this, ConsoleHandler);

        if (typeof minLevel === 'string') {
            var debug = debugValues[0] === '*' || debugValues.indexOf(minLevel) !== -1;
            if (!debug && minLevel.includes('.')) {
                debug = debugValues.indexOf(minLevel.split('.')[0]) !== -1;
            }

            minLevel = debug ? _LogLevel2.default.ALL : _LogLevel2.default.WARN;
        }

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleHandler).call(this, minLevel, new _LayoutDefault2.default(formatterANSI), outputConsole));
    }

    return ConsoleHandler;
})(_Handler3.default);

exports.default = ConsoleHandler;
//# sourceMappingURL=ConsoleHandler.js.map
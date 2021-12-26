"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("./utils/assert"));
var objectToGetParams_1 = __importDefault(require("./utils/objectToGetParams"));
var createShareButton_1 = __importDefault(require("./hocs/createShareButton"));
function gabLink(url, _a) {
    var title = _a.title;
    assert_1.default(url, 'gab.url');
    return ('https://gab.com/compose' +
        objectToGetParams_1.default({
            url: url,
            text: title,
        }));
}
var GabShareButton = createShareButton_1.default('gab', gabLink, function (props) { return ({
    title: props.title,
}); }, {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: 'windowCenter',
});
exports.default = GabShareButton;

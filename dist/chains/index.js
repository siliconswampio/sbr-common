"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chains = exports._getInitializedChains = void 0;
const mainnet_json_1 = __importDefault(require("./mainnet.json"));
const ropsten_json_1 = __importDefault(require("./ropsten.json"));
const rinkeby_json_1 = __importDefault(require("./rinkeby.json"));
const kovan_json_1 = __importDefault(require("./kovan.json"));
const goerli_json_1 = __importDefault(require("./goerli.json"));
const yolov3_json_1 = __importDefault(require("./yolov3.json"));
const sbr_json_1 = __importDefault(require("./sbr.json"));
/**
 * @hidden
 */
function _getInitializedChains(customChains) {
    const names = {
        '1': 'mainnet',
        '3': 'ropsten',
        '4': 'rinkeby',
        '42': 'kovan',
        '5': 'goerli',
        '34180983699157880': 'yolov3',
        '8675309': 'sbr'
    };
    const chains = {
        mainnet: mainnet_json_1.default,
        ropsten: ropsten_json_1.default,
        rinkeby: rinkeby_json_1.default,
        kovan: kovan_json_1.default,
        goerli: goerli_json_1.default,
        yolov3: yolov3_json_1.default,
        sbr: sbr_json_1.default
    };
    if (customChains) {
        for (const chain of customChains) {
            const name = chain.name;
            names[chain.chainId.toString()] = name;
            chains[name] = chain;
        }
    }
    chains['names'] = names;
    return chains;
}
exports._getInitializedChains = _getInitializedChains;
/**
 * @deprecated this constant will be internalized (removed)
 * on next major version update
 */
exports.chains = _getInitializedChains();
//# sourceMappingURL=index.js.map
"use strict";
class temperatureControl {
    onEnableAutoTemperature(isEnabled, cb) {
        let error = 20;
        let status = false;
        status = !isEnabled ? true : false;
        cb(error, status);
    }
    onTemperatureChange(plusOrMinus, cb) {
        cb;
    }
}
exports.temperatureControl = temperatureControl;
//# sourceMappingURL=temperature.js.map
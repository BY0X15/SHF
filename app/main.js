"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const forms_1 = require('@angular/forms');
const router_deprecated_1 = require('@angular/router-deprecated');
const common_1 = require('./components/common');
platform_browser_dynamic_1.bootstrap(common_1.common, [router_deprecated_1.ROUTER_PROVIDERS, forms_1.disableDeprecatedForms(), forms_1.provideForms()]);
//# sourceMappingURL=main.js.map
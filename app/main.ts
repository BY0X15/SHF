import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms } from '@angular/forms';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {common} from './components/common';

bootstrap(common, [ROUTER_PROVIDERS,disableDeprecatedForms(),provideForms()]);

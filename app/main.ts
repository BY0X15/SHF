import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms } from '@angular/forms';
import {commonPage} from './components/commonPage';

bootstrap(commonPage, [disableDeprecatedForms(),provideForms()]);

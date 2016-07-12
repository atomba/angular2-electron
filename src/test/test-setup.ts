///<reference path="../../typings/browser/ambient/core-js/index.d.ts"/>

/**
 * This handles some of the bootstrapping for test executions.
 */
import {setBaseTestProviders} from '@angular/core/testing';
import {
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

import 'rxjs/Rx';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

setBaseTestProviders(
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

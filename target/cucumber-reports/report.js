$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TechGlobalPagination.feature");
formatter.feature({
  "name": "TechGlobal Pagination Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PaginationSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to Practices header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationSteps.user_moves_to_header_dropdown()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d110.0.5481.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Olenas-MacBook-Pro.local\u0027, ip: \u0027fd4f:cf16:af51:5650:1820:62a7:2009:4135%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.6.2\u0027, java.version: \u00271.8.0_341\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.100, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: /var/folders/dx/hfwl_l65371...}, goog:chromeOptions: {debuggerAddress: localhost:52643}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58f2f4a5f0ae2acd860c39501b8ba69b\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat steps.PaginationSteps.user_moves_to_header_dropdown(PaginationSteps.java:43)\n\tat ✽.user moves to Practices header dropdown(src/test/resources/features/TechGlobalPagination.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Frontend Testing header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_header_dropdown_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_card(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the main content of the Pagination Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user should see \"Pagination\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Pagination_heading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"World City Populations 2022\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Pagination_heading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Pagination_heading(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PaginationSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to Practices header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationSteps.user_moves_to_header_dropdown()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d110.0.5481.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Olenas-MacBook-Pro.local\u0027, ip: \u0027fd4f:cf16:af51:5650:1820:62a7:2009:4135%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.6.2\u0027, java.version: \u00271.8.0_341\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.100, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: /var/folders/dx/hfwl_l65371...}, goog:chromeOptions: {debuggerAddress: localhost:52841}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 05bf8012ae125037ffda4df4e3cf6aac\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat steps.PaginationSteps.user_moves_to_header_dropdown(PaginationSteps.java:43)\n\tat ✽.user moves to Practices header dropdown(src/test/resources/features/TechGlobalPagination.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Frontend Testing header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_header_dropdown_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_card(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the Pagination Page Next/Previous buttons",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user should see \"Previous\" button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Previous_button_is_disabled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Next\" button is enabled",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Next_button_is_enabled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_Next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Previous\" button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Next_button_is_enabled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Next button till it becomes disabled",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_Next_button_till_it_becomes_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Previous\" button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Next_button_is_enabled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Next\" button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_should_see_Previous_button_is_disabled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "PaginationSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to Practices header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationSteps.user_moves_to_header_dropdown()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d110.0.5481.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Olenas-MacBook-Pro.local\u0027, ip: \u0027fd4f:cf16:af51:5650:1820:62a7:2009:4135%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.6.2\u0027, java.version: \u00271.8.0_341\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.100, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: /var/folders/dx/hfwl_l65371...}, goog:chromeOptions: {debuggerAddress: localhost:53049}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 72bff55f948195a8c32eeb59b7fdccfe\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat steps.PaginationSteps.user_moves_to_header_dropdown(PaginationSteps.java:43)\n\tat ✽.user moves to Practices header dropdown(src/test/resources/features/TechGlobalPagination.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Frontend Testing header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_header_dropdown_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.user_clicks_on_card(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the Pagination Page cities content",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user should see city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Tokyo",
        "Country: Japan",
        "Population: 37,435,191"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.userShouldSeeCityWithInfoBelowAndAnImage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Delhi",
        "Country: India",
        "Population: 29,399,141"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.userShouldSeeCityWithInfoBelowAndAnImage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Shangai",
        "Country: China",
        "Population: 26,317,104"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.userShouldSeeCityWithInfoBelowAndAnImage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Sao Paulo",
        "Country: Brasil",
        "Population: 21,846,507"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.userShouldSeeCityWithInfoBelowAndAnImage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Mexico City",
        "Country: Mexico",
        "Population: 21,671,908"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PaginationSteps.userShouldSeeCityWithInfoBelowAndAnImage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});
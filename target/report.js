$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/PRATHEEP A/eclipse-workspace/CucumberSample_1/features/TwoDimentionalMap.feature");
formatter.feature({
  "name": "To add Customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "To add Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "The user should be telecom homepage and click the Add Customer",
  "keyword": "Given "
});
formatter.match({
  "location": "Sample1.the_user_should_be_telecom_homepage_and_click_the_Add_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should provide valid details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "aswin",
        "devaraj",
        "aswindevaraj@gmail.com",
        "chennai",
        "8765587987"
      ]
    },
    {
      "cells": [
        "maria",
        "charles",
        "charles@gmail.com",
        "chennai",
        "3365457656"
      ]
    },
    {
      "cells": [
        "johnson",
        "nickolas",
        "johnson@gmail.com",
        "chennai",
        "9976545334"
      ]
    },
    {
      "cells": [
        "praveen",
        "devaraj",
        "praveen@gmail.com",
        "chennai",
        "7299629464"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Sample1.the_user_should_provide_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should validate the Customer ID",
  "keyword": "Then "
});
formatter.match({
  "location": "Sample1.the_user_should_validate_the_Customer_ID()"
});
formatter.result({
  "status": "passed"
});
});
package org.test2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\PRATHEEP A\\eclipse-workspace\\CucumberSample_1\\features\\TwoDimentionalMap.feature",glue="org.test1",plugin={"html:target","json:target/report.json","rerun:target/failed.txt"},strict=false,dryRun=false,monochrome=true)

public class TestRunner {

}

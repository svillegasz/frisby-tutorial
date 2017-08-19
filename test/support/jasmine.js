const Jasmine = require('jasmine');
const Reporter = require('jasmine-reporters');
const HtmlConverter = require('jasmine-xml2html-converter');

const jasmine = new Jasmine();
const REPORT_PATH = 'reports/api';

jasmine.loadConfigFile('test/support/jasmine.json');

var reporterConfig = {
    savePath: 'reports/api',
    filePrefix: 'test-api-output',
    consolidateAll: false,
    modifyReportFileName: (genName, suit) =>  {
        return '-' + genName;
    }
};

const junitReporter = new Reporter.JUnitXmlReporter(reporterConfig);
jasmine.addReporter(junitReporter);

reporterConfig.consolidateAll = true;
const junitReporterConsolidate = new Reporter.JUnitXmlReporter(reporterConfig);
jasmine.addReporter(junitReporterConsolidate);

jasmine.onComplete(() => {

    
    testConfig = {
            reportTitle: 'Test Execution Report',
            outputPath: REPORT_PATH,
            something: "something else"
    };
    new HtmlConverter().from(REPORT_PATH + '/test-api-output.xml', testConfig);
});

jasmine.execute();
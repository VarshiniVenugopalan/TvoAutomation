const merge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

module.exports = (on, config) => {
    require('cypress-multiple-tab');
    require('cypress-parallel');
    require('cypress-log-to-output').install(on);
    require('cypress-xpath');
    require('cypress-plugin-snapshots/plugin')(on);
  
  on('after:run', (results) => {
    merge()
      .then((report) => generator.create(report))
      .then((report) => {
        // Do something with the generated report
        console.log(report);
      });
      return config;
    });
};

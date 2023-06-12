const fs = require('fs');
const path = require('path');
const merge = require('mochawesome-merge').merge;
const reportGenerator = require('mochawesome-report-generator');

async function generateReport() {
  try {
    const reportsDir = path.join(__dirname, 'cypress', 'reports');
    const files = fs.readdirSync(reportsDir).filter(file => file.endsWith('.json'));

    if (files.length === 0) {
      throw new Error('No JSON report files found');
    }

    const report = await merge({ files: files.map(file => path.join(reportsDir, file)) });

    await reportGenerator.create(report, {
      reportDir: reportsDir,
      reportTitle: 'Cypress Test Execution Report',
    });

    console.log('HTML report generated successfully!!');
  } catch (error) {
    console.error('Error generating HTML report:', error);
  }
}

generateReport();

'use strict';

const { Audit, NetworkRecords } = require('lighthouse');

class PageSizeOverAverageAudit extends Audit {
static get meta() {
	return {
	id: 'PageSizeOverAverageAudit',
	title: 'page size is below average of 2MB',
	failureTitle: 'page size is above average of 2MB',
	description: 'Checks if the tested page exeeds the average of 2MB',
	requiredArtifacts: ['devtoolsLogs'],
	};
}

static async audit(artifacts, context) {
	const devtoolsLog = artifacts.devtoolsLogs[Audit.DEFAULT_PASS];
	const requests = await NetworkRecords.request(devtoolsLog, context);

	let totalTransferSizeInMB = requests
		.map(request => request.transferSize)
		.reduce((prevValue, curValue) => prevValue + curValue) /1024/1024;

	let score = (totalTransferSizeInMB <= 2) ? 1 : 0

	return {
		score: score,
		displayValue: requests.length + ' requests transfered a total of '  + Math.round(totalTransferSizeInMB*100)/100 + ' MB.',
	};
}
}

module.exports = PageSizeOverAverageAudit;
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

	let totalTransferSize = 0;
	requests.forEach(req => {
		totalTransferSize += req.transferSize;
	})
	let score = 1

	if (totalTransferSize > 2 * 1024 * 1024) {
		score = 0
	}

	return {
		score: score,
		displayValue: requests.length + ' requests transfered '  + totalTransferSize/1024/1024 + 'MB.',
	};
}
}

module.exports = PageSizeOverAverageAudit;
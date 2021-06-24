'use strict';

const { Audit, NetworkRecords } = require('lighthouse');

class SecondAudit extends Audit {
	static get meta() {
		return {
			id: 'SecondAudit',
			title: 'foo',
			failureTitle: 'fooerr',
			description: 'bar',
			requiredArtifacts: [],
		};
	}

	static async audit(artifacts, context) {
		return {
			score: 1,
			displayValue: 'always 1',
		};
	}
}

module.exports = SecondAudit;
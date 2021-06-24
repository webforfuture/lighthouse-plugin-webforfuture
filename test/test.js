var assert = require('assert');
var PageSizeOverAverageAudit = require('../audits/pagesize-over-average');

describe('PageSizeOverAverageAudit', function () {
	describe('check meta', function () {

		it('id', () => {
			assert.strictEqual('PageSizeOverAverageAudit', PageSizeOverAverageAudit.meta.id);
		})

		it('title', () => {
			assert.strictEqual('Page size is below average of 2MB.', PageSizeOverAverageAudit.meta.title);
		})

		it('failureTitle', () => {
			assert.strictEqual('Page size is above average of 2MB.', PageSizeOverAverageAudit.meta.failureTitle);
		})

		it('description', () => {
			assert.strictEqual('The average website is 2MB large. If we can keep all our websites below that threshold page sizes will decrease over time.', PageSizeOverAverageAudit.meta.description);
		})

		it('requiredArtifacts', () => {
			assert.deepStrictEqual(['devtoolsLogs'], PageSizeOverAverageAudit.meta.requiredArtifacts);
		})

	});
});

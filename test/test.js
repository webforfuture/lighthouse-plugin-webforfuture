var assert = require('assert');
var PageSizeOverAverageAudit = require('../audits/pagesize-over-average');

describe('Array', function() {
  describe('#indexOf()', function() {

	it('check meta.id', () => {
		assert.strictEqual('PageSizeOverAverageAudit', PageSizeOverAverageAudit.meta.id);
	})

	it('check meta.title', () => {
		assert.strictEqual('Page size is below average of 2MB.', PageSizeOverAverageAudit.meta.title);
	})

	it('check meta.failureTitle', () => {
		assert.strictEqual('Page size is above average of 2MB.', PageSizeOverAverageAudit.meta.failureTitle);
	})
	
	it('check meta.description', () => {
		assert.strictEqual('The average website is 2MB large. If we can keep all our websites below that threshold page sizes will decrease over time.', PageSizeOverAverageAudit.meta.description);
	})

	it('check meta.requiredArtifacts', () => {
		assert.deepStrictEqual(['devtoolsLogs'], PageSizeOverAverageAudit.meta.requiredArtifacts);
	})

  });
});

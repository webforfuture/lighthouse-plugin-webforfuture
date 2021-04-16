'use strict';

const Audit = require('lighthouse').Audit;

const allowedTypes = new Set(['font', 'image', 'script', 'serviceworker', 'style', 'worker']);

class WebForFutureAudit extends Audit {
static get meta() {
	return {
	id: 'webforfuture',
	title: '::title::',
	failureTitle: '::failureTitle::',
	description: '::description::',
	requiredArtifacts: ['LinkElements'],
	};
}

static audit(artifacts) {
	return {
	score: 1,
	displayValue: `::displayValue::`,
	};
}
}

module.exports = WebForFutureAudit;
 'use strict';

 /** @type {LH.Config.Plugin} */
 module.exports = {
	audits: [
		{path: 'lighthouse-plugin-webforfuture/audits/pagesize-over-average.js'},
		{path: 'lighthouse-plugin-webforfuture/audits/second-audit.js'},
	],

	category: {
	 title: 'Web For Future',
	 description: 'Checking websites for sustainability criteria.',
	 auditRefs: [
		{id: 'PageSizeOverAverageAudit', weight: 1},
	 ],
   },
 };
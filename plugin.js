 'use strict';

 /** @type {LH.Config.Plugin} */
 module.exports = {
   audits: [{
	 path: 'lighthouse-plugin-webforfuture/audits/pagesize-over-average.js',
   }],
 
   category: {
	 title: 'Web For Future',
	 description: 'work in progress',
	 auditRefs: [
	   {id: 'PageSizeOverAverageAudit', weight: 1},
	 ],
   },
 };
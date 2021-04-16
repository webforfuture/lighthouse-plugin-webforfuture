 'use strict';

 /** @type {LH.Config.Plugin} */
 module.exports = {
   audits: [{
	 path: 'lighthouse-plugin-webforfuture/audits/preload-as.js',
   }],
 
   category: {
	 title: 'Web For Future',
	 description: 'work in progress',
	 auditRefs: [
	   {id: 'webforfuture', weight: 1},
	   {id: 'meta-description', weight: 1},
	 ],
   },
 };
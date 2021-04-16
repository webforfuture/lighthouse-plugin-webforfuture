module.exports = {
	ci: {
	  collect: {
		staticDistDir: './',
		url: ['https://webforfuture.org'],
		"settings": {
			"chromeFlags": "--no-sandbox"
		}
	  },
	  upload: {
		target: 'temporary-public-storage',
	  },
	},
  };
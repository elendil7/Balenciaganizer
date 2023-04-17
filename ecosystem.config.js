// * docs: https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
	apps: [
		{
			name: 'codeshack_tools',
			script: 'Start.ts',
			watch: true,
			ignore_watch: [
				'node_modules',
				'**/info*/**',
				'**/data*/**',
				'**/logs*/**',
				'**/tmp*/**',
				'**/storage*/**',
				'**/tests*/**',
				'**/package.json',
				'**/package-lock.json',
			],
			autorestart: true,
			log: 'system/logs/pm2',
			merge_logs: true,
			args: ['--update-env'],
		},
	],
};

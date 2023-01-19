module.exports = {
  apps: [
    {
      name: 'SCIDB backend',
      script: 'main.js',
      port: 9007,
      watch: ['server', '.server/index.js', 'public', '.env'],
      args: 'start',
      max_memory_restart: '60G',
      ignore_watch: ['node_modules'],
      log_date_format: 'YYYY-MM=DD HH:mm:ss',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}

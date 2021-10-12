module.exports = {
  apps: [{
    name: '5Me Dev',
    script: 'dist/server.js',
    exec_mode: 'cluster',
    instances: 1,
    autorestart: true,
    watch: false,
    ignore_watch: ['node_modules', 'logs'],
    max_memory_restart: '1G',
    env: {
      PORT: 2238,
      NODE_ENV: 'production',
    },
  }]
};

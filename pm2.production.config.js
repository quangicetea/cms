module.exports = {
    apps: {
      name: 'mexcBotCMS',
      script: './node_modules/nuxt/bin/nuxt.js',
      instances: 4,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_prod: {
        APP_ENV: 'prod'
      }
    }
  }
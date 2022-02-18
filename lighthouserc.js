module.exports = {
  ci: {
    // assert: {
    // preset: 'lighthouse:recommended'
    // assertions: {
    //   'uses-rel-preload': 'off',
    //   'uses-rel-preconnect': 'off'
    // 'categories:performance': ['error', { minScore: 0.8 }],
    // 'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
    // interactive: ['error', { maxNumericValue: 5200 }],
    // 'speed-index': ['error', { maxNumericValue: 4300 }],
    // 'resource-summary:script:size': ['error', { maxNumericValue: 170000 }],
    // 'resource-summary:total:size': ['error', { maxNumericValue: 300000 }]
    // }
    // },
    // Server Side Rendering, hence, it has it's own web server. So, we need to tell Lighthouse how to start the app with next’s built-in server
    collect: {
      staticDistDir: './.next/',
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage'
    },
    server: {
      port: 8080
      // storage: {
      //   storageMethod: 'sql',
      //   sqlDialect: 'sqlite',
      //   sqlDatabasePath: '/data/lhci.db'
      // }
    }
  }
};

exports.config = {

    /**
     * language of your feature files
     * options: french, spanish, norwegian, polish, german, russian
     */
    language: 'english',

    /**
     * set selenium host and port
     */
    selenium: {
        host: '127.0.0.1', 
        port: 4723
    },

    /**
     * webdriverio options
     *
     * - logLevel: stdout log level
     *   Options: *verbose* | *silent* | *command* | *data* | *result*
     *
     * - coloredLogs: Enables colors for log output
     *   default: true
     *
     * - singleton: Set to true if you always want to reuse the same remote
     *   default: false
     *
     * - waitforTimeout: Default timeout for all waitForXXX commands
     *   default: 500
     */
     
    options: {
        logLevel: 'silent'
    },

   
    capabilities: {
       
        'browserName': '',
        'appiumVersion': '1.5.0',
        'deviceName': '',
        'device-orientation': 'portrait',
        'platformVersion': '',
        'platformName': '',
        'app': ''
   
        
       

        
    },

    
    featureFiles: [
        'test/features/**/*.feature'
    ],

    
    env: {
        baseUrl: ''
    },

   
    mochaOpts: {
        reporter: 'spec',
        timeout: 100000,
        require: 'chai'
    }
};

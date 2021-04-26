import SNValidatorPackage from './SNValidatorPackage'
import { registerPlugin } from 'writer'

(() => {
    // Register the plugin with the Writer when registerPlugin() is available
    if(registerPlugin) {
        registerPlugin(SNValidatorPackage)
    }
    else {
        console.error('Register method not yet available')
    }
})()

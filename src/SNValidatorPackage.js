import { SNValidator } from './validator'

export default {
    name: 'SNValidator',
    id: 'se.codebet.snvalidator', 

    configure: function(config) {
        config.addValidator(SNValidator)
    }
}

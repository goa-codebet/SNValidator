import { SNValidator } from './validator'

export default {
    name: 'snvalidator',
    id: 'se.codebet.snvalidator', 

    configure: function(config) {
        config.addValidator(SNValidator)
    }
}

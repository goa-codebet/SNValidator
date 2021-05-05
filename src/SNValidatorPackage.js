import { SNValidator } from './validator'

export default {
    name: 'SNValidator',
    id: 'se.codebet.snvalidator', 

    configure: function(config) {
        config.addValidator(SNValidator)

        config.addLabel('Missing sections', {
            sv: 'Artikeln saknar sektioner',
            en: ''
        })
        config.addLabel('Missing publication channel', {
            sv: 'Artikeln saknar publiceringskanal',
            en: ''
        })
        config.addLabel('Missing headline', {
            sv: 'Artikeln saknar rubrik',
            en: ''
        })
    }
}

import { Validator } from 'writer'

class SNValidator extends Validator {
    constructor(...args) {
        super(...args)
    }

    static get name() {
        return 'SNValidator'
    }
    
    validate() {
        const pubStatus = this.newsItem.querySelector('pubStatus').getAttribute("qcode")
                
        const hasHeadline = (
            this.newsItem.querySelectorAll(`element[type='headline']`).length > 0 && 
            this.newsItem.querySelector(`element[type='headline']`).textContent.length > 0)
        const hasSection = this.newsItem.querySelectorAll(`link[type='x-im/section']`).length > 0
        const hasChannel = this.newsItem.querySelectorAll(`link[type='x-im/channel']`).length > 0

        if (['imext:draft', 'imext:approved', 'imext:done'].includes(pubStatus)) {
            if (!hasSection) {
                this.addWarning('Missing sections')
            }

            if (!hasChannel) {
                this.addWarning('Missing publication channel')
            }

            if (!hasHeadline) {
                this.addError('Missing headline')
            }
        }
        else if (['stat:usable', 'stat:withheld'].includes(pubStatus)) {
            if (!hasSection) {
                this.addError('Missing sections')
            }

            if (!hasChannel) {
                this.addError('Missing publication channel')
            }

            if (!hasHeadline) {
                this.addError('Missing headline')
            }
        }
    }
}

export { SNValidator }

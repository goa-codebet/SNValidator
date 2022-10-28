import writer from 'writer'

class SNValidator extends writer.Validator {
    constructor(...args) {
        super(...args)
    }

    static get name() {
        return 'SNValidator'
    }
    
    validate() {
        const pubStatus = this.newsItem.querySelector("pubStatus").getAttribute("qcode")
                
        const hasHeadline = (
            this.newsItem.querySelectorAll("element[type='headline']").length > 0 && 
            this.newsItem.querySelector("element[type='headline']").textContent.length > 0)
        const hasSection = this.newsItem.querySelectorAll("link[type='x-im/section']").length > 0
        const hasChannel = this.newsItem.querySelectorAll("link[type='x-im/channel']").length > 0
        const isMeta = this.newsItem.querySelector("link[type='x-im/articlecontenttype']").getAttribute('uri') === "im://articlecontenttype/meta";

        if (['imext:draft', 'imext:approved', 'imext:done'].includes(pubStatus)) {
            if (!hasSection) {
                this.addWarning(writer.api.getLabel('Missing sections'))
            }

            if (!hasChannel) {
                this.addWarning(writer.api.getLabel('Missing publication channel'))
            }

            if (!isMeta && !hasHeadline) {
                this.addError(writer.api.getLabel('Missing headline'))
            }
        }
        else if (['stat:usable', 'stat:withheld'].includes(pubStatus)) {
            if (!hasSection) {
                this.addError(writer.api.getLabel('Missing sections'))
            }

            if (!hasChannel) {
                this.addError(writer.api.getLabel('Missing publication channel'))
            }

            if (!isMeta && !hasHeadline) {
                this.addError(writer.api.getLabel('Missing headline'))
            }
        }
    }
}

export { SNValidator }

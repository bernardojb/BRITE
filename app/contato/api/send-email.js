require('dotenv').config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SG_API);

class LepyValidator {
    constructor() {
        this.rules = {
            name: new SimpleValidator(2),
            email: new EmailValidator(),
            phone: new SimpleValidator(),
            message: new SimpleValidator(),
            // orcamento: new SimpleValidator()
        }
    }

    cycle(fields) {
        let report = { fields: {}, valid: true }

        Object.entries(this.rules).forEach((entry) => {
            let [key, val] = entry
            report.fields[key] = val.validate(fields[key])
            // console.log(val.validate(fields[key]))
            if (val.validate(fields[key]) === false) report.valid = false
        })

        return report
    }
}
/* ================================== */
class ValidatorRule {
    constructor(config) {
        let cfg = {
            trim: true,
            case: 'insensitive',
            type: 'simple',
            mandatory: true
            // regex - requires type = regex
            // minLength
            // maxLength
        }

        cfg = { ...cfg, ...config }

        this.trim = cfg.trim
        this.case = cfg.case
        this.type = cfg.type
        this.mandatory = cfg.mandatory

        if ('regex' in cfg && cfg.type == 'regex')
            this.regex = new RegExp(cfg.regex)

        if ('minLength' in cfg)
            this.minLength = Number(cfg.minLength)

        if ('maxLength' in cfg)
            this.maxLength = Number(cfg.maxLength)
    }

    validate(input) {
        if (input === null || input === '' || input === undefined) {
            if (this.mandatory) return false
            else return true
        }

        if (this.trim) input = input.trim()
        if (this.case == 'insensitive') input = input.toLowerCase()
        if (this.minLength && input.length < this.minLength) return false
        if (this.maxLength && input.length > this.maxLength) return false

        if (this.type == 'regex') {
            return this.regex.test(input)
        }

        if (this.type == 'simple') {
            return true
        }

        return undefined
    }
}

class EmailValidator extends ValidatorRule {
    constructor() {
        super({ type: 'regex', regex: '^(([^<>()[\\]\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$' })
    }
}

class PhoneValidator extends ValidatorRule {
    constructor() {
        super({
            minLength: 3,
            maxLength: 20
        })
    }
}

class SimpleValidator extends ValidatorRule {
    constructor(minLength = false, maxLength = false) {
        let obj = {}
        if (minLength) obj.minLength = minLength
        if (maxLength) obj.maxLength = maxLength
        super(obj)
    }
}

class EmailContent {
    constructor(content) {
        if (typeof content === 'object' && content !== null) {
            if (!content.to) throw new Error('Missing receiver')
            this.to = content.to

            if (!content.from) throw new Error('Missing sender')
            this.from = content.from

            if (!content.subject) throw new Error('Missing subject')
            this.subject = content.subject

            if (!content.text) throw new Error('Missing text')
            this.text = content.text

            if (!content.html) throw new Error('Missing html body')
            this.html = content.html
        } else {
            throw new Error('Missing Email Content object')
        }
    }

    get() {
        return {
            to: this.to,
            from: this.from,
            subject: this.subject,
            text: this.text,
            html: this.html.replace(new RegExp('!\\[.*\\]', 'gi'), '')
        }
    }

    set(field, value) {
        return this.html = this.html.replace(new RegExp(`!\\[${field}\\]`, 'gi'), value)
    }

    bulkSet(fields) {
        Object.entries(fields).forEach((entry) => {
            let [key, val] = entry
            this.set(key, val)
        })
    }
}

/* ======================================= */

module.exports = (req, res) => {
    let validator = new LepyValidator()
    let msg = new EmailContent({
        to: 'bernardo@hokup.com.br',
        from: 'mail@hokup.com.br',
        subject: 'Novo orçamento',
        text: 'Site hokup',
        html: `
        <div style="max-width: 500px">
        <div style="padding: 25px; background: #111115; text-align: center; ">
            <a style="text-decoration: none; color:#A1A2B3"><img src="https://i.imgur.com/998VBnf.png" style="height: 40px; width: auto;"/></a>
        </div>
        <div style="background: #242834; padding: 50px 25px">
          <p style="text-align: start; color: white; font-weight:bold; font-size: 32px; margin-bottom:20px; ">
            Nova mensagem
          </p>
          <p style="color:#A1A2B3; margin-bottom: 40px; text-decoration:none;">De hokup.com.br </p>
            <div style="color: #A1A2B3; text-decoration: none;">
                <p style="color: #A1A2B3; text-decoration: none;">Nome <strong style="color:"white"> ![name]</strong>  </p>
                <p style="color: #A1A2B3; text-decoration: none;">Email <a href="mailto:![email]"><strong style="color:"white"> ![email]</strong></a></p>
                <p style="color: #A1A2B3; text-decoration: none;">Telefone <strong style="color:"white"> ![phone]</strong>  </p>
                <p style="color: #A1A2B3; text-decoration: none;">Onde nos encontrou <strong style="color:"white"> ![where]</strong>  </p>
                <p style="color: #A1A2B3; text-decoration: none;">Mensagem <strong style="color:"white"> ![message]</strong>  </p>
            </div>
        </div>
    </div>
        `
    })
    try {
        let vd = validator.cycle(req.body)
        if (!vd.valid) {
            res.status(422)
            res.send(vd)
        } else {
            msg.bulkSet(req.body)
            // console.log(msg.get())
            sgMail.send(msg.get()).then((response) => {
                console.log(response)
                res.status(202)
                res.send({ error: false })
            }).catch((err) => {
                console.log(err)
                res.status(500)
                res.send({ error: true, err }) // send the thrown error
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500)
        res.send({ error: true, err }) // send the thrown error   
    }
}
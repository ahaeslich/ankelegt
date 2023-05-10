const list = require('../list/list.json')
const listSchema = require('../list/list.schema.json')
const Ajv = require('ajv')

const ajv = new Ajv()
const validate = ajv.compile(listSchema)
const isValid = validate(list)

if (isValid) {
  console.log('All good! :)')
} else {
  const errors = validate.errors
  errors.forEach((error) => console.error(error))
}

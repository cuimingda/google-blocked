import {Command, Flags} from '@oclif/core'
import axios from 'axios'
const logger = require('node-color-log');

export default class Google extends Command {
  static description = 'test google blocked'

  public async run(): Promise<void> {

const self = this

logger.setDate(() => (new Date()).toLocaleTimeString())

axios.get('https://www.google.com')
.then(function(response) {
logger.success('google.com reachable.')
})
.catch(function(error) {
logger.error('google.com unreachable');
})





  }
}

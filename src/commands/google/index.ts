import {Command, Flags} from '@oclif/core'
import axios from 'axios'

export default class Google extends Command {
  static description = 'test google blocked'

  public async run(): Promise<void> {

const self = this

axios.get('https://www.google.com').catch(function(error) {
self.error('google.com unreachable');
}).then(function(response) {
console.log('google.com reachable.')
self.exit()
});





  }
}

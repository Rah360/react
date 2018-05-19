// const moment = require.requireActual("moment")
const moment = jest.genMockFromModule('moment');
export default (time=0)=>{
   return moment(time)
}
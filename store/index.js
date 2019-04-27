import tplData from './taoti.json'
debugger
export const state = () => ({
  testData: tplData
})
  
export const mutations = {
  increment (state) {
    state.counter++
  }
}
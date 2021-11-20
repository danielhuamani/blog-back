import Vue from 'vue'

class MemoryService {
  getAll() {
    return new Promise((resolve, reject) =>{
      resolve(Vue.$localstorage.get('memories', []))
    })
  }
  getById(id) {
    const memories = Vue.$localstorage.get('memories', [])
    return 
  }
  create(data) {

  }
  
}

export default MemoryService
import Storage from "@/storage"

export default {
  get() {
    return new Promise((resolve) => {
      let memories = Storage.get("memories", Object) || []
      console.log(memories, "memories")
      resolve({
        status: 200,
        data: memories
      })
    })
  },
  post(data) {
    return new Promise((resolve) => {
      let memories = Storage.get("memories", Object) || []
      let id = new Date().getTime()
      let memory = { ...data, id: id }
      memories.push(memory)
      Storage.set("memories", memories, Object)
      resolve({
        status: 200,
        data: memory
      })
    })
  }
}

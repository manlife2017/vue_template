let reg = {
    namespaced: true,
    state: { number:5 },
    mutations: { 
        increment (state) {
            state.number++
        }  
    },
    actions: {
        increment (context) {
            context.commit('increment')
        }
    },
  getters: {  }
}


export default reg;
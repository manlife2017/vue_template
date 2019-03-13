let login = {
    namespaced: true,
    state: { number:10 },
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


export default login;
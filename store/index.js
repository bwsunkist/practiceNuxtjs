import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return {
                message: 'This is the message in store!',
                counter : 0,
            };
        },
        mutations: {
            plusCounter: function(state){
                state.counter++;
            },
            plusCounterN: function(state, n){
                state.counter += n;
            }
        },
        actions:{
            twicePlus: function(context){
                context.commit('plusCounterN', 5);
                context.commit('plusCounterN', 5);
            }
        },
        // plugins: [
        //     createPersistedState()
        // ]
    })
}

export default createStore
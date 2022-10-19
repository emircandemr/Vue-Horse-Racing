import { createStore } from "vuex";

// localstorage ekleyerek istatistikte ekleyebilirsin (localstorage'ı kullanmak için npm install localstorage --save komutunu kullan)
const store = createStore({
    state : {
        isLoginPage : true,
        startFlag : false,
        finishFlag  : null,
        horses : [],
        selectedHorse : null,
    },

    mutations : {
        setStartFlag(state, payload){
            state.startFlag = payload;
        },
        setFinishFlag(state, payload) {
            state.finishFlag = payload;
        },
        setLoginPage(state, payload) {
            state.isLoginPage = payload;
        },
        setHorses (state, payload) {
            state.horses = payload;
        },
        setSelectedHorse (state, payload) {
            state.selectedHorse = payload;
        },
        updatePosition(state, payload) {
            const index = state.horses.findIndex(horse => horse.id === payload.id);
            state.horses[index].position = payload.position;
            // state.horses[index].speed = payload.speed;
            state.horses[index].count = payload.count;
        },
    }
})


export default store
import { createStore } from "vuex";

// localstorage ekleyerek istatistikte ekleyebilirsin (localstorage'ı kullanmak için npm install localstorage --save komutunu kullan)
const store = createStore({
    state : {
        finishFlag  : null,
        horseName : [],
        horses : [],
        scoreTable : [],
    },

    mutations : {
        setFinishFlag(state, payload) {
            state.finishFlag = payload;
        },

        setHorseName (state, payload) {
            state.horseName.push(payload);
        },

        setHorses (state, payload) {
            state.horses = payload;
        },

        updatePosition(state, payload) {
            const index = state.horses.findIndex(horse => horse.id === payload.id);
            state.horses[index].position = payload.position;
        },

        setScoreTable(state, payload) {
            state.scoreTable.push(payload);
        }
    }
})


export default store
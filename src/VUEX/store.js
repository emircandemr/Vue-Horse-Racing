import { createStore } from "vuex";

// localstorage ekleyerek istatistikte ekleyebilirsin (localstorage'ı kullanmak için npm install localstorage --save komutunu kullan)
const store = createStore({
    state : {
        isCountdownActive : false, // sayacın çalışıp çalışmadığını kontrol eder
        isBoardActive : false,
        isLoginPage : true, //Start Page
        startFlag : false, //  Start Button 
        finishFlag  : null, // Finish Flag ölçüsü
        horses : [], // horse list
        selectedHorse : null, // seçilen atın ID'si
    },
    mutations : {
        setCountdownActive(state, payload){
            state.isCountdownActive = payload;
        },
        setBoardActive(state, payload){
            state.isBoardActive = payload;
        },
        setStartFlag(state, payload){  // Start Buttonu aktif veya inaktif etmek için
            state.startFlag = payload;
        },
        setFinishFlag(state, payload) { // Finish bayrağının sola olan ölçüsünü tutar
            state.finishFlag = payload;
        },
        setLoginPage(state, payload) { // StartPage değişkenini değiştirir
            state.isLoginPage = payload;
        },
        setHorses (state, payload) { // Atların listesini tutar
            state.horses = payload;
        },
        setSelectedHorse (state, payload) { // Seçilen atı değiştirir
            state.selectedHorse = payload;
        },
        updatePosition(state, payload) {
            const index = state.horses.findIndex(horse => horse.id === payload.id);
            state.horses[index].position = payload.position;
            // state.horses[index].speed = payload.speed;
            state.horses[index].count = payload.count;
        },
    },
    getters : {
        getHorses(state) {
            return state.horses;
        }
    },
    

})


export default store
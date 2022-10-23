import { defineStore } from "pinia";

export const useHorseStore = defineStore("horse-store",{
    state : () => {
        return {
            horses : [],
            selectedHorse : null,
            startFlag : false,
            countdownActive : false,
            finishFlag : null,
            startStopWatch : false,
            leaderBoard : false
        }
    },
    actions : {
        setHorses(horses) {
            this.horses = horses;
        },
        setSelectHorse(horse) {
            this.selectedHorse = horse;
        },
        setStartFlag(statu) {
            this.startFlag = statu; 
        },
        setCountdownActive(statu) {
            this.countdownActive = statu;
        },
        setFinishFlag(finishFlag) {
            this.finishFlag = finishFlag;
        },
        setStartStopWatch(statu) {
            this.startStopWatch = statu;
        },
        setLeaderBoard(statu) {
            this.leaderBoard = statu;
        }
    },
    getters : {
        getCountdownActive() {
            return this.countdownActive;
        },
        sortHorses() {
            return this.horses.sort((a,b) => a.position - b.position);
        },
        getLeaderBoard() {
            return this.leaderBoard;
        }
    }
})
import { defineStore } from "pinia";

export const useHorseStore = defineStore("horse-store",{
    state : () => {
        return {
            horses : [],
            selectedHorse : null,
            startFlag : false,
            countdownActive : false,
            finishFlag : null,
            leaderBoard : false,
            sortHorse : [],
            isStatistic : false,
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
        setLeaderBoard(statu) {
            this.leaderBoard = statu;
        },
        setSortHorse(horse){
            this.sortHorse.push(horse);
        },
        setIsStatistic(statu) {
            this.isStatistic = statu;
        },
        resetPosition() {
            this.horses.forEach(horse => {
                horse.position = 0;
                horse.count = 0;
            })
        },
        againHandler() {
            this.setStartFlag(false);
            this.setCountdownActive(true);
            this.setLeaderBoard(false);
            this.sortHorse = [];
            this.resetPosition();
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
        },
        getWinnerCount () {
            return this.horses.map(horse => horse.winnerCount);
        },
        getHorseName (){
            return this.horses.map(horse => horse.name);
        }
    }
})
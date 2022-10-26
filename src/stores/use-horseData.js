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
            isStopwatch : false,
            sortedTry : [],
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
        setIsStopwatch(statu) {
            this.isStopwatch = statu;
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
        },
        setSortTyr(horse){
            this.sortedTry = horse;
        },
        updatedHorse(payload) {
            const index = this.sortedTry.findIndex(horse => horse.name === payload.name);
            this.sortedTry[index].position = payload.position;
        }

    },
    getters : {
        getCountdownActive() {
            return this.countdownActive;
        },
        sortHorses() {
            const isFinish = this.sortedTry.some(horse => horse.position < this.finishFlag);
            if(isFinish){
                return this.sortedTry.sort((a,b) => b.position - a.position);
            }
            // else{
            //     return this.sortedTry.sort((a,b) => b.stopwatch.seconds - a.stopwatch.seconds);
            // }
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
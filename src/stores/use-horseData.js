import { defineStore } from "pinia";

export const useHorseStore = defineStore("horse-store",{
    state : () => {
        return {
            horses : [],
            sortHorses : [],
            selectedHorse : null,
            finishFlagDistance : null,
            isRaceStarted : false,
            isCountdownActive : false,
            isLeaderBoardActive : false,
        }
    },
    actions : {
        setHorses(horses) { 
            this.horses = horses;
        },
        setSelectHorse(horse) { // Defines the selected horse to the state
            this.selectedHorse = horse;
        },
        setRaceStart(statu) { 
            this.isRaceStarted = statu; 
        },
        setCountdownActive(statu) { 
            this.isCountdownActive = statu;
        },
        setFinishFlag(finishFlag) { // Defines the distance value of the End Flag to the state.
            this.finishFlagDistance = finishFlag;
        },
        setLeaderBoard(statu) { 
            this.isLeaderBoardActive = statu;
        },
        setSortHorse(horse){ // Identifies each horse that finishes the race to the sortHorses list
            this.sortHorses.push(horse);
        },
        resetHorsePosition() { 
            this.horses.forEach(horse => {
                horse.position = 0;
                Object.keys(horse.stopwatch).forEach(key => {
                    horse.stopwatch[key] = 0;
                });
            })
        },
        playAgain() {  
            this.resetHorsePosition();
            this.setLeaderBoard(false);
            this.sortHorses = [];
        },
        updateHorsePosition(payload) { // Updates the position of the horse according to the distance value of the End Flag.
            const index = this.horses.findIndex(horse => horse.id === payload.id);
            this.horses[index] = payload;
        },
    },
    getters : {
        getCountdownActive() { 
            return this.isCountdownActive;
        },
        getLeaderBoard() {
            return this.isLeaderBoardActive;
        },
        getSortHorses(){ // Sorts the horses according to the position.
            const isRaceFinished = this.horses.some(horse => horse.position < this.finishFlagDistance);
            if(isRaceFinished){
                return this.horses.sort((a,b) => b.position - a.position);
            }
        },
        getisRaceStarted() {
            return this.isRaceStarted;
    }
}
})
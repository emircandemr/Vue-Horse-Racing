import { defineStore } from "pinia";

export const useHorseStore = defineStore("horse-store",{
    state : () => {
        return {
            horses : [],
            selectedHorse : null,
            startFlag : false,
            countdownActive : false,
            finishFlag : null,
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
        }
    },
    getters : {
        getCountdownActive() {
            return this.countdownActive;
        },
    }
        
})
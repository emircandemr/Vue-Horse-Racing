import { defineStore } from "pinia";

export const useHorseStore = defineStore("horse-store",{
    state : () => {
        return {
            horses : [],
            sortHorse : [],
            selectedHorse : null,
            finishFlagDistance : null,
            isRaceStarted : false,
            isCountdownActive : false,
            isLeaderBoardActive : false,
        }
    },
    actions : {
        setHorses(horses) { // Firestoredan gelen verileri state'e atar.
            this.horses = horses;
        },
        setSelectHorse(horse) { // Seçilen atı state'e atar.
            this.selectedHorse = horse;
        },
        setRaceStart(statu) { // Yarış başladığında state'i true yapar.
            this.isRaceStarted = statu; 
        },
        setCountdownActive(statu) { // Countdown başladığında state'i true yapar.
            this.isCountdownActive = statu;
        },
        setFinishFlag(finishFlag) { // Bitiş Bayrağının mesafe değerini state'e atar.
            this.finishFlagDistance = finishFlag;
        },
        setLeaderBoard(statu) { // Yarış Bittiğinde leaderboard açar.
            this.isLeaderBoardActive = statu;
        },
        setSortHorse(horse){ // Yarış Bittiğinde sıralanmış atları state'e atar.
            this.sortHorse.push(horse);
        },
        resetHorsePosition() { // Yarış bitince atların pozisyonlarını sıfırlar.
            this.horses.forEach(horse => {
                horse.position = 0;
                Object.keys(horse.stopwatch).forEach(key => {
                    horse.stopwatch[key] = 0;
                });
            })
        },
        playAgain() {  // Yarışı tekrar başlatır.
            this.setLeaderBoard(false);
            this.sortHorse = [];
            this.resetHorsePosition();
        },
        updatedHorsePosition(payload) { // Atların mesafelerini günceller.
            const index = this.horses.findIndex(horse => horse.id === payload.id);
            this.horses[index] = payload;
        },
    },
    getters : {
        getCountdownActive() { // Countdown açılıp açılmadığını döndürür
            return this.isCountdownActive;
        },
        getLeaderBoard() { // Leaderboard açılıp açılmadığını döndürür.
            return this.isLeaderBoardActive;
        },
        getSortHorses(){
            const isRaceFinished = this.horses.some(horse => horse.position < this.finishFlagDistance);
            if(isRaceFinished){
                return this.horses.sort((a,b) => b.position - a.position);
            }
        } 
    }
})
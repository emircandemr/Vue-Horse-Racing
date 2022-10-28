import { defineStore } from "pinia";

export const useHorseStore = defineStore("horse-store",{
    state : () => {
        return {
            horses : [],
            selectedHorse : null,
            sortHorse : [],
            finishFlag : null,
            startFlag : false,
            countdownActive : false,
            leaderBoard : false,
            isStatistic : false,
        }
    },
    actions : {
        setHorses(horses) { // Firestoredan gelen verileri state'e atar.
            this.horses = horses;
        },
        setSelectHorse(horse) { // Seçilen atı state'e atar.
            this.selectedHorse = horse;
        },
        setStartFlag(statu) { // Yarış başladığında state'i true yapar.
            this.startFlag = statu; 
        },
        setCountdownActive(statu) { // Countdown başladığında state'i true yapar.
            this.countdownActive = statu;
        },
        setFinishFlag(finishFlag) { // Bitiş Bayrağının mesafe değerini state'e atar.
            this.finishFlag = finishFlag;
        },
        setLeaderBoard(statu) { // Yarış Bittiğinde leaderboard açar.
            this.leaderBoard = statu;
        },
        setSortHorse(horse){ // Yarış Bittiğinde sıralanmış atları state'e atar.
            this.sortHorse.push(horse);
        },
        setIsStatistic(statu) { // Statistic sayfasını açar.
            this.isStatistic = statu;
        },
        resetPosition() { // Yarış bitince atların pozisyonlarını sıfırlar.
            this.horses.forEach(horse => {
                horse.position = 0;
                Object.keys(horse.stopwatch).forEach(key => {
                    horse.stopwatch[key] = 0;
                });
            })
        },
        againHandler() {  // Yarışı tekrar başlatır.
            this.setLeaderBoard(false);
            this.sortHorse = [];
            this.resetPosition();
        },
        updatedHorse(horse) { // Atların mesafelerini günceller.
            this.horses.forEach((item,index) => {
                if(item.id === horse.id) {
                    this.horses[index] = horse;
                }
            })
        },
    },
    getters : {
        getHorses : (state) => { 
            return state.horses;
        },
        getCountdownActive() { // Countdown açılıp açılmadığını döndürür
            return this.countdownActive;
        },
        getLeaderBoard() { // Leaderboard açılıp açılmadığını döndürür.
            return this.leaderBoard;
        },
        getWinnerCount () { // Yarışı kazanan atın sayısını döndürür.
            return this.horses.map(horse => horse.winnerCount);
        },
        getHorseName (){ 
            return this.horses.map(horse => horse.name);
        },
        getSortHorses(){
            // const horseList = this.horses
            const isRaceFinished = this.horses.some(horse => horse.position < this.finishFlag);
            if(isRaceFinished){
                return this.horses.sort((a,b) => b.position - a.position);
            }
        } 
    }
})
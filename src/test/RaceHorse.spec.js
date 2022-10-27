// import { beforeEach, describe, it, expect } from "vitest";
// import { createPinia, setActivePinia } from "pinia";
// import RaceHorse from "../components/Race/RaceHorse.vue";
// import {shallowMount} from "@vue/test-utils";
// import {useHorseStore} from  "../stores/use-horseData"

// describe("RaceHorse.vue", () => {
//     let pinia;
//     let wrapper = null;
    
//     beforeEach(() => {
//         pinia = createPinia();
//         setActivePinia(pinia);
//         wrapper = shallowMount(RaceHorse , {
//             global: {
//                 plugins: [pinia],
//                 propsData: { 
//                     horse :
//                     {
//                     "name" : "horse1",
//                     "img" : "https://avatars.githubusercontent.com/u/11247099?v=4",
//                     "speed" : 10,
//                     "position" : 0,
//                     "isFinished" : false,
//                     "stopwatch" : {
//                         "minute" : 0,
//                         "seconds" : 0,
//                         "milliseconds" : 0
//                     }
//                     },
//                     index : 0,
//                 }
//             }})
            
// })

//     test("should render", () => {
//         expect(wrapper.props().horse).toBe({
//             "name" : "horse1",
//             "img" : "https://avatars.githubusercontent.com/u/11247099?v=4",
//             "speed" : 10,
//             "position" : 0,
//             "isFinished" : false,
//             "stopwatch" : {
//                 "minute" : 0,
//                 "seconds" : 0,
//                 "milliseconds" : 0
//                 }
//                 })
//     }); 
// })
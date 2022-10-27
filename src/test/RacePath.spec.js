import { beforeEach, describe, it, expect } from "vitest";
import { createPinia } from "pinia";
import RacePath from "../components/Race/RaceFinishFlag.vue";
import {mount,shallowMount} from "@vue/test-utils";

describe("RacePath.vue", () => {
    let pinia;
    let wrapper = null;

    beforeEach(() => {
        pinia = createPinia();
        wrapper = shallowMount(RacePath , {
            global: {
                plugins: [pinia],
        }})
})

    test("should render", () => {
      
        expect(wrapper.exists()).toBe(true);
    }); 

 

})
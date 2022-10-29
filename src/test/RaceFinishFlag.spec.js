import { beforeEach, describe, it, expect } from "vitest";
import { createPinia } from "pinia";
import RaceFinishFlag from "../components/Race/RaceFinishFlag.vue";
import {mount,shallowMount} from "@vue/test-utils";

describe("RaceFinishFlag.vue", () => {
    let pinia;
    let wrapper = null;

    beforeEach(() => {
        pinia = createPinia();
        wrapper = shallowMount(RaceFinishFlag , {
            global: {
                plugins: [pinia],
        }})
})

    test("should render", () => {
        expect(wrapper.exists()).toBe(true);
    }); 

    // test("should render finish flag", () => {
    //     expect(wrapper.find(".finish--line").exists()).toBe(true);
    // });

})
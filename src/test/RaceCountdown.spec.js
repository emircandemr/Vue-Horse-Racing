import { beforeEach, describe, it, expect } from "vitest";
import { createPinia } from "pinia";
import RaceCountdown from "../components/Race/RaceCountdown.vue";
import {mount,shallowMount} from "@vue/test-utils";

describe("RaceCountdown.vue", () => {
    let pinia;
    let wrapper = null;

    beforeEach(() => {
        pinia = createPinia();
        wrapper = shallowMount(RaceCountdown , {
            global: {
                plugins: [pinia],

        }})
})

    test("should render", () => {
        expect(wrapper.exists()).toBe(true);
    });

})
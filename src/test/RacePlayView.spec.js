import { beforeEach, describe, it, expect } from "vitest";
import  RaceStartView from "../views/RaceStartView.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";
import RacePath from "../components/Race/RacePath.vue";
import { createPinia } from "pinia";
import {mount,shallowMount} from "@vue/test-utils";

describe("RaceStartView.vue", () => {
    let pinia;
    let wrapper = null;

    beforeEach(() => {
        pinia = createPinia();
        wrapper = shallowMount(RaceStartView , {
            global: {
                plugins: [pinia],
                // stubs: {
                //     Sidebar: true,
                //     RacePath: true
                // }
        }})
})

    test("should render", () => {
        expect(wrapper.exists()).toBe(true);
    }); 

    // test("should render sidebar", () => {
    //     expect(wrapper.findComponent(RacePath).exists()).toBe(true);
    // });

    // test("should render sidebar", async () => {
    //     const sidebar = await wrapper.findComponent(Sidebar);
    //     expect(sidebar.exists()).toBe(true);
    // });

})

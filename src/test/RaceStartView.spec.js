import { beforeEach, describe, it, expect } from "vitest";
import  RaceStartView from "../views/RaceStartView.vue";
import { createPinia, setActivePinia } from "pinia";
import {mount} from "@vue/test-utils";

describe("RaceStartView", () => {
    let pinia;
    let wrapper = null;
    
    beforeEach(() => {
        pinia = createPinia();
        setActivePinia(pinia);
        wrapper = mount(RaceStartView , {
            global: {
                plugins: [pinia]
            }
        });
    });
    
    it("should render a button", () => {
        // expect(wrapper.find("button").exists()).toBe(true);
        // expect(wrapper.find("button").text()).toBe("Start");
        expect(wrapper.html()).include("Start");
        // expect(wrapper.exists()).toBe(true);
        // expect(wrapper.contain("Choose Your Avatar")).toBe(true);
    });
});


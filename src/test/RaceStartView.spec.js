import { beforeEach, describe, it, expect } from "vitest";
import  RaceStartView from "../views/RaceStartView.vue";
import { createPinia, setActivePinia } from "pinia";
import {mount} from "@vue/test-utils";
import {useHorseStore} from  "../stores/use-horseData"

describe("RaceStartView", () => {
    let pinia;
    let wrapper = null;
    
    beforeEach(() => {
        pinia = createPinia();
        setActivePinia(pinia);
        wrapper = mount(RaceStartView , {
            global: {
                plugins: [pinia]
            },
            props : {
                title : "Choose Your Avatar",

            },
        });
    });

    test("should render", () => {
        expect(wrapper.exists()).toBe(true);
    });

    test("should title rendered" , () => {
        expect(wrapper.find("h1").text()).toBe("Choose Your Avatar");
    })

    test("should button clicked" , async () => {
        const store = useHorseStore()
        expect(store.isCountdownActive).toBe(false)
        // await wrapper.findAll("button").trigger("click")
        // const button = await wrapper.findAll('[data-test="select-horse"]')
    })
    
})

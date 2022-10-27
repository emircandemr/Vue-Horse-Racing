import {mount} from '@vue/test-utils'
import { beforeEach, describe, it, expect } from "vitest";
import Avatar from '../components/Shared/Avatar.vue'
import { createPinia } from "pinia";


describe("Avatar.vue", () => {
    let pinia;
    beforeEach(() => {
        pinia = createPinia();
    });
    it("renders props when passed", () => {
        const wrapper = mount(Avatar, {
            global: {
                plugins: [pinia],

            },
            props: { 
                item :{
                "img" : "https://avatars.githubusercontent.com/u/11247099?v=4",
            },
            size : 100,
            }
        });
        expect(wrapper.find("img").attributes("src")).toBe("https://avatars.githubusercontent.com/u/11247099?v=4");
        expect(wrapper.find(".avatar").exists()).toBeTruthy();
        expect(wrapper.find(".avatar").attributes("style")).toBe("width: 100px; height: 100px;");
    })
})
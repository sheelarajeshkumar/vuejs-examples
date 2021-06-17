const app = Vue.createApp({
    data(){
        return {
            goals: [],
            enterValue: '',
            label: 'Goal',
            selected: false
        };
    },
    methods: {
        addGoal(){
            this.selected = !this.selected;
            this.goals.push(this.enterValue);
            this.enterValue = '';
        }
    },
}).mount("#app");


console.log(VUE);

const {createApp, ref} = Vue;
const app = createApp({
    template:`
    <h1>Hola Mundo</h1>
    <p>Desde app.js</p>`
    , 

    setup(){
        const nuntius = ref("I'm Batman");
        setTimeout(() => {
            nuntius.value = "Soy Goku";
            console.log(nuntius);
        }, 1000)
        return {
            nuntius,
            auctor,
        }
    }
});

app.mount('#myApp')
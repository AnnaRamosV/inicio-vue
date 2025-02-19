const {createApp, ref, computed} = Vue;

const primumSententiae = [
    { sententia: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', auctor: 'Harvey Dent, The Dark Knight' },
    { sententia: 'I believe what doesn\'92t kill you simply makes you, stranger.', auctor: 'The Joker, The Dark Knight' },
    { sententia: 'Your anger gives you great power. But if you let it, it will destroy you\'85 As it almost did me', auctor: 'Henri Ducard, Batman Begins' },
    { sententia: 'You either die a hero or live long enough to see yourself become the villain.', auctor: 'Harvey Dent, The Dark Knight' },
    { sententia: 'If you\'92re good at something, never do it for free.', auctor: 'The Joker, The Dark Knight' },
    { sententia: 'Yes, father. I shall become a bat.', auctor: 'Bruce Wayne/Batman, Batman: Year One' },
]


const app = createApp ({
    setup(){

        const revelareAuctor = ref(true);
        const nuntiusNovus = ref("");
        const sententiae = ref(primumSententiae);

        const summaSentencias = computed(()=> {
            return sententiae.value.length;
        })

        const vectisAuctor = () => {
            revelareAuctor.value = !revelareAuctor.value;
        }
        const addereSententia = () => {
            sententiae.value.unshift({sententia: nuntiusNovus.value, auctor: "Anna Ramos"})
            nuntiusNovus.value = "";
        }




        return{
            primumSententiae,
            revelareAuctor,
            nuntiusNovus,
            vectisAuctor,
            addereSententia,
            addereSententia,
        }
    }
})

app.mount("#myApp");


<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route=useRoute();
const API_URL='http://localhost:3000';

const tutor=ref(null);

async function carregarTutor() {
        const idTutor = route.params.id;


   

   const respostaTutor=await fetch(`${API_URL}/tutores/${idTutor}`);
    tutor.value= await respostaTutor.json();
    console.log('tutor',tutor.value);
}
onMounted(carregarTutor);
</script>

<template>
    <section v-if="tutor==null">
<p>carregando....</p>
    </section>
    <section v-else>
    <h1>id pet:{{ tutor.id }}</h1>
    <p>tutor:{{ tutor?.nome }}</p>
    <h5>telefone:{{ tutor.telefone }}</h5>
    </section>
</template>
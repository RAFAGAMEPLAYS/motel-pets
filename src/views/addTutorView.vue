 
<script setup>
import { onMounted } from 'vue';
import { RouterLink,useRouter } from 'vue-router';
import { ref } from 'vue';

const router=useRouter();
const API_URL='http://localhost:3000';

const tutores=ref([]);
const novoTutor=ref({
  nome:'',
  telefone:'',
  
});

async function carregarTutores() {
  const resposta=await fetch(`${API_URL}/tutores`);

  tutores.value=await resposta.json();
}

async function salvarTutor() {
  await fetch(`${API_URL}/tutores`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(novoTutor.value)
  }); 

  router.push('/tutores');
}

onMounted(carregarTutores);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de tutores</h1>
      <p class="text-body-secondary mb-0">Cadastro de tutores no sistema.</p>
    </header>

    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'addTutor' }"
    >
      Adicionar Tutor
    </RouterLink>
    <form class="row" @submit.prevent="salvarTutor">
      <div class="col-md-6">
        <label for="nome" class="form-label">
          nome do Tutor:
        </label>
        <input v-model="novoTutor.nome" required id="nome" class="form-control" type="text">
      </div>
      <div class="col-md-6">
        <label for="nome" class="form-label">
          telefone:
        </label>
        <input v-model="novoTutor.telefone" required id="telefone" class="form-control" type="text">
      </div>

      
      <div class="col-12 d-flex gap-2">
        <button class="btn btn-sucess" type="submit">salvar tutor</button>
      </div>
    </form>
  </div>
</template>
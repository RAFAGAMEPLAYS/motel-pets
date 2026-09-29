 
<script setup>
import { onMounted } from 'vue';
import { RouterLink,useRouter } from 'vue-router';
import { ref } from 'vue';

const router=useRouter();
const API_URL='http://localhost:3000';

const tutores=ref([]);
const novoPet=ref({
  nome:'',
  especie:'',
  tutorId:'',
});

async function carregarTutores() {
  const resposta=await fetch(`${API_URL}/tutores`);

  tutores.value=await resposta.json();
}

async function salvarPet() {
  await fetch(`${API_URL}/pets`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(novoPet.value)
  }); 

  router.push('/pets');
}

onMounted(carregarTutores);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">Cadastro de Pets no sistema.</p>
    </header>

    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'addPet' }"
    >
      Adicionar Pet
    </RouterLink>
    <form class="row" @submit.prevent="salvarPet">
      <div class="col-md-6">
        <label for="nome" class="form-label">
          nome do pet:
        </label>
        <input v-model="novoPet.nome" required id="nome" class="form-control" type="text">
      </div>
      <div class="col-md-6">
        <label for="especie" class="form-label">especie:</label>
        <select class="form-select" required name="especie" id="especie" v-model="novoPet.especie">
          <option value="" disabled>selecione a especie</option>
          <option value="cachoro">cachoro</option>
          <option value="gato">gato</option>
          <option value="coelho">coelho</option>
          <option value="tintão">tintão</option>
        </select>
      </div>

      <div class="col-md-6">
        <label for="tutor" class="form-label">tutor</label>
        <select name="tutor" id="tutor" class="form-select" v-model="novoPet.tutorId">
          <option value="" disabled>selecione o tutor</option>
          <option v-for="tutor in tutores" :key="tutor.id">{{ tutor.nome }}</option>
        </select>
      </div>
      <div class="col-12 d-flex gap-2">
        <button class="btn btn-sucess" type="submit">salvar pet</button>
      </div>
    </form>
  </div>
</template>
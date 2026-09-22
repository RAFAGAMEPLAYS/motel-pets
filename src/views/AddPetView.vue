 
<template>
    <div>
    <header class="mb-4">
        <h1 class="text-2xl font bold">adicionar pet</h1>
        <p class="text-body-secondary mb-0">
            lista de pets cadastrados no sistema
        </p>
    </header>
    <RouterLink class="btn btn-primary" :to="{ name: 'PetsView' }">Novo Pet</RouterLink>
    </div>
</template>
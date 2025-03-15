<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-6">Panou de Administrare</h1>
    
    <div v-if="user?.isAdmin">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Card pentru gestionarea utilizatorilor -->
        <div class="border rounded-lg p-4 bg-white shadow-sm">
          <h2 class="text-lg font-semibold mb-3">Gestionare Utilizatori</h2>
          <p class="text-gray-600 mb-4">Adaugă, editează sau șterge utilizatori și gestionează rolurile lor.</p>
          <UButton to="/admin/users" color="primary">
            Gestionare Utilizatori
          </UButton>
        </div>
        
        <!-- Card pentru gestionarea pacienților -->
        <div class="border rounded-lg p-4 bg-white shadow-sm">
          <h2 class="text-lg font-semibold mb-3">Gestionare Pacienți</h2>
          <p class="text-gray-600 mb-4">Administrează datele pacienților și dosarele medicale.</p>
          <UButton to="/admin/patients" color="primary">
            Gestionare Pacienți
          </UButton>
        </div>
        
        <!-- Card pentru rapoarte -->
        <div class="border rounded-lg p-4 bg-white shadow-sm">
          <h2 class="text-lg font-semibold mb-3">Rapoarte</h2>
          <p class="text-gray-600 mb-4">Generează și vizualizează rapoarte cu statistici ale cabinetului.</p>
          <UButton to="/admin/reports" color="primary">
            Rapoarte
          </UButton>
        </div>
      </div>
    </div>
    
    <div v-else class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      Nu ai permisiuni de administrator pentru a accesa această pagină.
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["authenticated", "admin"]  // Folosește ambele middleware-uri
});

const { user } = useUserSession();
</script>
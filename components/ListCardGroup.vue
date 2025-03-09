<script setup>
// Definim o proprietate pentru imaginea de fundal
const props = defineProps({

})
</script>

<template>
  <section 
    class="w-full py-8 md:py-10 lg:py-12 relative bg-cover bg-center bg-no-repeat"
  >
    
  
    
    <!-- Conținutul secțiunii -->
    <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
       <ListCard
       title="Luni-Joi"
       subtitle="08:00 - 16:00"
       :content="[
        '08:00 - 10:00 – Programări pentru consultații generale',
        '10:00 - 12:00 – Consultații copii și vaccinări',
        '12:00 - 13:00 – Pauză',
        '13:00 - 15:00 – Consultații adulți și management boli cronice',
        '15:00 - 16:00 – Eliberare adeverințe medicale și rețete'
       ]"
       />
       <ListCard
       title="Vineri"
       subtitle="10:00 - 16:00"
       :content="[
        '10:00 - 12:00 – Consultații pentru gravide și controale preventive',
        '12:00 - 13:00 – Pauză',
        '13:00 - 15:00 – Consultații adulți și management boli cronice',
        '15:00 - 16:00 – Eliberare adeverințe medicale și rețete'
       ]"
       />
       <ListCard
       title="Sambata-Duminica"
       subtitle="Telefonic 12:00 - 16:00"
       :content="[
        'Program doar pentru urgentele medicale majore.',
        'Program de urgenta disponibil telefonic 12:00-16:00',
       ]"
       />
      </div>
    </div>
  </section>
</template>
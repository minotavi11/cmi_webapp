<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
const toast = useToast();
const isLoading = ref(false);

const props = defineProps({
  title: {
    type: String,
    default:'Sanatatea ta, pe primul loc!'
  },
  content: {
    type: String,
    default:'Medic Primar in Medicina de Familie, Jeanne Jane Doe'
  },
  src: {
    type: String,
    required: false,
    default:'doctorWriting.png'
  },
});

const state = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  terms: true,
})

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Email obligatoriu' });
  if (!state.password) errors.push({ path: 'password', message: 'Parola obligatorie' });
  if (!state.confirmPassword) errors.push({ path: 'confirmPassword', message: 'Confirmare parola obligatorie' });
  if (state.password !== state.confirmPassword) errors.push({ path: 'confirmPassword', message: 'Parolele nu coincid' });
  if (state.password.length < 8) errors.push({ path: 'password', message: 'Parola trebuie să aibă cel puțin 8 caractere' });
  if (!state.terms) errors.push({ path: 'terms', message: 'Trebuie să accepți termenii și condițiile' });

  return errors;
}

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    isLoading.value = true;

    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
        terms: state.terms,
      },
    });

    toast.add({
      title: 'Succes!',
      description: 'Contul a fost creat cu succes. Te poți autentifica acum.',
      color: 'green',
    });

    await navigateTo('/login');
  } catch (error) {
    toast.add({
      title: 'Eroare',
      description: error.data?.message || 'A apărut o eroare la înregistrare.',
      color: 'red',
    });
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="relative flex justify-center items-center flex-col h-screen md:h-[70vh] md:min-w-fit md:flex-row lg:justify-start bg-none border">
    <div class="flex flex-col justify-center items-center h-1/2 md:h-full md:w-1/2 px-4">
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo" class="h-10">
      </NuxtLink>

      <h1 class="text-xl md:text-3xl mb-6">Bine ai venit!</h1>

      <UForm :validate="validate" :state="state" class="space-y-4 w-full max-w-sm" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="Adresa ta de email" required />
        </UFormGroup>

        <UFormGroup label="Parola" name="password">
          <UInput v-model="state.password" type="password" placeholder="Parola ta" required />
        </UFormGroup>

        <UFormGroup label="Confirmare Parola" name="confirmPassword">
          <UInput v-model="state.confirmPassword" type="password" placeholder="Confirmă parola" required />
        </UFormGroup>

        <UCheckbox v-model="state.terms" label="Sunt de acord cu termenii și condițiile." name="terms" required />

        <div class="flex items-center justify-between mt-6">
          <UButton type="submit" block class="w-40" :loading="isLoading">
            Înregistrare
          </UButton>

          <p class="text-sm text-gray-600 whitespace-nowrap">
            Ai deja cont? <UButton variant="link" to="/login" class="p-0">Conectare</UButton>
          </p>
        </div>
      </UForm>
    </div>

    <div class="bg-cover bg-no-repeat flex justify-center items-center bg-center flex-col md:flex-row min-w-full md:min-w-fit md:w-1/2 h-1/2 md:h-full md:border" :style="{ backgroundImage: `url(${src})` }">
      <div class="w-full h-full py-10 gap-y-3 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center">
        <h1 class="text-white text-xl md:text-3xl">
          {{ title }}
        </h1>
        <UAvatar size="3xl" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
        <p class="text-white text-lg md:text-xl">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
// Define props
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
  email: undefined,
  password: undefined,
  rememberMe: false
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Email obligatoriu' })
  if (!state.password) errors.push({ path: 'password', message: 'Parola obligatorie' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <div :class="['relative flex justify-center items-center flex-col h-screen md:h-[70vh]', 
   'md:min-w-fit md:flex-row lg:justify-start bg-none border',
   ]">

   

    <div :class="['flex flex-col justify-center items-center h-1/2 md:h-full md:w-1/2 px-4']">
        <NuxtLink to="/">
                <img src="/logo.png" alt="Logo" class="h-10">
        </NuxtLink>
      <h1 class="text-xl md:text-3xl mb-6">
        Ne bucuram sa te revedem!
      </h1>
      
      <UForm :validate="validate" :state="state" class="space-y-4 w-full max-w-sm" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="Adresa ta de email" />
        </UFormGroup>

        <UFormGroup label="Parola" name="password">
          <UInput v-model="state.password" type="password" placeholder="Parola ta" />
        </UFormGroup>
        
        <div class="flex items-center justify-between">
          <UCheckbox v-model="state.rememberMe" label="Ține-mă minte" name="remember" />
          <UButton variant="link" to="/forgot-password" class="p-0 text-sm">
            Ai uitat parola?
          </UButton>
        </div>
        
        <div class="flex items-center justify-between mt-6">
          <UButton type="submit" block class="w-40">
            Conectare
          </UButton>
          
          <p class="text-sm text-gray-600 whitespace-nowrap">
            Nu ai cont? <UButton variant="link" to="/register" class="p-0">Înregistrare</UButton>
          </p>
        </div>
      </UForm>
    </div>
    <div class="bg-cover bg-no-repeat flex justify-center items-center bg-center
      flex-col md:flex-row min-w-full md:min-w-fit md:w-1/2 h-1/2 md:h-full md:border" 
      :style="{ backgroundImage: `url(${src})` }">       
      <div class="w-full h-full py-10 gap-y-3 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center">
        <h1 class="text-white text-xl md:text-3xl">
          {{ props.title }}
        </h1>
        <UAvatar
          size="3xl"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <p class="text-white text-lg md:text-xl">
          {{ props.content }}
        </p>
      </div>
    </div>
  </div>
</template>
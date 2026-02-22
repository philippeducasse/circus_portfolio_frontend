<template>
  <div class="max-w-lg mx-auto">
    <h3 class="mb-6">{{ $t("formTitle") }}</h3>
    <form class="flex flex-col gap-5" @submit.prevent="onSubmit">
      <UFormField :label="$t('yourName')">
        <UInput id="name" v-model="form.name" class="w-full" size="lg" />
      </UFormField>

      <UFormField :label="$t('yourMessage')">
        <UTextarea
          id="message"
          v-model="form.message"
          class="w-full"
          size="lg"
          :rows="4"
          required
        />
      </UFormField>

      <UFormField :label="$t('show')">
        <USelect
          id="show"
          v-model="form.show"
          class="w-full"
          size="lg"
          :placeholder="$t('selectShow')"
          :items="projects.map((p) => ({ label: p.projectTitle, value: p.projectId }))"
        />
      </UFormField>

      <UButton type="submit" size="lg" class="mt-2 w-full justify-center">
        {{ $t("submitComment") }}
      </UButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useProjects } from "~/composables/useProjects";

const { projects } = useProjects();

const form = ref({
  name: "",
  message: "",
  show: "",
});

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit", { ...form.value });
  form.value = { name: "", message: "", show: "" };
};
</script>

<template>
  <div class="max-w-2xl w-full mx-auto">
    <h3 class="mb-6 text-center">{{ $t("formTitle") }}</h3>
    <p class="text-base my-2">{{ $t("formSubtitle") }}</p>
    <form class="flex flex-col gap-5" @submit.prevent="onSubmit">
      <UFormField :label="$t('yourName')" :help="$t('anonymous')">
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

      <UFormField :label="$t('show')" :help="$t('noShow')">
        <USelect
          id="show"
          v-model="form.project_id"
          class="w-full"
          size="lg"
          :placeholder="$t('selectShow')"
          :items="projects.map((p) => ({ label: p.title, value: p.id }))"
        />
      </UFormField>

      <UButton type="submit" size="lg" class="mt-2 w-full justify-center">
        {{ $t("submitReview") }}
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
  project_id: undefined,
});

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit", { ...form.value });
  form.value = { name: "", message: "", project_id: undefined };
};
</script>

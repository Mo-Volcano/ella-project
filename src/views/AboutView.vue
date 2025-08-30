<template>
  <div class="about-page d-flex flex-column align-center justify-center py-12">
    <VCard class="pa-8" elevation="2" max-width="600">
      <VCardTitle
        class="text-center"
        style="font-size: 32px; font-weight: bold"
      >
        About Me & Project
      </VCardTitle>
      <VCardText class="text-center" style="font-size: 18px">
        مرحباً! أنا لست صاحب التصميم الأصلي لهذا المشروع، بل قمت باستخدامه
        كتمرين وتطوير مهاراتي في بناء واجهات المستخدم باستخدام Vue وVuetify.<br />
        إذا كنت مهتماً بالتواصل معي بخصوص العمل أو التعاون، يمكنك التواصل عبر
        الروابط التالية:
      </VCardText>
      <VDivider class="my-4" />
      <div class="d-flex flex-column align-center gap-4">
        <VBtn
          href="mailto:m7mad66118@hotmail.com"
          target="_blank"
          color="red"
          variant="outlined"
          class="mb-2"
        >
          <VIcon left>mdi-gmail</VIcon>
          Gmail
        </VBtn>
        <VBtn
          href="https://github.com/Mo-Volcano"
          target="_blank"
          color="black"
          variant="outlined"
          class="mb-2"
        >
          <VIcon left>mdi-github</VIcon>
          GitHub
        </VBtn>
      </div>
    </VCard>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 80vh;
  background: #f7f7f7;
}
.gap-4 > * + * {
  margin-top: 16px;
}
</style>

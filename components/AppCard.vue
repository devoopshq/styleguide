<template>
  <div class="card">
    <slot>Card</slot>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  /* outline: 1px dashed; */
  /* border-radius: 4px; */
  /* border: 1px solid rgba(var(--color), 0.12); */
  /* box-shadow: 0px 2px 5px 0px rgba(var(--color), 0.12); */
  margin-top: 16px;
  margin-bottom: 32px;
  /* background-color: rgba(var(--color), 0.04); */
}
/* .card:hover {
  box-shadow: 0px 10px 20px 0px rgba(var(--color), 0.12);
} */
/* @media (max-width: 512px) {
  .card {
    padding: 16px;
  }
} */
</style>

<template>
  <div class="card">
    <slot>Card</slot>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  /* outline: 1px dashed; */
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
  margin-top: 16px;
  margin-bottom: 32px;
  background-color: #fff;
}
.card:hover {
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12);
}
@media (max-width: 512px) {
  .card {
    padding: 16px;
  }
}
</style>

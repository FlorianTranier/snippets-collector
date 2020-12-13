<template>

  <div class="container">
    <form>
      <div class="field">
        <input type="text" id="title" name="title" class="input" placeholder=" "
               autocomplete="off"/>
        <label class="label" for="title">Title</label>
      </div>
      <div class="field">
        <input type="text" id="language" name="language" class="input" placeholder=" "
               autocomplete="off"/>
        <label class="label" for="language">Language</label>
      </div>
      <div class="field">
        <input type="text" id="description" name="description" class="input" placeholder=" "
               autocomplete="off"/>
        <label class="label" for="description">Description</label>
      </div>
      <div class="field">
        <label for="code" class="static-label">Snippet</label>
        <PrismEditor id="code" v-model="state.code" />
      </div>

      <div class="btn-submit">Submit</div>
    </form>

  </div>
</template>

<script>
import { reactive } from 'vue';
import PrismEditor from '@/components/PrismEditor.vue';

export default {
  name: 'AddOrUpdateSnippet',
  components: { PrismEditor },
  setup() {
    const state = reactive({
      code: '',
    });

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'src/scss/_variables.scss';

.container {
  padding: 0 20vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: sofia-pro, sans-serif;
  text-align: center;
}

form {
  width: 100%;
}

.field {
  width: 100%;
  position: relative;
  border-bottom: 2px dashed $text-primary;
  margin: 4rem auto 1rem;
}

.field::after {
  content: "";
  position: relative;
  display: block;
  height: 4px;
  width: 100%;
  background: $text-primary;
  transform: scaleX(0);
  transform-origin: 0;
  transition: transform 500ms ease;
  top: 2px;
}

.field:focus-within {
  border-color: transparent;
}

.field:focus-within::after {
  transform: scaleX(1);
}

.static-label {
  display: block;
  color: $text-primary;
  font-size: 1.2rem;
  z-index: -1;
  text-align: left;
  margin-bottom: 1rem;
}

.label {
  display: block;
  color: $text-primary;
  font-size: 1.2rem;
  z-index: -1;
  position: absolute;
  text-align: left;
  transform: translateY(-2rem);
  transform-origin: 0;
  transition: transform 400ms;
}

.field:focus-within .label, .input:not(:placeholder-shown) + .label {
  transform: scale(0.8) translateY(-5rem);
}

.input {
  outline: none;
  border: none;
  overflow: hidden;
  margin: 0;
  width: 100%;
  padding: 0.25rem 0;
  background: none;
  color: $text-secondary;
  font-size: 1.2rem;
  font-weight: bold;
  transition: border 500ms;
  text-align: left;
}

.textarea {
  resize: none;
}

.btn-submit {
  display: block;
  text-align: center;
  background-color: $text-primary;
  color: $bg-primary;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 4rem auto 1rem;
}

.btn-submit:hover {
  cursor: pointer;
}

</style>

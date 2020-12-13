<template>

  <div class="container">
    <form>
      <div class="field">
        <input type="email" id="email" name="email" class="input" placeholder=" "
               autocomplete="off"/>
        <label class="label" for="email">Email</label>
      </div>
      <div class="field">
        <input type="text" id="password" name="password" class="input" placeholder=" "
               autocomplete="off"/>
        <label class="label" for="password">Password</label>
      </div>

      <div class="btn-submit">Login</div>
    </form>
  </div>
  <div class="container">
    <hr>
  </div>
  <div class="container">
    <div class="btn-submit">
      Login with Github
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style lang="scss" scoped>
@import 'src/scss/_variables.scss';

.fas {
  color: $bg-primary;
}

.container {
  padding: 0 20vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: sofia-pro, sans-serif;
  text-align: center;

  & hr {
    width: 100%;
    margin: 2vh 0;
  }
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
  width: 100%;
}

.btn-submit:hover {
  cursor: pointer;
}

</style>

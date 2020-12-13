<template>
    <nav>
      <h1 class="title" @click="goToHome">
        SnippetsCollector <span class="version">v{{version}}</span>
      </h1>
      <ul class="nav-links">
        <router-link to="/search-snippets">
          <div class="nav-link">
            🔎 Browse Snippets
          </div>
        </router-link>
        <router-link to="/my-snippets">
          <div class="nav-link">
            🔒 My Snippets
          </div>
        </router-link>
        <router-link to="/new-snippets">
          <div class="nav-link">
            🤟 Create a new Snippet
          </div>
        </router-link>
      </ul>
      <ul class="nav-links">
        <router-link to="/login">
          <div class="nav-link">
            Login / Register
          </div>
        </router-link>
      </ul>
    </nav>
</template>

<script>
import router from '@/router';
import { version } from '../../package.json';

export default {
  setup() {
    const goToHome = () => router.push({ name: 'Home' });
    return {
      goToHome,
      version,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/_variables.scss";
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5vh;
  margin-bottom: 2rem;
}

.title {
  padding: 0 2rem;

  &:hover {
    cursor: pointer;
  }
}

.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5vh;

  a {
    text-decoration: none;
    color: $text-primary;
    :hover {
      color: $bg-primary;
      background-color: $text-primary;
    }
  }
}

.nav-link {
  padding: 0rem 5rem;
  min-height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.router-link-active {
  color: $bg-primary !important;
  background-color: $text-primary;
}

@media screen and (max-width: 1200px) {
  .title {
    display: none;
  }
}

.version {
  font-size: 0.8rem;
}

</style>

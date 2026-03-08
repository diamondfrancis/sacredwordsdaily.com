<template>
  <header>
    <h1>Sacred Words Daily</h1>
    <nav role="navigation">
      <ul>
        <li><RouterLink aria-label="Navigate to Home" to="/">Home</RouterLink></li>
        <li><RouterLink aria-label="Navigate to Poetry" to="/poetry">Poetry</RouterLink></li>
        <li><RouterLink aria-label="Navigate to Quotes" to="/quotes">Quotes</RouterLink></li>
        <li><RouterLink aria-label="Navigate to Bible Verses" to="/bible-verses">Bible Verses</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <p>
      All Rights Reserved &copy; 2024 Made by
      <a
        href="https://diamondfrancis.online/"
        aria-label="Visit Diamond Francis' website"
        target="_blank"
        rel="noopener noreferrer"
        >Diamond Francis</a
      >
    </p>
    <p>
      Follow us on social media:
      <a
        href="https://x.com/sacred_daily"
        aria-label="Follow Sacred Words Daily on Twitter"
        target="_blank"
        rel="noopener noreferrer"
        >Twitter</a
      >
    </p>
  </footer>
</template>

<style scoped>
header {
  background-color: #3b2a1a;
  color: #fdf8f2;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

header h1 {
  font-size: 1.8rem;
  letter-spacing: 0.04em;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

nav ul li a {
  color: #fdf8f2;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

nav ul li a:hover,
nav ul li a.router-link-active {
  color: #c9a96e;
}

main {
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  min-height: 60vh;
}

footer {
  background-color: #3b2a1a;
  color: #fdf8f2;
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

footer a {
  color: #c9a96e;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>

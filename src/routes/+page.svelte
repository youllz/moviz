<script>
  let movieName
  let movieYear
</script>

<main>
  <div class="logo">
    <svg width="64" height="64" viewBox="0 0 48 48"><g fill="none" stroke-width="4"><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"/><path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z"/><path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z"/><path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z"/><path stroke="#000" stroke-linecap="round" d="M24 44H44"/></g></svg>
  </div>
  <h1>
    Find Your Movie
  </h1>

  <form class="input-box" action="/movie/{movieName}/{movieYear}" method="post">
    <input type="text" name="name" id="search" autocomplete="off" placeholder="Name" bind:value={movieName}>
    <input type="text" name="number" id="year" autocomplete="off" placeholder="Year" bind:value={movieYear}>
    <button type="submit"> Search </button>
  <form/>
</main>



<style>
  main {
    margin-top: 10rem;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
   
  }

  h1 {
    font-size: 4rem;
    letter-spacing: 1.1px;
    margin: 2rem;
  }
  input {
    margin: 1rem;
    width: 100%;
    height: 7rem;
    padding: 1.4rem;
    color: rgb(121, 184, 255);
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    background-color: rgb(38, 48, 60);
    outline: 0px;
    border: 0px;
    border-radius: 0.25rem;
  }

  .input-box {
    width: 100%;
    display: flex;
    align-items: center;
  }
  button {
    display: none;
  }
</style>
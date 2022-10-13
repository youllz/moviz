<script>
	export let movieData;
</script>

<div class="info">

  <a href="/">
    <button>
      <span>
        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M20 10v4h-9l3.5 3.5l-2.42 2.42L4.16 12l7.92-7.92L14.5 6.5L11 10h9Z"/></svg>
      </span>
    </button>
  </a>
  
	<h1>{movieData.Title}</h1>
	<p>{movieData.Plot}</p>
	<div class="rating">
		<h2>{movieData.Country}</h2>
		<h2>{movieData.imdbRating}</h2>
	</div>
	<div class="date">
		<h2>{movieData.Year}</h2>
		<h2>{movieData.Runtime}</h2>
		<h2>{movieData.Genre}</h2>
	</div>
</div>

<style>
	.info {
		height: 100%;
		width: 100%;
		/* background-color: red; */
		display: flex;
		flex-direction: column;
		padding: 2rem 5rem;
		justify-content: space-around;
	}

	.info h1 {
		font-size: 3rem;
	}

	.info p {
		font-size: 1.6rem;
	}

	.info h2 {
		font-size: 1.5rem;
	}

	.rating {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.date {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

  button {
    border: none;
    background-color: transparent;
    align-self: flex-start;
    cursor: pointer;
    
  }

	@media screen and (max-width: 956px) {
		.info {
			padding: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.355);
      padding: 10px;
		}

    .rating, .date {
      flex-direction: column;
    }
    h2 {
      padding: 5px;
    }
	}
</style>

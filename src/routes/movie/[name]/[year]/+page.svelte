<script>
  import Info from "$lib/Info.svelte";
  export let data
  const {movieData} = data

 

</script>




<main>
  <section class="container" style="--image:url({movieData.Poster})">
    <div class="info">

      <Info {movieData}/>


     <!-- <div class="btn-box">
      <button on:click={toggle.more}><span>
        <svg width="25" height="25" viewBox="0 0 24 24"><path fill="#888888" d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4Zm0 6q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
      </span></button>
      <button on:click={toggle.more}><span>
        <svg width="25" height="25" viewBox="0 0 24 24"><path fill="#888888" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6Zm0 6q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
      </span></button>
    </div> -->
    
    </div>
  </section>
</main>

<style>

  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  section {
    background-image: var(--image) ;
    height: 50vh;
    width: 60vw;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: flex-end;
    
    /* background-color: antiquewhite; */

  }

  .info {
    height: 100%;
    width: 65%;
  }
/* 
  .btn-box {
    display: flex;
    justify-content: center;
    gap: 30px;
  } */

  

  @media screen and (max-width: 956px ) {
    section {
      width: 90vw;
      height: 80vh;
    }

    .info {
      width: 80%;
    }
  }


  
</style>
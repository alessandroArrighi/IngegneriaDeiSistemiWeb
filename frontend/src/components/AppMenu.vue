<template>
    <div class="flex-container">
            <nav>
                <div class="flex-item">
                    <a href="/">
                        <img src="public/tumefatti-eyewear-high-resolution-logo-transparent.png" width="130" height="100" alt="logo">
                        <h1>NOMEAZIENDA</h1>
                    </a>
                </div>
                <div class="flex-item">
                    <ul>
                        <li><RouterLink to = "/">Pagina 1</RouterLink></li>
                        <li><RouterLink to = "/">Pagina 2</RouterLink></li>
                        <li><RouterLink to = "/">Pagina 3</RouterLink></li>
                        <li><RouterLink to = "/">Pagina 4</RouterLink></li>
                    </ul>
                </div>
            </nav>
    </div>
</template>
  
<style lang="scss" scoped>
    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #333; /* Aggiungi un colore di sfondo a tua scelta */
        padding: 10px; /* Aggiungi spaziatura interna a tua scelta */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000; /* Assicurati che la barra di navigazione sia sopra gli altri elementi */
    }

    nav {
        display: flex;
        align-items: center;
    }

    .flex-item {
        margin: 0 10px; /* Aggiungi margine tra gli elementi a tua scelta */
    }

    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    li {
        margin-right: 15px; /* Aggiungi margine tra gli elementi a tua scelta */
    }

    a {
        display: inline-flex;
        text-decoration: none;
        color: white; /* Aggiungi il colore del testo a tua scelta */
        align-items: center;
    }
</style>
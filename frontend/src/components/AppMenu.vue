<template>
    <div class="flex-container">
            <nav>
                <div class="flex-item">
                    <button type="button">
                        <span></span> 
                    </button>
                </div>
                <div class="flex-item">
                    <a href="/">
                        <img src="" alt="logo">
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
  
  <style scoped>
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  
  </style>
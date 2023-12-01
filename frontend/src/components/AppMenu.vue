<template>
        <div class="flex-container">
            <div class="flex-item"></div>           <!-- flex item vuoto perchè devo vedere se funziona come in boostrap in cui avevamo lasciato una colonna vuota, anche alla chiusura del flex-container-->
            <div class="flex-item">
                <nav>
                    <button type="button">
                        <span></span> 
                    </button> 
                    <a href="/">
                        <img src="" alt="logo">
                        <h1>NOMEAZIENDA</h1>
                    </a>
                    <ul>
                        <li><Router-link to = "/">Pagina 1</Router-link></li>
                        <li><Router-link to = "/">Pagina 2</Router-link></li>
                        <li><Router-link to = "/">Pagina 3</Router-link></li>
                        <li><Router-link to = "/">Pagina 4</Router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="flex-item"></div>
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
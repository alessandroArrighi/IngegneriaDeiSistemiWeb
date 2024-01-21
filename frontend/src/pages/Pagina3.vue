<template>
    <div>
        <form>
            <label>Scegli un prodotto</label>
            <select name="prodotto">
                <option></option>
                <option value="graduati">Occhiali da Vista</option>
                <option value="schermati">Occhiali da Sole</option>
                <option value="Lenti">Lenti Graduate</option>
                <option value="LAC">Lenti a Contatto</option>
            </select>
            <input type="submit" value="Filtra">
        </form>
    </div>

</template>
  
  <script>
  export default {
    data() {
      return {
        selectedMenu1: "",
      };
    },
    methods: {
      filtra() {
        const filtriSelezionati = {
          menu1: this.selectedMenu1,
        };
        console.log("Valori selezionati:", filtriSelezionati);
      },
    },
  };
  </script>
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      countrySelected: null
    },

    mounted: function(){
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function(){
        fetch('https://restcountries.eu/rest/v2/all')
          .then(response => response.json())
          .then(returnData => this.countries = returnData)
      }
    }
  });
});

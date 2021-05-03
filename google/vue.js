var app = new Vue({
    el: '#app',
    data: {
      googleSearch: '',
	  cities: window.cities,
    },

	computed: {
                    filteredCities: function() {
                        let results = this.cities.filter(city => city.name.includes(this.googleSearch));
                        return results.slice(0,10);
                    }
                },
				updated() {
                    this.$nextTick(() => {
                        this.$refs.inputFocus.focus();
                    });
                }

  });
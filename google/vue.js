var app = new Vue({
    el: '#app',
    data: {
      googleSearch: '',
	  textSearch:'',
	  cities: window.cities,
    },

	computed: {
                    filteredCities: function() {
						
                        let results = this.cities.filter(city => city.name.includes(this.googleSearch));
						if(this.googleSearch != '')
							return  results.slice(0,10);
						else return null;
						
                    }
                },
	updated() {
                    this.$nextTick(() => {
                        this.$refs.inputFocus.focus();
                    });
                },
	methods: {
                    potwierdz() {
                        this.textSearch = this.googleSearch
                    },
                    uzupelnij(miasto) {
                        this.googleSearch = miasto.name;
                        this.textSearch = this.googleSearch;
                    },
                }

  });
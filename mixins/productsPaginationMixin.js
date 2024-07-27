export default {
	data() {
    	return {
      		products: [],
		    itemsPerPage: 8,
		    currentPage: 1,
    	}
	},
	computed: {
	  displayedProducts() {
	    	const startIndex = (this.currentPage - 1) * this.itemsPerPage
	    	const endIndex = this.currentPage * this.itemsPerPage

	    	return this.products.slice(startIndex, endIndex)
	  },
	  pageCount() {
	  		// вычисляет общее количество страниц, которые должны быть отображены в каталоге продукции. С помощью метода Math.ceil, чтобы учесть возможность наличия неполных страниц
	    	return Math.ceil(this.products.length / this.itemsPerPage)
	  },
	},
	mounted() {
		this.fetchAPI('./data/arts.json').then(data => {
			this.products = data
		}).catch(error => {
			console.error('Proble:', error)
		})
	},
	methods: {
	  	changePage(pageNumber) { // принимает номер страницы на которую нужно переключиться
	  		window.scrollTo(0, 0)
	  		this.updateDisplayedProducts(pageNumber)
			this.setCurrentPage(pageNumber)
		},
		updateDisplayedProducts(pageNumber) {
  			const startIndex = (pageNumber - 1) * this.itemsPerPage // вычисляем индекс начального элемента, учитывая кол-во элементов на каждой странице. Показывает с какого элемента начать отображение на текущей странице
  			const endIndex = pageNumber * this.itemsPerPage // вычисляем индекс последнего элемента, учитывая кол-во элементов на каждой странице. Показывает на каком элементе закончить отображение на текущей странице
  			const newProducts = this.products.slice(startIndex, endIndex)  // извлечения подмассива продуктов, который содержит продукты для текущей страницы

			this.displayedProducts.splice(0, this.displayedProducts.length, ...newProducts) // удаляем все элементы из массива displayedProducts. Затем добавляем новые продукты из newProducts с помощью оператора распространения (...newProducts)
		},
		setCurrentPage(pageNumber) {
			this.currentPage = pageNumber
		},
		fetchAPI(pathToFile) {
			return fetch(pathToFile).then(response => {
				if( !response.ok ) throw new Error('NOT ok!')

				return response.json()
			})
		}		
	},
	beforeRouteEnter(to, from, next) {
		window.scrollTo(0, 0)

		next()
	}
}
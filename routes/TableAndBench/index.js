
import NavigationPart from './../../templates/staticParts/Navigation/script.js'
import FooterPart from './../../templates/staticParts/Footer.js'
import CustomLink from './../../components/router-link/script.js'
import Clouds from './../../components/clouds/script.js'

import scrollMixin from './../../mixins/scrollMixin.js'
import paginationMixin from './../../mixins/productsPaginationMixin.js'

export default {
    mixins: [scrollMixin, paginationMixin],
    components: { NavigationPart, FooterPart, CustomLink, Clouds },
	template: `
		<div ref="scrollContainer">
			<header style="position: relative; height: 55px; top: 0;">
				<navigation-part></navigation-part>
			</header>
			<main>
				<div style="position: relative;">
                    <clouds  speedValue="x1, x2, x3, x4, x5" scaleValue="0.2" colorValue="--granit-blue"></clouds>
                    <custom-link parentClass="mid" pathTo="/" childClass="btn" value="На главную" id="prime"></custom-link>
					<h1 class="tagline" style="text-align: center; font-weight: 100;">Столы/лавочки</h1>
					<div>
						<div style="position: relative;">
							<div class="product-catalog">
							      	<div class="product product-item" v-for="(product, index) in displayedProducts" :key="index">
							      		<div class="product-img-container">
							      			<img :src="product.image" :alt="product.name" class="product-image">
							      		</div>
							        	<div class="product-details">
							          		<button class="add-to-cart-button">Заказать</button>
							          		<h3 class="product-name">{{ product.name }}</h3>
							          		<p class="product-price">{{ product.price }}</p>
							        	</div>
							      	</div>
							    </div>
							    <!-- Пагинация -->
							    <div class="pagination-container">
							    	<div  class="pagination">
							    		<button v-for="pageNumber in pageCount" :key="pageNumber" @click="changePage(pageNumber)">{{ pageNumber }}</button>
							    	</div>
								</div>
							</div>
						</div>
				</div>
			</main>
			<footer id="contact">
				<div>
					<section class='vt-container'>
						<footer-part></footer-part>
					</section>
				</div>
			</footer>
		</div>
	`,
    data() {
        return {
            currentPageKey: 'tables'
        }
    }
}

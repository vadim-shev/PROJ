export default {
	props: ['pathTo', 'childClass', 'value', 'parentClass'],
	template: `
		<div :class="parentClass">
			<router-link :to="{ path: pathTo }" :class="childClass ">{{ value }}</router-link>
		</div>
		
	`
}
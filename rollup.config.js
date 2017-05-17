export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/angularx-pipes.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng.angularx-pipes',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'numeral': 'numeral'
	}
}

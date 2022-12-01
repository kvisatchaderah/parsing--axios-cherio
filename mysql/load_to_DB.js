// import functions
import create_connection from './functions/create_connection.mjs'

// import modules
import load_to_categories from './modules/load_to_categories.mjs'
import load_to_products from './modules/load_to_products.mjs'
import load_to_products_categories from './modules/load_to_products_categories.mjs'
import load_to_brands from './modules/load_to_brands.mjs'
import load_to_features from './modules/load_to_features.mjs'
import load_to_images from './modules/load_to_images.mjs'
import load_to_options from './modules/load_to_options.mjs'
import load_to_variants from './modules/load_to_variants.mjs'

const load_to_DB = async () => {
	// connect
	const connection = await create_connection()


	// loads to data
	// await load_to_categories(connection, 's_categories')
	await load_to_products(connection, 's_products')
	// await load_to_products_categories(connection, 's_products_categories')
	// await load_to_brands(connection, 's_brands')
	// await load_to_features(connection, 's_features')
	// await load_to_images(connection, 's_images')
	// await load_to_options(connection, 's_options')
	// await load_to_variants(connection, 's_variants')

	// close connect
	await connection.end()
}

// launch fucthion
load_to_DB()
import { error } from '@sveltejs/kit';

import { CatalogXataClient } from 'xata/clients';

import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const product = await CatalogXataClient.db.product.filter({ slug: params.slug }).getFirst();

	console.log('product', product);

	if (!product) {
		return error(404, 'Not found');
	}

	return product;
}) satisfies PageServerLoad;

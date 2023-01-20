import { XataClient as CatalogClient } from '../dbs/catalog';

import { XATA_API_KEY } from '$env/static/private';

export const CatalogXataClient = new CatalogClient(
    {apiKey: XATA_API_KEY}
);

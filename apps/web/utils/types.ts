import type { paths } from 'openapi-types';

export type Brand = paths['/brands/']['get']['responses']['200']['content']['application/json'][0];
export type Model =
	paths['/brands/{brandId}/models']['get']['responses']['200']['content']['application/json'][0];
export type Car =
	paths['/cars/latest']['get']['responses']['200']['content']['application/json'][0];

export type CarsLatestResponse =
	paths['/cars/latest']['get']['responses']['200']['content']['application/json'];
export type BrandsResponse =
	paths['/brands/']['get']['responses']['200']['content']['application/json'];
export type CarsCountResponse =
	paths['/cars/count']['get']['responses']['200']['content']['application/json'];
export type ModelsByBrandResponse =
	paths['/brands/{brandId}/models']['get']['responses']['200']['content']['application/json'];

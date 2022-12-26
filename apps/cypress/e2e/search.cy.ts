const APP_URL = 'http://localhost:3000';

describe('Search tests', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');

		// aliases for controls
		cy.get('select[aria-label="Brand"]').as('brandInput');
		cy.get('select[aria-label="Model"]').as('modelInput');
		cy.get('input[aria-label="Min price"]').as('minPriceInput');
		cy.get('input[aria-label="Max price"]').as('maxPriceInput');
		cy.get('a').contains('Search').as('submitButton');
		cy.get('button[aria-label="Reset"]').as('resetButton');
	});

	it('check all fields are empty by default, search for all offers', () => {
		cy.visit('http://localhost:3000/');

		// check default values
		cy.get('@brandInput').should('have.value', '0');
		cy.get('@modelInput').should('have.value', '0');
		cy.get('@minPriceInput').should('have.value', '');
		cy.get('@maxPriceInput').should('have.value', '');

		// check default placeholders
		cy.get('@brandInput').contains('BRAND');
		cy.get('@modelInput').contains('MODEL');
		cy.get('@minPriceInput').should('have.attr', 'placeholder', 'MIN PRICE');
		cy.get('@maxPriceInput').should('have.attr', 'placeholder', 'MAX PRICE');

		cy.get('@submitButton').click();

		cy.url().should('equal', `${APP_URL}/all`);
	});

	it('search by brand', () => {
		// CHEVROLET ID: 25

		cy.get('@brandInput').select('Chevrolet');
		cy.get('@brandInput').should('have.value', 25);

		cy.get('@submitButton').click();

		cy.url().should('equal', `${APP_URL}/25`);
	});

	it('search by brand and model', () => {
		// OPEL ID: 91
		// VECTRA ID: 1373

		cy.intercept('http://localhost:8000/brands/91/models').as('fetchModels');

		cy.get('@brandInput').select('Opel');
		cy.get('@brandInput').should('have.value', 91);

		cy.wait('@fetchModels');

		cy.get('@modelInput').select('Vectra');
		cy.get('@modelInput').should('have.value', 1373);

		cy.get('@submitButton').click();

		cy.url().should('equal', `${APP_URL}/91/1373`);
	});

	it('search by min price', () => {
		cy.get('@minPriceInput').type('200000');
		cy.get('@minPriceInput').should('have.value', '200000');

		cy.get('@submitButton').click();

		cy.url().should('equal', `${APP_URL}/all?minPrice=200000`);
	});

	it('search by max price', () => {
		cy.get('@maxPriceInput').type('300000');
		cy.get('@maxPriceInput').should('have.value', '300000');

		cy.get('@submitButton').click();

		cy.url().should('equal', `${APP_URL}/all?maxPrice=300000`);
	});

	it('search by min price and max price', () => {
		cy.get('@minPriceInput').type('10000');
		cy.get('@maxPriceInput').type('20000');

		cy.get('@minPriceInput').should('have.value', '10000');
		cy.get('@maxPriceInput').should('have.value', '20000');

		cy.get('@submitButton').click();

		cy.url().should('equal', `${APP_URL}/all?minPrice=10000?maxPrice=20000`);
	});

	it('fill brand, model, min price and max price, reset fields, fill again and search', () => {
		// MERCEDES ID: 80
		// CLA ID: 1132

		cy.intercept('http://localhost:8000/brands/80/models').as('fetchModels');

		cy.get('@brandInput').select('Mercedes-Benz');
		cy.wait('@fetchModels');
		cy.get('@modelInput').select('CLA');
		cy.get('@minPriceInput').type('90000');
		cy.get('@maxPriceInput').type('140000');

		// check for correct values in inputs
		cy.get('@brandInput').should('have.value', '80');
		cy.get('@modelInput').should('have.value', '1132');
		cy.get('@minPriceInput').should('have.value', '90000');
		cy.get('@maxPriceInput').should('have.value', '140000');

		// reset all values
		cy.get('@resetButton').click();

		// check inputs has default values
		cy.get('@brandInput').should('have.value', '0');
		cy.get('@modelInput').should('have.value', '0');
		cy.get('@minPriceInput').should('have.value', '');
		cy.get('@maxPriceInput').should('have.value', '');

		// FORD ID: 42
		// MONDEO ID: 706

		// fill inputs again
		cy.intercept('http://localhost:8000/brands/42/models').as('fetchModels');

		cy.get('@brandInput').select('Ford');
		cy.wait('@fetchModels');
		cy.get('@modelInput').select('Mondeo');
		cy.get('@minPriceInput').type('60000');
		cy.get('@maxPriceInput').type('90000');

		// check for correct values in inputs
		cy.get('@brandInput').should('have.value', '42');
		cy.get('@modelInput').should('have.value', '706');
		cy.get('@minPriceInput').should('have.value', '60000');
		cy.get('@maxPriceInput').should('have.value', '90000');

		cy.get('@submitButton').click();

		cy.url().should('equal', `${APP_URL}/42/706?minPrice=60000?maxPrice=90000`);
	});
});

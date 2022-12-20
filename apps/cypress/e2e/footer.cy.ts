const FRONTEND_URL = 'http://localhost:3000';
const YEAR = new Date().getFullYear();

describe('Footer tests', () => {
	it('check helpful links', () => {
		cy.visit('http://localhost:3000/');

		cy.get('h2').contains('Links');

		cy.get('footer').within(() => {
			cy.get('a[href="/"]').contains('Home').click();

			cy.url().should('equal', `${FRONTEND_URL}/`);
		});

		cy.visit('http://localhost:3000/');

		cy.get('footer').within(() => {
			cy.get('a[href="/shortlist"]').contains('Shortlist').click();

			cy.url().should('equal', `${FRONTEND_URL}/shortlist`);
		});

		cy.visit('http://localhost:3000/');

		cy.get('footer').within(() => {
			cy.get('a[href="/sell"]').contains('Sell own car').click();

			cy.url().should('equal', `${FRONTEND_URL}/sell`);
		});
	});

	it('check contact links', () => {
		cy.visit('http://localhost:3000/');

		cy.get('footer').within(() => {
			cy.get('h2').contains('Contact');
			cy.get('a[href="mailto: marcin.witas72@gmail.com"]').contains('Email');
			cy.get('a[href="https://github.com/Wojtazzzz"]').contains('Github');
			cy.get('button').contains('Discord');
			cy.get('a[href="https://www.linkedin.com/in/marcin-witas-486682202/"]').contains(
				'Linkedin'
			);
		});
	});

	it('check copyrights', () => {
		cy.visit('http://localhost:3000/');

		cy.get('footer').contains(`© Copyright ${YEAR} Cartastic. All rights reserved.`);
	});
});

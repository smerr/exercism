import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

export class Matrix {
	constructor(string) {
		let matrixRow = string.split('\n').map(rows => rows.split(' ').map(Number));
		let matrixColumns = columns(matrixRow);
	}

	get rows() {}

	get columns() {
		let column = [];

		for (let i = 0; i < matrixRow[0].length; i++) {
			column[i] = [];
			for (let j = 0; j < rows.length; j++) {
				column[i].push(rows[j][i]);
			}
		}

		return this.columns;
	}
}

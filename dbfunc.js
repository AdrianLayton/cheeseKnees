module.exports = {
	makeParams: (userEntry, tableName) => {
		let emailEntry = userEntry.email;
		let pwordEntry = userEntry.pword;
		let table = tableName;
		let params = {
			Table: table,
			Item: {
			email: emailEntry,
			password: pwordEntry,
		}
		}
		return params;
	},
}
module.exports = {
	makeParams: (userEntry, tableName) => {
		let emailEntry = userEntry.email;
		let pwordEntry = userEntry.pword;
		let table = tableName;
		let params = {
			TableName: table,
			Item: {
			email: emailEntry,
		}
		}
		return params;
	},
	testLog: () => {
		console.log("Properly Connected");
	}
}
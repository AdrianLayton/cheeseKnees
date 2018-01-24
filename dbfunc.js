module.exports = {
	makeParams: (userEntry, tableName) => {
		let emailEntry = userEntry.email;
		let pwordEntry = userEntry.pword;
		let TableName = tableName;
		let params = {
			TableName: table,
			Item: {
			email: emailEntry,
			password: pwordEntry,
		}
		}
		return params;
	},
	testLog: () => {
		console.log("Properly Connected");
	}
}
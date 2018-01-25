module.exports = {
	makeParams: (userEntry, tableName) => {
		let emailEntry = userEntry.email;
		let nameEntry = userEntry.name;
		let table = tableName;
		let params = {
			TableName: table,
			Item: {
			Email: emailEntry,
			Name: nameEntry
		}
		}
		return params;
	},
	testLog: () => {
		console.log("Properly Connected");
	}
}
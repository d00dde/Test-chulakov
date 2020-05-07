 export const setBrowserPath = ({ sortByField, sortDirection, viewType, filterValue }) => {
	/*if(window.location.pathname === '/') TODO: controls change did push in browser history
		window.history.back();*/
	window.history.replaceState(
		{sortByField, sortDirection, viewType, filterValue},
		'Title',
		`/${sortByField}/${sortDirection}/${viewType}/${filterValue}`
	);
}

export const filterAndSortUsers = (state) => {
	const { usersData, sortByField, sortDirection, filterValue } = state;
	let forModificate = [...usersData];
	const normalizedFilterValue = filterValue.trim().toLowerCase();
	if(normalizedFilterValue){
			forModificate = forModificate.filter(({ name }) => {
				const [firstname, surname] = name.toLowerCase().split(' ');
				if(firstname.includes(normalizedFilterValue))
					return true;
				if(surname.includes(normalizedFilterValue))
					return true;
				return false;
			});
		}
		forModificate.sort((a, b) => {
			if(a[sortByField] > b[sortByField])
				return sortDirection === 'backward' ? -1 : 1;
			if(a[sortByField] < b[sortByField])
				return sortDirection === 'forward' ? -1 : 1;
			return 0;
		});
	return forModificate;
}

export const fetchAllCampgrounds = () => (
    axios.get('/api/campgrounds')
        .then(res => res.data)
        .catch(error => (console.log(error)))
);

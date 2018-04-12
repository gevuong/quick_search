export const fetchAllCampgrounds = () => (
    $.ajax({
        method: 'GET',
        url: '/api/campgrounds',
    })
);

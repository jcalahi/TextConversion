module.exports = {
    buttonList: ['Task 1', 'Task 2', 'Task 3'],
    path: '/conversion/',
    headerTag: {
        'h1': 'h1',
        'h2': 'h2',
        'h3': 'h3',
        'h4': 'h4',
        'h5': 'h5',
    },
    formatString: (str) => {
        return str.replace(/\s/g, '').toLowerCase();
    }
};
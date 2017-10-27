import { htmlElement } from './constants';

module.exports = {
    /**
     * @param {string} str - string input e.g "Task 1,  Task 2"
     * @returns {string} e.g "task1, task2"
     */
    formatString: (str) => {
        return str.replace(/\s/g, '').toLowerCase();
    },
    getElementType: (type) => {
        return htmlElement[type] || 'p';
    },
    decorateText: (style) => {
        var Elem = `${style}`;
        return function(text, from, to) {
            return '<Elem>text.substr(from, to)</Elem>';
        }
    }
};

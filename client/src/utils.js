import { htmlElement } from './constants';

module.exports = {
    findPropIndex: (arr, e) => {
        return arr.map((obj) => {
            return obj.props.elementType;
        }).indexOf(e);
    },
    formatString: (str) => {
        return str.replace(/\s/g, '').toLowerCase();
    },
    getElementType: (type) => {
        return htmlElement[type] || 'p';
    },
    getListItem: (arr, tag) => {
        return arr.filter((e) => {
            return e.type === tag;
        }).map((obj) => { return obj.text });
    }
};

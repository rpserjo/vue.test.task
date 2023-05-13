export const statuses = {
    1: {
        label: 'Уступка от юр. лица',
        class: 'red'
    },
    2: {
        label: 'Забронировано',
        class: 'lightgray'
    },
    3: {
        label: 'Уступка от физ. лица',
        class: 'lightblue'
    },
    4: {
        label: 'Продано',
        class: 'darkgray'
    }
}

export const status = (id) => {
    return statuses[id] || {label: 'undefined', class: 'red'};
}
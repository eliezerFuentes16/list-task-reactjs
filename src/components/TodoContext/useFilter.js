

function useFilter(array, valueFilter, valueObjectArray) {
    let arraySearch = []
    if (valueFilter.length < 1) {
        arraySearch = array;
    } else {
        arraySearch = array.filter(array => {
            const todoText = array[valueObjectArray].toLowerCase();
            const valueFilterLower = valueFilter.toLowerCase();
            return todoText.includes(valueFilterLower)
        });
    }
    return {
        arraySearch
    }
}

export { useFilter };
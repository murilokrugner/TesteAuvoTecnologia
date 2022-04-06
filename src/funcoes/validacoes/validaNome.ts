function validaNome(value: string) {
    if (value.length >= 5 && value.length <= 20) {
        return true;
    } else {
        return false;
    }
}

export default validaNome;
const shipFactory = (size) => {
    
    
    const length = new Array(size)

    let _hits = 0;

    const hit = () => {
        _hits = _hits + 1;

    }

    const isSunk = () => {

        if(length.length == _hits) {
            return true
        } else {
            return false
        }

    }

    return {
        length,
        get hits() {
            return _hits
        },
        hit,
        isSunk
    }

}

export { shipFactory }

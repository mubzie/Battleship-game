const shipFactory = (size) => {
    
    
    const shipLength = new Array(size).fill('')

    // const shipArray

    const hit = (index) => {

        if (shipLength[index] === '') {
            shipLength[index] = 'hit'

        } else {
            return 
        }

    }

    const isSunk = () => {

        return shipLength.every((element) => element === 'hit')

    }

    return {
        shipLength,
        hit,
        isSunk
    }

}

export { shipFactory }

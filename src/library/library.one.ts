/**二维数组转数组对象 */
export function arrayArrayToArrayObject(data: any[][]) {
    const result = []
    const field = data[0]
    for (let i = 1, j = data.length; i < j; i++) {
        const temp: { [key: string]: any } = {}
        for (let k = 0, l = data[i].length; k < l; k++) {
            temp[field[k]] = data[i][k]
        }
        result.push(temp)
    }
    return result
}


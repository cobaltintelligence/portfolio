// helpers/Calcs.js
// Yuan Wang

export const pickRandom = (arr) => {
	var length = arr.length
	var index = Math.floor(Math.random() * length)
	return arr[index]
}

// convert object to list, retain key via `id` tag
export const listify = (obj) => {
  var ids = Object.keys(obj)

  var items = []
	for (var i = 0; i < ids.length; i++) {
    var id = ids[i]
    items.push({
      ...obj[id],
      ...{ id: id }
    })
  }

  return items
}



// round to the n-th decimal place
export const roundN = (x, n) => {
	var base = Math.pow(10, n)
	return Math.round(x * base) / base
}

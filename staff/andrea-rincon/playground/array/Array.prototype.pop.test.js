console.log('TEST Array.prototype.pop')

console.log('CASE remove the last characters from Sheriff Labrador')

var sheriff = ['Sheriff Labrador', 'Sheriff Dobie', 'Sheriff Papillon', ['Rubi', 'Cornelia']]
console.log(sheriff)
//['Sheriff Labrador', 'Sheriff Dobie', 'Sheriff Papillon',['Rubi', 'Cornelia']]

sheriffRemoved = sheriff.pop()
console.log(sheriffRemoved)
//['Rubi', 'Cornelia']

console.log(sheriff)
//['Sheriff Labrador', 'Sheriff Dobie', 'Sheriff Papillon']
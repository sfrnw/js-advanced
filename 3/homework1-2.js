var a = "'word' aren't"
console.log(a.replace(/^'|(\s)'|'(\s)|'$/g, '"'));
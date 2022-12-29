// Weird Algorithm


// 1. check that n is betw 1 and 100 inclusive

function weirdAlgorithm(nn) {
	// body...
	var n;
	if (nn % 2 === 0) {
		n = nn/2;
		console.log(n);
		if (n !== 1 ) {
			weirdAlgorithm(n);
		}
	} else {
		n= nn*3+1
		console.log(n);
		if (n !== 1 ) {
			weirdAlgorithm(n);
		}
	}

   return;
}
weirdAlgorithm(3)
// Weird Algorithm


// 1. check that n is betw 1 and 100 inclusive
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDR6qL7AlrZqi+IEwWwb3T0LMssatfmTM5DFBMmJ55VD7fj+CMQN7S3bEqOucY1/M/rmENcgIoq8uEFQGyWyxuHFa50mbXGdriD0KBs7dZNReC93PR6pE5q5nvTaNU8vPQXneECO+pTsBW099REy/0cTjj+ChMKS3hKbpRkSE0Ol+oynnTtkeqLpbHQomTyGlTG0y8r6FAF880VuQKJs+ewgikwcj86RJdBX+mORtKZuNdO4jRfzcop2ZV3xVR9MzytqbibjuMbpjUZ84duepmtIVuJpxBYVnn/pErikbGfvOOOpn4YklPvV+MBBbbuOLOm1Wdmqb+XuWqeMgIV2PzLA5yO7gZO66yBirgipaSvNt94UZrqQRC8hZV7bKWOEWTPnvkNsuO/aUuIimnF82TgreiD1rDq0oMcJ0b7bW8sC89uXbKPnl5o1f36tqtB5hInmEcz/ru4fWJ2duMno17+9r29eyi27kN8VuoqW2gUP56S9wdBwI2Ko9ymh6eKLO8= aliyubababello@gmail.com

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

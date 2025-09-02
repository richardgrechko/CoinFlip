function CoinFlip(x)
{
	let heads = 1, tails = 1, highestHeads = 0, highestTails = 0, random;
	for (let i = 0; i < x; i++)
	{
		random = Math.random();
		if (random <= 0.5)
		{
			tails = 1;
			heads++;
			console.log("H", heads, `[1 in ${2**heads}]`);
			if (highestHeads < heads) {
				highestHeads = heads
			}
		}
		else
		{
			heads = 1;
			tails++;
			console.log("T", tails, `[1 in ${2**tails}]`);
			if (highestTails < tails) {
				highestTails = tails
			}
		}
	}
	console.log("Highest heads", highestHeads, `[1 in ${2**highestHeads}]`);
	console.log("Highest tails", highestTails, `[1 in ${2**highestTails}]`);
}

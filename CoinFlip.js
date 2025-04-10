function CoinFlip(x)
{
	let heads = 1, tails = 1, random;
	for (let i = 0; i < x; i++)
	{
		random = Math.random();
		if (random <= 0.5)
		{
			console.log("Heads gotten:", heads, `[1 in ${2**heads}]`);
			heads = 1;
			tails++;
		}
		else
		{
			console.log("Tails gotten:", tails, `[1 in ${2**tails}]`);
			tails = 1;
			heads++;
		}
	}
}

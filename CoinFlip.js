function CoinFlip(x)
{
	let heads = 1, tails = 1, random;
	for (let i = 0; i < x; i++)
	{
		random = Math.random();
		if (random <= 0.5)
		{
			heads = 1;
			tails++;
			console.log("T", tails, `[1 in ${2**tails}]`);
		}
		else
		{
			tails = 1;
			heads++;
			console.log("H", heads, `[1 in ${2**heads}]`);
		}
	}
}

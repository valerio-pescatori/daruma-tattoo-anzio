export const debounce = (ms: number, fn: () => void) => {
	let timer: NodeJS.Timeout;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => { fn.apply(this); }, ms);
	};
}

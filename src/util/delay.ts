const delay = (ms: number = 4_000) => new Promise((resolve) => setTimeout(() => resolve('delay'), ms));

export default delay;

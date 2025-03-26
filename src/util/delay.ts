const delay = async (ms: number = 2_000) => new Promise((resolve) => setTimeout(() => resolve('delay'), ms));

export default delay;

export async function asyncTimeout<T>(val: T, ms: number): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(val), ms));
}

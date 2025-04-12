export const withError = (fn: (...args: any[]) => Promise<any>) => {
    return async (...args: any[]) => {
        try {
            return await fn(...args);
        } catch (error) {
            console.error(error);
            throw {
                content: [
                        { type: "text" as const, text: JSON.stringify(error) }
                    ]
            };
        }
    };
};

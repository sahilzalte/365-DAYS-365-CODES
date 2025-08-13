export const getZodError = (errors) => {
    const newError = {}
    errors.forEach(err => {
        newError[err.path[0]] = err.message;
    });
    return newError;
}
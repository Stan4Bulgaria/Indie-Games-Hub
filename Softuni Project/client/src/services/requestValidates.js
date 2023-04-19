const registerValidator = (data) => {
    if (data.password !== data.repassword) {
        return { message: 'Password and Re-Password are different' };

    }
    const hasUndefinedOrEmpty = Object.values(data).some(val => val === undefined || val === '');
    if (hasUndefinedOrEmpty) {
        return { message: 'Some of the fields are empty!' };

    }
    return {}
}
const loginValidator = (data) => {
    if (data.code === 403) {
        return { message: data.message };

    }
    return {}
}
export const reguestValidator = {
    registerValidator,
    loginValidator
}
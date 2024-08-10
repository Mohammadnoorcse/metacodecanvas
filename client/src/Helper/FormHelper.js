import cogoToast from 'cogo-toast';

let EmailRegx = /\S+@\S+\.\S+/;

class FormHelper {
    IsEmpty(value) {
        return value.length === 0;
    }

    IsEmail(value) {
        return !EmailRegx.test(value);
    }

    ErrorToast(msg) {
        cogoToast.error(msg, { position: "top-center" });
    }
    
    SuccessToast(msg) {
        cogoToast.success(msg, { position: "top-center" });
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
}

const formHelper = new FormHelper();

export const {
    IsEmpty,
    IsEmail,
    ErrorToast,
    SuccessToast,
    getBase64,
} = formHelper;

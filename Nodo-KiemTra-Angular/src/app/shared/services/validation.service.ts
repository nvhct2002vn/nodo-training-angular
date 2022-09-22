import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    FormGroup,
    Validators,
    FormArray,
    FormControl
} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {
    public static cannotWhiteSpace(control: AbstractControl): ValidationErrors | null {
        if (control.value == null || control.value == '') return null;
        if ((control.value || '').trim().length === 0) {
            return {cannotWhiteSpace: true};
        }
        return null;
    }

    public static maxLength(length: number): ValidatorFn {
        return (c: AbstractControl): any | null => {
            if (c.value) {
                if ((c.value + '').replace(/\n/g, '\r\n').length > length) {
                    return {'maxlength': {'requiredLength': length}};
                }
            }
            return null;
        };
    }

    public static passwordValidator(control: AbstractControl): any {
        if (!control.value) {
            return;
        }

        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        return (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) ? '' : {invalidPassword: true};
    }

    /**
     * validate onlyLetterNumber
     */
    public static onlyLetterNumber(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.match(/^[0-9a-zA-Z]+$/)) ? '' : {onlyLetterNumber: true};
    }

    /**
     * validate onlyLetterNumberSp
     */
    public static onlyLetterNumberSp(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.match(/^[0-9a-zA-Z\ ]+$/)) ? '' : {onlyLetterNumber: true};
    }

    /**
     * validate database tableColumnName
     */
    public static dbTableColumnName(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.match(/^[0-9a-zA-Z_]+$/)) ? '' : {dbTableColumnName: true};
    }

    /**
     * validate personalIdNumber
     */
    public static personalIdNumber(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.match(/^[0-9a-zA-Z]{8,15}$/)) ? '' : {personalIdNumber: true};
    }

    /**
     * validate phone
     */
    public static phone(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.match(/^([\+])?(\d([.\s])?){1,15}$/)) ? '' : {phone: true};
    }

    /**
     * validate mobileNumber
     */
    public static mobileNumber(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.match(/^([+][0-9]{1,3}([ .-])?)?([(][0-9]{1,6}[)])?([0-9 .-]{1,32})(([A-Za-z :]{1,11})?[0-9]{1,4}?)$/))
            ? '' : {mobileNumber: true};
    }

    /**
     * validate integer
     */
    public static integer(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.toString().trim().match(/^[\-\+]?\d+$/)) ? '' : {integer: true};
    }

    /**
     * validate positiveInteger
     */
    public static positiveInteger(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.toString().trim().match(/^\d+$/)) ? '' : {positiveInteger: true};
    }

    /**
     * validate number
     */
    public static number(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.toString().trim().match(/^[\-\+]?(([0-9]+)([\.]([0-9]+))?|([\.]([0-9]+))?)$/))
            ? '' : {number: true};
    }

    /**
     * validate positiveNumber
     */
    public static positiveNumber(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.toString().trim().match(/^(([0-9]+)([\.]([0-9]+))?|([\.]([0-9]+))?)$/))
            ? '' : {positiveNumber: true};
    }

    /**
     * validate beforeCurrentDate
     */
    public static beforeCurrentDate(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        const x = new Date().getTime();
        return (control.value < x)
            ? '' : {beforeCurrentDate: true};
    }

    public static afterCurrentDate(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        const x = new Date().getTime();
        return (control.value >= x || x - control.value < 99999999)
            ? '' : {afterCurrentDate: true};
    }

    /**
     * Validate IP
     * @param control : any
     */
    public static isIp(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        const str: string = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.'
            + '){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';
        const regExp = new RegExp(str);
        if (!regExp.test(control.value)) {
            return {isIp: true};
        }
        return '';
    }

    /**
     * Validate URL
     * @param control : any
     */
    public static isUrl(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        const str = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|' +
            'www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|' +
            'https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})';
        const regExp = new RegExp(str);
        if (!regExp.test(control.value)) {
            return {isUrl: true};
        }
        return '';
    }

    /** Validate email format */
    public static emailFormat(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        // tslint:disable-next-line: max-line-length
        return (control.value.toString().trim().match(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i))
            ? '' : {invalidEmail: true};
    }

    /**
     * Xu ly bat buoc nhap truong hien tai khi truong truyen vao co gia tri
     * @param controlKeys Ten truong nhap gia tri
     */
    public static isRequiredIfHaveOne(controlKeys: string): ValidatorFn {
        return (c: AbstractControl): any | null => {
            const group = c.parent as FormGroup;
            const controlHaveOne = group.get(controlKeys) as FormControl;
            if (c.value === null || c.value === '') {
                if (controlHaveOne && (controlHaveOne.value === null || controlHaveOne.value.toString().length === 0)) { //  vi co th value = []
                    return null;
                } else {
                    return {ifHaveOneIsRequired: true};
                }
            } else {
                return null;
            }
        };
    }


    public static positiveRealNumber(control: AbstractControl): any {
        if (!control.value) {
            return;
        }
        return (control.value.toString().trim().match(/^(([0-9]+)([\.]([5]{1}))?)$/))
            ? '' : {positiveRealNumber: true};
    }

    public static isRequiredIfHaveOneValue(controlKeys: string): ValidatorFn {
        return (c: AbstractControl): any | null => {
            const group = c.parent as FormGroup;
            const controlHaveOne = group.get(controlKeys) as FormControl;
            if (c.value === null || c.value === '' || c.value.toString().length === 0) {
                if (controlHaveOne && (controlHaveOne.value === null || controlHaveOne.value === 0)) { //  vi co th value = []
                    return null;
                } else {
                    return {ifHaveOneIsRequired: true};
                }
            } else {
                return null;
            }
        };
    }

    public static isRequiredReason(sabbaticalLeaveId: string, addDay: string, subDay: string): ValidatorFn {
        return (c: AbstractControl): any | null => {
            const group = c.parent as FormGroup;
            const controlSabbaticalLeaveId = group.get(sabbaticalLeaveId) as FormControl;
            const controlAddAnuualDayLeave = group.get(addDay) as FormControl;
            const controlSubAnuualDayLeave = group.get(subDay) as FormControl;
            if (controlSabbaticalLeaveId.value) {
                if (c.value === null || c.value === "") {
                    return null;
                } else {
                    return {ifHaveOneIsRequired: true};
                }
            } else {
                if (controlSabbaticalLeaveId.value == null) {
                    if (controlAddAnuualDayLeave.value != null || controlSubAnuualDayLeave.value != null) {
                        if (c.value === null || c.value === "") {
                            return null;
                        }
                    } else {
                        return {ifHaveOneIsRequired: true};
                    }
                }
            }
        };
    }

    public static isHaveSabbaticalLeaveId(controlKeys: string): ValidatorFn {
        return (c: AbstractControl): any | null => {
            const group = c.parent as FormGroup;
            const controlHaveOne = group.get(controlKeys) as FormControl;
            if (controlHaveOne.value) {
                if (c.value === null || c.value === "") {
                    return {ifHaveOneIsRequired: true};
                }
            } else {
                return null;
            }
        };
    }

    public static required(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if ((!control.value && control.value !== 0) || control.value === -1 || control.value === '-1') {
                return {requiredCb: {value: control.value}};
            }
            return null;
        };
    }
}

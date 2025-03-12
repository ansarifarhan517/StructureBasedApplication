export const REGEXPS = {
  wholeNumber: /^[0-9]\d*$/,
  wholeNumberWithMax: /^[0-9]{0,3}$/,
  decimal: /^-?[0-9]\d*(\.\d+)?$/,
  phone: /^[+]{0,1}[\(\)\-/0-9 ]{0,20}$/,
  noDriveZone: /^[1-9]\d{0,3}$/, //range from 1 to 9999
  stuckDuration: /^(?:[5-9]|[1-9]\d{1,4}|99999)$/,
  commaSeparatedPhone: /^[+]{0,1}[\(\)\-/0-9 ]{0,20}(,[+]{0,1}[\(\)\-/0-9 ]{0,20})*$/,
  commaSeparatedEmail: /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,63}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,63})[\W]*$/,
  htmltags: /^((?!<.*>).)*$/,
}
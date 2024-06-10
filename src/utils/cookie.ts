export function setCookie(
  cname: string,
  cvalue: string,
  exdays: string | number = 'session'
) {
  let expires = 'expires=';
  if (exdays !== 'session') {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    expires = expires + d.toUTCString();
  } else {
    expires = expires + exdays;
  }
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export function getCookie(cname: string) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

// import { parse, serialize } from 'cookie';

// export function setCookie(name, value, options = {}) {
//   if (typeof window !== 'undefined') {
//     document.cookie = serialize(name, value, options);
//   }
// }

// export function getCookie(name, req) {
//   let cookies = '';

//   if (req) {
//     cookies = req.headers.cookie || '';
//   } else if (typeof window !== 'undefined') {
//     cookies = document.cookie || '';
//   }

//   const parsedCookies = parse(cookies);
//   return parsedCookies[name] || null;
// }

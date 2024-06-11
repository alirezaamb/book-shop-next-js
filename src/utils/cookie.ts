import { parse, serialize } from 'cookie';

// Client-side cookie setting function
export function setCookie(cname, cvalue, exdays = 'session') {
  let expires = '';
  if (exdays !== 'session') {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    expires = `expires=${d.toUTCString()};`;
  }
  document.cookie = `${cname}=${cvalue};${expires}path=/`;
}

// Client-side cookie getting function
export function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

// Server-side cookie parsing function
export function getServerCookie(req, cname) {
  if (!req || !req.headers.cookie) return null;
  const cookies = parse(req.headers.cookie);
  return cookies[cname] || null;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export function getStorage(key) {
    return sessionStorage.getItem(key);
  }
   
  export function setStorage(key, val) {
    return sessionStorage.setItem(key, val);
  }
   
  export function removeStorage(key) {
    return sessionStorage.removeItem(key);
  }
   
  export function getLocal(key) {
    return localStorage.getItem(key);
  }
   
  export function setLocal(key, val) {
    return localStorage.setItem(key, val);
  }
   
  export function removeLocal(key) {
    return localStorage.removeItem(key);
  }
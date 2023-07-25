export function isMobileDevice(): boolean {
    const userAgent = typeof window !== 'undefined' && window.navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  
    return userAgent ? mobileRegex.test(userAgent) : false;
  }
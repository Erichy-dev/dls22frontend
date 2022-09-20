function getCookie(name: string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function setCookie(name: string, value: string, days: number, del = false) {
  let expires = "";
  const date = new Date();
  if (!del) {
    date.setTime(date.getTime() + days * 24 * 60 * 60);
  } else {
    date.setTime(date.getTime() - days * 24 * 60 * 60);
  }
  expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export { getCookie, setCookie };

"use client";

// import { Cookie } from "../utils/types/helpersType";

export type Cookie = ({
  name: string;
  value: string;
  domain: string;
  days: number;
})

export const DelCookie = (name: string) => {
  const domain = location.hostname;

  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
};

export const GetCookie = (name: string) => {
  const cookieString: string = decodeURIComponent(document.cookie);

  const cookies: string[] = cookieString.split(";");

  const cookieName: string = `${name}=`;

  for (let cookie of cookies) {
    let selectedCookie = cookie.trim();

    while (selectedCookie.charAt(0) == " ") {
      selectedCookie = selectedCookie.substring(1);
    }

    if (selectedCookie.indexOf(cookieName) == 0) {
      return selectedCookie.substring(cookieName.length, selectedCookie.length);
    }
  }

  return "";
};

export const SetCookie = ({ name, value, domain, days }: Cookie) => {
  const day: Date = new Date();
  day.setTime(day.getTime() + days * 24 * 60 * 60 * 1000);

  console.log("log cle ", `${name}`);

  // const expireDate = day.toUTCString();
  if (name == "token") {
    const cleartoken = value.replace(/^"|"$/g, "");
    document.cookie = `${name}=${cleartoken}; expires=${day};  path=/;`;
  } else {
    document.cookie = `${name}=${value}; expires=${day};  path=/;`;
  }

  // document.cookie = `${name}=${value} expires=${expireDate} domain=${domain}; path=/`
};
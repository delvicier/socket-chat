import { defineMiddleware } from "astro:middleware";
import micromatch from "micromatch";

//@ts-ignore
export function onRequest ({ locals, request, url }, next) {
    // intercept data from a request
    // optionally, modify the properties in `locals`
    locals.hello = "data";
    if(micromatch.not(url.pathname, '/da')){
      console.log(url.pathname,'???')
    }

    // return a Response or the result of calling `next()`
    return next();
};

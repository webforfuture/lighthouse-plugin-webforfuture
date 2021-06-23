# Web For Future Lighthouse Plugin

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) allows to check websites for performance, accessibility and other criteria.

It's time we check the sustainability of our websites as well!

The average website is 2MB and rising. A few years ago websites were way smaller (1MB or less).
Every website that is transferred causes computers to work and consume energy.

IMHO the easiest rule of thumb is:

*"The smaller the better!"*

...at least when it comes to websites.

This plugin allows me to check this for every website that I have and display it in a report.

## Usage

    > npm install lighthouse-plugin-webforfuture

    > lighthouse https://webforfuture.org \
      --plugins=lighthouse-plugin-webforfuture \
      --only-categories='lighthouse-plugin-webforfuture'

See also [dok/run-lighthouse-local.sh](dok/run-lighthouse-local.sh).

## Want to help?

Web page size is only one thing that indicates sustainability.

Do you know other things we can measure to find out how "green" a website is?

Feel free to send a merge request with suggestions. 🙂

I'm running this project in my free time but I will try to react as soon as possible. 😉

Want more info? I'm also blogging sometimes (in german 🇩🇪) at [webforfuture.org](https://webforfuture.org).

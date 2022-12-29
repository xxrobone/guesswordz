# GAMEZ - assignment 3 CME- frontend

Creating a game (games) using html, css and vanilla js or Jquery
I chose vanilla js, I just want to practise to get better

## Rock Paper Scissors
This game is the one I started with and put most time on when visualizing the game, I did new logic,
Cause the game prior to this was a word guessing game, that i also have in this project. 
This one was pretty mush straigt forward, I hade some issues to create a restart and keeping values,
but figured it out. 
This one should work as intended. I had some bugs when doing timeouts on animations, and they are ok
The animations could be improved thou. 

## WordGuess
This game i did as a console game first, then built it to be a browser game, 
I'm not 100% happy with this one and figuring how to create more functions out of the game flow,
It was ready but I had some issues and now Im updating, it works if start / quit but working on how to fix the 
restart, values are reset, but the visuliazation is still worked on as of today. Could be updated. 
I will update this readme if I figure it all out, if you already tried it, hope it worked ok ;D

## Process, issues, thoughts

It´s been fun also challenging, redoing the assignment 2 which was a "hangman" console game to a dom game
Changed the name to word guess, not doing any hanging...
I also done a rock paper scissors
- fixed issue with my restart button, function was called inside
it instead of just resetting the values 

- Adding to win or losses on players progress works, but when i restart the round/ game session score point system is not 
resetting the values right and messes up second round

- Quit button works on both games, and reloads page, which resets everything.

- In the RPS game i added colors to console logs which was a nice thing, its easier to see and i see benefit of using this in the future
for bot when code is run successfully or error handling. :D

I try to make it semantic but it feels strange with a game, a lot of divs... div hell 

still creating separate css files for header, footer, nav, buttons makes some stuff easier
This would be much easier with a library (framework, not really) but REACT. I will use react 
and try to recreate both these games with react the coming months. 

I also seen the benefit of using something like Jquery, I have done exercises with jquery but decided to use Vanilla

I have some trouble concentrating and making 2 projects and flipping between them was a challenge

### The games page (demo)

https://xxrobone.github.io/gamez/

I hope you (who ever sees this) like these classic games, feel free to try them out in their current state

## Responsivness

This page has been tested on 
- Samsung 10 and 22
- Iphone 5 and 7
- Ipad pro
- LG 55 oled (I mean why not with the tech today)

And works fine on all these devices, LG tv game some hickups on the animations. 


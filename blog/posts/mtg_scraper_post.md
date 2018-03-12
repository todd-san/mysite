# MTG WebScraper Blog Post

## Abstract:
  I started this project some time ago as a means of learning more about *web-scraping* using python. I think I found, and still find, the idea of writing a program to automate the task of pulling information off of web applications pretty damn neat. To get started I watched a few youtube tutorials on *web-scraping*, and then decided to start a small scraping project.

#### TLDR
  The full post is below, but here's a [TLDR](#programming) link that encompasses the programming involved without any fluff.

## Scope of the Project:
  A few friends of mine that use a ***Slack*** channel to keep in touch during the work week are, to varying degrees, rather fond of the card game Magic. I think someone within the channel put me on to the idea of being able to type a command within the Slack, group-chat and have the command summon the image of a specific Magic card.

  In Slack, an image is rendered within the chat simply when that image's URL is posted. Therefore, my idea was to compile a library of key-value pairs of Magic card names and a respective URL of where the card image is hosted.

  For this post I'll walk through my strategy for scraping card names and their URLs from the web.

## Initial Strategy
  Basically, I started by doing some quick googling to find a good resource for Magic card images. I found two different sites:

  - https://deckbox.org/games/mtg/cards
    - **Pros:** layout is perfect for scraping *all* the Magic cards
    - **Cons:** The card image quality is shit & the card attributes aren't easy to grab
  - http://gatherer.wizards.com/Pages/Default.aspx
    - **Pros:** Image quality is quite good & the card attributes are tabled very nicely.
    - **Cons:** I have no clue how to write a program to get *all* of the cards


  Given the pros and cons of both sites and the lovely fact that **deckbox** card pages include a link to the card page within the **gatherer**-site, I decided to use a combination of both.

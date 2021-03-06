# Horror Castle Game

## ABOUT
When I was a child, I had this idea of creating a horror adventure game in powerpoint. I created all the artwork and had the locations connected inside the powerpoint but I couldn't figure out how to implement the key collecting and unlocking the doors based on collected keys. Fast forward some fifteen years later, I found the pictures when cleaning out my childhood room, so I'm going to finish the game now using HTML and JavaScript.

## How to run the game

### Try it out on Heroku

https://horror-castle-game.herokuapp.com/

### Run it on your local machine
Clone the project on your disc. Open the terminal inside the project folder. Run server from the project folder. For example using python:

    python -m http.server 8000

In your internet browser open the localhost on the chosen port.

    http://localhost:8000/

## Development

For generation of the image-map was used the free online tool [Image Map Generator](https://www.image-map.net/). The code outputted from this tool was copied to the [generator.py](./generator.py) script to the `htmlMap` variable and used to generate a page template for the corresponding room, using the command shown below.

    python ./generator.py > room_name.html

The encoding of the page generated this way is incorrect and page needs to be re-saved in UTF-8 encoding.

The `generator` script expects the areas in the map to have the title filled with lowecase names where multiple words are separated by dash (example: "right-door", "hole-in-the-wall"). For the area that represents the return to the previous page, this name must be "go-back", beacause the cursor will change to feets heading back when hovering over this are. For all other areas the cursor changes to a metalic glove icon.

Most of the sound effects were downlanded from the [free sound](https://freesound.org/) website.

The free online tool [Audio Cutter](https://clideo.com/editor/cut-audio) was used for clipping the audio and the free online tool [bear audio](https://www.bearaudiotool.com/) was used for more advanced audio editing (but still very basic).
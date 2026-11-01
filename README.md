# The Cat Memory Game

A browser-based memory card game featuring cat images, multiple difficulty levels, and persistent high scores.

## Play

Open `index.html` in a browser, or serve the project with any static web server. No build step or package installation is required.

For example, with Python:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## How to play

1. Choose **Easy**, **Medium**, or **Hard**.
2. Select **Start** to reveal the cards briefly.
3. Click two cards at a time to find matching cat pairs.
4. Match every pair before your score reaches zero.

The selected difficulty, current score, and high score are stored in the browser's `localStorage`. Use **Reset** on the start screen to clear the high score.

## Difficulty levels

| Level | Pairs | Starting score |
| --- | ---: | ---: |
| Easy | 6 | 400 |
| Medium | 8 | 600 |
| Hard | 12 | 800 |

## Project structure

```text
.
├── index.html       # Start screen and difficulty selection
├── game_page.html   # Memory game board
├── end_page.html    # Score and restart screen
├── js/              # Page behavior and game logic
└── assets/          # Stylesheets and cat/card images
```

## Technologies

- HTML5
- CSS3
- JavaScript
- Browser `localStorage`
- Google Fonts and Bootstrap Icons via CDN

## License

No license has been specified for this project.

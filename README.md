# The Aura Palette

Welcome to Aura Palette: a color palette generator using machine learning! With this tool, you can easily create a beautiful and cohesive color scheme for your design project, simply by providing a short piece of text as input. The generator will analyze the text and return a palette of colors that captures its essence and mood. Whether you are a graphic designer, artist, or just looking to add some color to your life, this tool is for you. So let's get started! Simply type in your text below, and discover the magic of machine learning and color.


## Team
The Aura Palette is an ML-based color palette generator. It is being developed by Suleyman, Ata, Can, Zeynepnur and Ayda as their senior project
in Bilkent University for CS491/492 course.




### Boring stuff:
 
 
 
### Instructions for frontend

```
brew install yarn
yarn install
yarn start
```

### Instructions for backend


### Instructions for ML

##### (i) Install requirements

```bash
$ pip install -r requirements.txt
```

##### Training Text-to-Palette Generation Networks (TPN) with PAT data

```bash
$ python main.py --mode train_TPN
```

##### Testing TPN
```bash
$ python main.py --mode test_TPN --resume_epoch 500
```

##### (ii) For custom test

```bash
$ python server.py
# in another terminal window:
curl -i -H "Content-Type: application/json" -X POST -d '{"queryStrings": ["your first query", "your second query"], "numPalettesPerQuery":1}' http://localhost:8000/palette
```
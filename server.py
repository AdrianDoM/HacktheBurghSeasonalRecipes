from flask import Flask, render_template
import pandas as pd
import json
recipes = pd.read_csv('recipes.csv', delimiter=',')
seasonals = pd.read_csv('season.csv', delimiter=',')
print(seasonals)
print(recipes)
#print(recipes)
app = Flask(__name__)

def getingredients(r):
	pass

@app.route('/')
def index():
	#return 'sanity check'
	return render_template('test.html')

def getrankings():
	pass

@app.route('/results', methods=['POST','GET'])
def helloworld():
	a = ['spaghetti','Tomato pie', '<a href=www.google.com>whut</a>']
	#let a be list of recipes
	return render_template('results.html', recipes=a)


if __name__ == "__main__":
	#pass
	app.run()
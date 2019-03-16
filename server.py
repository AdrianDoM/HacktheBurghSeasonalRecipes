from flask import Flask, render_template
import pandas as pd
import json
from getingredients import getBest
recipes = pd.read_csv('recipes.csv', delimiter=',')
seasonals = pd.read_csv('season.csv', delimiter=',')
#print(seasonals)
#print(recipes)
#print(recipes)
app = Flask(__name__)

def getingredients(r):
	pass

@app.route('/')
def index():
	#return 'sanity check'
	return render_template('test.html')

def get5recipes():
	bestrecipes = []
	for i in (getBest()[:5]):
		currRecp = []
		#print(i)
		#print(i[0])
		#bestrecipes.append(recipes.iloc[i[0]])
		# print(recipes.iloc[i[0]].iloc[1] + '\n\n')
		a = str(recipes.iloc[i[0]].iloc[1])
		currRecp += [recipes.iloc[i[0]].iloc[0]]
		currRecp += [a]
		ingredients = []
		#current ingredient iterating over
		curringred = ''
		curringrednum = 1
		for name, values in recipes.iloc[i[0]].iloc[2:].iteritems():
			# print('string' + str(values))
			if  str(curringrednum).zfill(2) in str(name):
				if str(values) != 'nan':
					curringred += (str(values) + ' ')
				else:
					pass
			else:
				print([curringred])
				curringrednum += 1
				# curringred = [x for x in curringred if str(x) != 'nan']
				if len(curringred) != 0:
					ingredients += [curringred[:-1]]
				if str(values) != 'nan':
					curringred = '<br>' + (str(values)+ ' ')
				else:
					curringred = ''
		# print(ingredients)
		currRecp += [ingredients]
		bestrecipes += [currRecp]
	return (bestrecipes)


@app.route('/results', methods=['POST','GET'])
def helloworld():
	a = get5recipes()
	#let a be list of recipes
	return render_template('results.html', recipes=a)

if __name__ == "__main__":
	get5recipes()
	app.run(port=80)
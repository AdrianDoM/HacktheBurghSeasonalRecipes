from flask import Flask, render_template, request
import pandas as pd
import json
import os
from getingredients import getBest
import datetime
import calendar
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


def get5recipes(month, pref1, pref2):
        bestrecipes = []
        for i in (getBest(month, pref1, pref2)[:5]):
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
                                # print([curringred])
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
                # print(i[3])
                currRecp += [str(i[3].__round__(3)) + '(KG)']
                bestrecipes += [currRecp]
        return (bestrecipes)

@app.route('/recipes', methods=['GET', 'POST'])
def recipes():
        #for simon
        # preferencesform = request.args
        #before
        #preferencesform = request.form
        #for i in preferencesform.keys():
        #       print(i)

        #preference = []
        #for i in preferencesform:
        #       preference += [preferencesform.get(i)]
        #preference += request.args.get('pref1')
        #preference += request.args.get('pref2')
        #preference += request.args.get('pref3')
        #preference += request.args.get('pref4')
        #print(preference)
        #before
        #if preferencesform['month'] == 'Current':
        #       month = calendar.month_abbr[datetime.datetime.now().month]
        #else:
        #       month = preferencesform['month']
        #print(month, preferencesform['pref1'], preferencesform['pref2'])
        #a = get5recipes(month, preferencesform['pref1'], preferencesform['pref2'])
        #simon
        #a = getRecipe(int(request.args.get('index')))
        print(request.args.get('index'))
        #let a be list of recipes
        return render_template('results.html', recipes=a)

@app.route('/results', methods=['GET', 'POST'])
def helloworld():
        #for simon
        # preferencesform = request.args
        #before
        preferencesform = request.form
        for i in preferencesform.keys():
                print(i)

        preference = []
        #for i in preferencesform:
        #       preference += [preferencesform.get(i)]
        #preference += request.args.get('pref1')
        #preference += request.args.get('pref2')
        #preference += request.args.get('pref3')
        #preference += request.args.get('pref4')
        #print(preference)
        #before
        if preferencesform['month'] == 'Current':
                month = calendar.month_abbr[datetime.datetime.now().month]
        else:
                month = preferencesform['month']
        print(month, preferencesform['pref1'], preferencesform['pref2'])
        a = get5recipes(month, preferencesform['pref1'], preferencesform['pref2'])
        #simon
        # a = getRecipe(int(request.args.get('index')))
        #let a be list of recipes
        return render_template('results.html', recipes=a)

@app.route('/titles')
def titles():

        mystr = ""
        for i in recipes['Title']:
                mystr = mystr + str(i) + ','
        return mystr

def getRecipe(num):
        i = num
        currRecp = []
        # print(i)
        # print(i[0])
        # bestrecipes.append(recipes.iloc[i[0]])
        # print(recipes.iloc[i[0]].iloc[1] + '\n\n')
        a = str(recipes.iloc[i].iloc[1])
        currRecp += [recipes.iloc[i].iloc[0]]
        currRecp += [a]
        ingredients = []
        # current ingredient iterating over
        curringred = ''
        curringrednum = 1
        for name, values in recipes.iloc[i].iloc[2:].iteritems():
                # print('string' + str(values))
                if str(curringrednum).zfill(2) in str(name):
                        if str(values) != 'nan':
                                curringred += (str(values) + ' ')
                        else:
                                pass
                else:
                        # print([curringred])
                        curringrednum += 1
                        # curringred = [x for x in curringred if str(x) != 'nan']
                        if len(curringred) != 0:
                                ingredients += [curringred[:-1]]
                        if str(values) != 'nan':
                                curringred = '<br>' + (str(values) + ' ')
                        else:
                                curringred = ''
        # print(ingredients)
        currRecp += [ingredients]
        return [currRecp]

if __name__ == "__main__":
        # print(getRecipe(1))
        # app.run(port=5000)
        #port = int(os.environ.get('PORT', 5000))
        app.run()

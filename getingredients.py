import csv
from operator import itemgetter

def getBest():
    columnNames = ['Ingredient{:02}'.format(i) for i in range(1, 20)]
    month = 'Jun'
    recipes = []
    ingredients = set()

    with open('season.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            ingredients.add((row['Ingredient'], int(row[month])))

    with open('recipes.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for idx, row in enumerate(reader):
            score = 0
            for column in columnNames:
                for ing, scr in ingredients:
                    if ing in row[column]:
                        score += scr
            recipes.append((idx, row['Title'], score))

    recipes.sort(key=(lambda x: x[2]), reverse=True)
    return recipes

getBest()


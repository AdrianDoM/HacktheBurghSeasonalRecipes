from flask import Flask, render_template
import pandas as pd
import json
import os
from getingredients import getBest
recipes = pd.read_csv('season.csv', delimiter=',')

for i in recipes['Ingredient']:
	print(i)
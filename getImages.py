from bs4 import BeautifulSoup
import requests
import re
import pandas as pd
import urllib.request
import urllib3
# http = urllib3.PoolManager()
import os
# import cookielib
import json
stuff = []
recipes = pd.read_csv('recipes.csv', delimiter=',')

with open('stuff.txt', 'r') as file:
	stuff = file.read().splitlines()
	# print(stuff)

for i in recipes['Title']:
	page = 'https://www.bbcgoodfood.com/search/guides?query=' + str(i)
	# print(page)

print(page)
# page = urllib3.urlopen(page)

import requests
r = requests.get('http://www.crummy.com/software/BeautifulSoup/')
soup = BeautifulSoup(r.content)
print(soup)

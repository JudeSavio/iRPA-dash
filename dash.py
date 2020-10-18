# -*- coding: utf-8 -*-
"""
Created on Sat Oct 17 15:55:37 2020

@author: judea
"""

import webbrowser
import os
from bs4 import BeautifulSoup as Soup

soup = Soup(open('index.html'),"html.parser")

new = 2;
filename = 'index.html'
webbrowser.open('file://' + os.path.realpath(filename),new=new)
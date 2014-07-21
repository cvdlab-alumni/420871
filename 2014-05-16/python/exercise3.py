# Exercise 3

""" progressive refinement of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
""" import modules from larcc/lib """
sys.path.insert(0, '/home/biagio/lar-cc/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *

from sysml import *

def automate_merging(master, mergingWith, diagram):
	V,CV = master
	sorting = sorted(mergingWith, reverse=True)
	for k in range(len)(mergingWith):
		if mergingWith[k] in CV:
			master = diagram2cell(master, diagram, mergingWith[k])


def automate_numbering(master):
	V,CV = master
	hpc = SKEL_1(STRUCT(MKPOLS(master)))
	hpc = cellNumbering (master,hpc)(range(len(CV)),YELLOW,1)
	return hpc
	

def automate_removing(master, removingFrom):
	V,CV = master
	sorting = sorted(removingFrom, reverse=False)
	for n in range(len)(removingFrom):
		if removingFrom[n] in CV:
			# memorizzo il valore da rimuovere in una lista temporanea
			toRemove = [removingFrom[n]]
			master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
	return master
		

# Exercise 1

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

DRAW = COMP([VIEW,STRUCT,MKPOLS])

pavimento = CUBOID([10,6.8,0.1])

appartamento = assemblyDiagramInit([13,11,1])([[0.3,2,0.3,1,0.3,2,0.3,1,0.3,1,0.3,1,0.3],[.3,1,.3,1,.3,1,.3,1,0.3,1,0.3],[2]])
V,CV = appartamento

apt_hpc = SKEL_1(STRUCT(MKPOLS(appartamento)))
apt_hpc = cellNumbering (appartamento,apt_hpc)(range(len(CV)),YELLOW,0.5)
#VIEW(apt_hpc)

c1 = CUBOID([2, 0.3, 2])
c2 = T([1,3])([0.7,0.5])(CUBOID([0.6, 0.3, 1]))
finestra1 = DIFF([c1,c2])
finestra1 = STRUCT([finestra1])

# di 45 gradi
c1 = CUBOID([0.3, 2, 2])
c2 = T([2,3])([0.7,0.5])(CUBOID([0.3, 0.6, 1]))
finestra_girata = DIFF([c1,c2])

# tolgo i muri
toRemove = [17,87,73,74,75,76,81,105,107,117,118,119,126,129,85,113,111,89,0,1,2,3,11,12,13,149,7,8,9,10,21,19,32,31,30,29,41,43,54,65,53,52,51,63,61,27,45,46,47,35,57,33,37,69,79,91,93,115,
82,84,86,704,106,108,128,130,104,78,80,100,102,124,122,20,18,20,16,14,42,40,62,60,64,38,58,56,34,36,
120,131,133,134]

apt_no_muri = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

apt_no_muri_3D = (STRUCT(MKPOLS(apt_no_muri)))
#VIEW(STRUCT([pavimento,apt_no_muri_3D]))

apt_no_muri_hpc_skel = SKEL_1(STRUCT(MKPOLS(apt_no_muri)))
apt_no_muri_hpc_skel = cellNumbering (appartamento,apt_no_muri_hpc_skel)(range(len(CV)),YELLOW,1)

appartamento_finale = STRUCT([pavimento,T([1,2])([0.3,3.9])(finestra1),T([1,2])([7.8,6.5])(finestra1),T(1)(9.8)(finestra_girata),apt_no_muri_3D])
VIEW(appartamento_finale)
VIEW(apt_no_muri_hpc_skel)

"""
NON FUNZIONA!

# rimuovo porta muro 33

toMerge = 33
cell = MKPOL([appartamento[0],[[v+1 for v in  appartamento[1][toMerge]]],None])
#VIEW(STRUCT([apt_no_muri_hpc_skel,cell]))

diagram = assemblyDiagramInit([3,1,1])([[0.2,0.6,0.2],[0.3],[1]])
apt_no_muri = diagram2cell(diagram,apt_no_muri,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(apt_no_muri)))
hpc = cellNumbering (apt_no_muri,hpc)(range(len(apt_no_muri[1])),YELLOW,1)
#VIEW(hpc)

toRemove = [11]
apt_no_muri = apt_no_muri[0], [cell for k,cell in enumerate(apt_no_muri[1]) if not (k in toRemove)]
DRAW(apt_no_muri)

# rimuovo porta muro 33
toMerge = 37
cell = MKPOL([appartamento[0],[[v+1 for v in  appartamento[1][toMerge]]],None])
VIEW(STRUCT([apt_no_muri_hpc_skel,cell]))

diagram = assemblyDiagramInit([3,1,1])([[0.2,0.6,0.2],[0.3],[1]])
apt_no_muri = diagram2cell(diagram,apt_no_muri,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(apt_no_muri)))
hpc = cellNumbering (apt_no_muri,hpc)(range(len(apt_no_muri[1])),YELLOW,1)
VIEW(hpc)

toRemove = [11]
apt_no_muri = apt_no_muri[0], [cell for k,cell in enumerate(apt_no_muri[1]) if not (k in toRemove)]
DRAW(apt_no_muri)

# rimuovo porta muro 27
toMerge = 79
cell = MKPOL([appartamento[0],[[v+1 for v in  appartamento[1][toMerge]]],None])
VIEW(STRUCT([apt_no_muri_hpc_skel,cell]))

diagram = assemblyDiagramInit([2,1,1])([[0.7,0.3],[0.3],[1]])
apt_no_muri = diagram2cell(diagram,apt_no_muri,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(apt_no_muri)))
hpc = cellNumbering (apt_no_muri,hpc)(range(len(apt_no_muri[1])),YELLOW,1)
VIEW(hpc)

toRemove = [26]
apt_no_muri = apt_no_muri[0], [cell for k,cell in enumerate(apt_no_muri[1]) if not (k in toRemove)]
DRAW(apt_no_muri)
"""


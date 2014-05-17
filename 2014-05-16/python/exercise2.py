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

# funzione per avere i colori correttamente in rgb
def color2rgb(r,g,b):
	return Color4f(r/255.0,g/255.0,b/255.0,1.0)

DRAW = COMP([VIEW,STRUCT,MKPOLS])

pavimento = CUBOID([10,6.8,0.1])
color_pavimento = color2rgb(152,105,53)
pavimento = COLOR(color_pavimento)(pavimento)


appartamento = assemblyDiagramInit([13,11,1])([[0.3,2,0.3,1,0.3,2,0.3,1,0.3,1,0.3,1,0.3],[.3,1,.3,1,.3,1,.3,1,0.3,1,0.3],[2]])
V,CV = appartamento

apt_hpc = SKEL_1(STRUCT(MKPOLS(appartamento)))
apt_hpc = cellNumbering (appartamento,apt_hpc)(range(len(CV)),YELLOW,0.5)


c1 = CUBOID([2, 0.3, 2])
c2 = T([1,3])([0.7,0.5])(CUBOID([0.6, 0.3, 1]))
finestra1 = DIFF([c1,c2])

# di 45 gradi
c1 = CUBOID([0.3, 2, 2])
c2 = T([2,3])([0.7,0.5])(CUBOID([0.3, 0.6, 1]))
finestra_girata = DIFF([c1,c2])


# tolgo i muri
toRemove = [17,87,73,74,75,76,81,105,107,117,118,119,126,129,85,113,111,89,0,1,2,3,11,12,13,149,7,8,9,10,21,19,32,31,30,29,41,43,54,65,53,52,51,63,61,27,45,46,47,35,57,33,37,69,79,91,93,115,
82,84,86,704,106,108,128,130,104,78,80,100,102,124,122,20,18,20,16,14,42,40,62,60,64,38,58,56,34,36,
120,131,133,134,132]

apt_no_muri = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

apt_no_muri_3D = (STRUCT(MKPOLS(apt_no_muri)))
#VIEW(STRUCT([pavimento,apt_no_muri_3D]))

appartamento_finale = STRUCT([pavimento,T([1,2])([0.3,3.9])(finestra1),T([1,2])([7.8,6.5])(finestra1),T(1)(9.8)(finestra_girata),apt_no_muri_3D])

piani_appartamenti = [T(3)(2.1),appartamento_finale]

tetto = T([1,2,3])([-1,-1,18.5])(CUBOID([12,9,0.5]))
color_tetto = color2rgb(128,0,0)
tetto = COLOR(color_tetto)(tetto)

palazzo = STRUCT(NN(8)(piani_appartamenti))
palazzo = STRUCT([palazzo, tetto])

VIEW(palazzo)


# Exercise 2

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

from exercise1_with_toRemove import master, hpc

# function to have color in RGB
def color2rgb(r,g,b):
	return Color4f(r/255.0,g/255.0,b/255.0,1.0)

DRAW = COMP([VIEW,STRUCT,MKPOLS])


floor = CUBOID([10,6.8,0.1])
color_floor = color2rgb(152,105,53)
floor = COLOR(color_floor)(floor)

master_3D = (STRUCT(MKPOLS(master)))

color_master_3D = color2rgb(255,229,180)
master_3D = COLOR(color_master_3D)(master_3D)

# Roof creation
roof = assemblyDiagramInit([15,13,1])([[0.3,2,0.3,1,0.3,2,0.3,1,0.3,1,0.3,2,0.3,0.5,0.3], [0.3,2,0.3,1.5,0.3,0.5,0.3,1,0.3,1.7,0.3,1.3,0.3], [0.4]])
V,CV = roof

# walls removing
toRemove =[0,1,2,3,4,5,11,12,13,14,15,16,17,18,24,25,37,38,50,51,63,64,76,77,89,90,102,103,
		   182,183,184,185,186,187,188,189]

roof = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
roof_3D = T([3])([21.7])(STRUCT(MKPOLS(roof)))

# roof coloring
color_roof = color2rgb(128,0,0)
roof_3D = COLOR(color_roof)(roof_3D)
# /Roof creation

floors = [T(3)(3.1),master_3D]
palace = STRUCT(NN(6)(floors))


palace = STRUCT([palace, roof_3D])

floor = CUBOID([15,13,0.5])
palace = STRUCT([T([1,3])([2,-2.5])(palace), floor])


# Pole
pole = CYLINDER([.2,3.3])(32)
color_pole = color2rgb(67,67,67)
pole = COLOR(color_pole)(pole)
# /Pole

# Light
light = SPHERE(.5)([32,32])
light = T(3)(3)(light)
color_light = color2rgb(245,253,191)
light = COLOR(color_light)(light)
# /Light

# Streetlight
streetlight = STRUCT([pole,light])

# streetlight 1
streetlight_1 = T([1,2])([2,2])(streetlight)

# streetlight 2
streetlight_2 = T([1,2])([13, 11.5])(streetlight)

# streetlight 3
streetlight_3 = T([1,2])([2, 11.5])(streetlight)

# Streetlighth
streetlights = STRUCT([streetlight_1,streetlight_2,streetlight_3])

palace = STRUCT([palace, streetlights])

VIEW(palace)



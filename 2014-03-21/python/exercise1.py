from pyplasm import CUBOID
from pyplasm import STRUCT
from pyplasm import T
from pyplasm import VIEW
from pyplasm import COLOR
from pyplasm import Color4f

# funzione per avere i colori correttamente in rgb
def color2rgb(r,g,b):
	return Color4f(r/255.0,g/255.0,b/255.0,1.0)

# strati grezzi senza colore e senza traslazione
floor0_grezzo = CUBOID([10,10])
floor1_grezzo = CUBOID([8,8])
floor2_grezzo = CUBOID([6,6])
floor3_grezzo = CUBOID([4,4])
floor4_grezzo = CUBOID([2,2])

# strati traslati e colorati
color0 = color2rgb(51,25,0)
floor0 = COLOR(color0)(floor0_grezzo)

color1 = color2rgb(102,51,0)
floor1 = COLOR(color1)(T([1,2,3])([1,1,1])(floor1_grezzo))

color2 = color2rgb(153,76,0)
floor2 = COLOR(color1)(T([1,2,3])([2,2,2])(floor2_grezzo))

color3 = color2rgb(204,102,0)
floor3 = COLOR(color3)(T([1,2,3])([3,3,3])(floor3_grezzo))

color4 = color2rgb(255,128,0)
floor4 = COLOR(color4)(T([1,2,3])([4,4,4])(floor4_grezzo))

finale = STRUCT([floor0, floor1, floor2, floor3, floor4])

VIEW(finale)

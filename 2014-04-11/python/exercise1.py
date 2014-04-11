from pyplasm import CUBOID
from pyplasm import STRUCT
from pyplasm import T
from pyplasm import VIEW
from pyplasm import COLOR
from pyplasm import Color4f
from pyplasm import PROD
from pyplasm import Q

# funzione per avere i colori correttamente in rgb
def color2rgb(r,g,b):
	return Color4f(r/255.0,g/255.0,b/255.0,1.0)

# strati grezzi senza colore e senza traslazione
# e' stato aggiunto lo spessore
floor0_grezzo = PROD([CUBOID([10,10]),Q(1)])
floor1_grezzo = PROD([CUBOID([8,8]),Q(1)])
floor2_grezzo = PROD([CUBOID([6,6]),Q(1)])
floor3_grezzo = PROD([CUBOID([4,4]),Q(1)])
floor4_grezzo = PROD([CUBOID([2,2]),Q(1)])

# strati traslati e colorati
color0 = color2rgb(51,25,0)
floor0 = (floor0_grezzo)

color1 = color2rgb(102,51,0)
floor1 = (T([1,2,3])([1,1,1])(floor1_grezzo))

color2 = color2rgb(153,76,0)
floor2 = (T([1,2,3])([2,2,2])(floor2_grezzo))

color3 = color2rgb(204,102,0)
floor3 = (T([1,2,3])([3,3,3])(floor3_grezzo))

color4 = color2rgb(255,128,0)
floor4 = (T([1,2,3])([4,4,4])(floor4_grezzo))

finale = STRUCT([floor0, floor1, floor2, floor3, floor4])

VIEW(finale)


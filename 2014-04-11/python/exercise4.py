from pyplasm import CUBOID
from pyplasm import SPHERE
from pyplasm import CYLINDER
from pyplasm import STRUCT
from pyplasm import T
from pyplasm import VIEW
from pyplasm import COLOR
from pyplasm import Color4f
from pyplasm import PROD
from pyplasm import NN
from pyplasm import Q

# funzione per avere i colori correttamente in rgb
def color2rgb(r,g,b):
	return Color4f(r/255.0,g/255.0,b/255.0,1.0)

# strati grezzi senza colore e senza traslazione
# e' stato aggiunto lo spessore
pavimento_grezzo = (T([1,2,3])([-5,-10,0])(CUBOID([20,30])))
floor0_grezzo = PROD([CUBOID([10,10]),Q(1)])
floor1_grezzo = PROD([CUBOID([8,8]),Q(1)])
floor2_grezzo = PROD([CUBOID([6,6]),Q(1)])
floor3_grezzo = PROD([CUBOID([4,4]),Q(1)])
floor4_grezzo = PROD([CUBOID([2,2]),Q(1)])

color_pavimento = color2rgb(152,105,53)
pavimento = COLOR(color_pavimento)(pavimento_grezzo)

# strati traslati e colorati
color = color2rgb(255,201,99)

floor0 = COLOR(color)(floor0_grezzo)
floor1 = COLOR(color)(T([1,2,3])([1,1,1])(floor1_grezzo))
floor2 = COLOR(color)(T([1,2,3])([2,2,2])(floor2_grezzo))
floor3 = COLOR(color)(T([1,2,3])([3,3,3])(floor3_grezzo))
floor4 = COLOR(color)(T([1,2,3])([4,4,4])(floor4_grezzo))

# creo l'albero da replicare
tronco_grezzo = CYLINDER([0.5, 0.5])(60)
tronco = COLOR(color2rgb(101, 67, 33))(tronco_grezzo)
foglie = SPHERE(1)([30,30])
foglie = COLOR(color2rgb(85,104,50))(foglie)
# tralso le foglie
foglie = T(3)(1.3)(foglie)
albero = STRUCT([tronco,foglie])

# creo gli alberi
# alberi di destra
T2=T(2)(4)
alberi_dx=STRUCT(NN(5)([T2, albero]))
alberi_dx=T([1,2,3])([-3,-6,0])(alberi_dx)
# alberi di sinistra
T2=T(2)(7)
alberi_sx=STRUCT(NN(3)([T2, albero]))
alberi_sx=T([1,2,3])([13,-8,0])(alberi_sx)

finale = STRUCT([pavimento, floor0, floor1, floor2, floor3, floor4, alberi_dx, alberi_sx])

VIEW(finale)


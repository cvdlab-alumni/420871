from pyplasm import CUBOID
from pyplasm import STRUCT
from pyplasm import T
from pyplasm import VIEW
from pyplasm import Q
from pyplasm import PROD
from pyplasm import SKELETON


# strati grezzi senza colore e senza traslazione
# e' stato aggiunto lo spessore
floor0_grezzo = PROD([CUBOID([10,10]),Q(1)])
floor1_grezzo = PROD([CUBOID([8,8]),Q(1)])
floor2_grezzo = PROD([CUBOID([6,6]),Q(1)])
floor3_grezzo = PROD([CUBOID([4,4]),Q(1)])
floor4_grezzo = PROD([CUBOID([2,2]),Q(1)])

# strati traslati
floor0 = floor0_grezzo
floor1 = T([1,2,3])([1,1,1])(floor1_grezzo)
floor2 = T([1,2,3])([2,2,2])(floor2_grezzo)
floor3 = T([1,2,3])([3,3,3])(floor3_grezzo)
floor4 = T([1,2,3])([4,4,4])(floor4_grezzo)

finale = STRUCT([floor0, floor1, floor2, floor3, floor4])

VIEW(SKELETON(1)(finale))
#VIEW(finale)


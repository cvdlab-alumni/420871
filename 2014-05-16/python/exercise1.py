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

def objExporter((V,FV), filePath):
    out_file = open(filePath,"w")
    out_file.write("# List of Vertices:\n")
    for v in V:
        out_file.write("v")
        for c in v:
            out_file.write(" " + str(c))
        out_file.write("\n")
    out_file.write("# Face Definitions:\n")
    for f in FV:
        out_file.write("f")
        for v in f:
            out_file.write(" " + str(v+1))
        out_file.write("\n")
    out_file.close()

master = assemblyDiagramInit([15,13,2])([[0.3,2,0.3,1,0.3,2,0.3,1,0.3,1,0.3,2,0.3,0.5,0.3], [0.3,2,0.3,1.5,0.3,0.5,0.3,1,0.3,1.7,0.3,1.3,0.3], [0.1,3]])
V,CV = master

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),YELLOW,1)
VIEW(hpc)

# walls removing
toRemove =[0,1,2,3,4,5,6,7,8,9,10,11,12,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,41,43,45,48,49,50,51,67,69,71,74,75,76,77,81,83,85,87,89,93, 95,97,100,101,102,103,107,109,111,113,115,126,127,128,129,133,135,137,139,141,144,145,146,147,148,149,150,151,152,153,154,155,
174,175,176,177,178,179,180,181,185,200,201,202,203,204,205,206,207,338,339,340,341,342,343,344,345,346,347,348,349,350,351,
352,353,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,263,237,211,289,293,267,241,297,299,301,
189,191,193,195,197,305,307,309,331,333,335,357,359,361,279,281,283,245,247,249,251,253,255,257,
]

"""
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
DRAW(master)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),YELLOW,1.5)
VIEW(hpc)
"""

# DOORS CREATION #
entry_door = assemblyDiagramInit([3,1,2])([[0.1,0.8,0.1],[.3],[2.2,.5]])
#hpc_entry_door = SKEL_1(STRUCT(MKPOLS(entry_door)))
#hpc_entry_door = cellNumbering (entry_door,hpc_entry_door)(range(len(entry_door[1])),RED,1.5)

kitchen_door = assemblyDiagramInit([3,1,2])([[0.1,0.8,0.1],[.3],[2.2,.5]])
#hpc_kitchen_door = SKEL_1(STRUCT(MKPOLS(kitchen_door)))
#hpc_kitchen_door = cellNumbering (kitchen_door,hpc_kitchen_door)(range(len(kitchen_door[1])),RED,1)

room1_door = assemblyDiagramInit([3,1,2])([[0.1,0.8,0.1],[.3],[2.2,.5]])
#hpc_room1_door = SKEL_1(STRUCT(MKPOLS(room1_door)))
#hpc_room1_door = cellNumbering (room1_door,hpc_room1_door)(range(len(room1_door[1])),RED,1)

daynight_door = assemblyDiagramInit([1,3,2])([[0.3],[0.3,0.9,0.3],[2.2,.5]])
#hpc_daynight_door = SKEL_1(STRUCT(MKPOLS(daynight_door)))
#hpc_daynight_door = cellNumbering (daynight_door,hpc_daynight_door)(range(len(daynight_door[1])),RED,1)

bathroom_door = assemblyDiagramInit([1,3,2])([[0.3],[0.3,0.9,0.3],[2.2,.5]])
#hpc_bathroom_door = SKEL_1(STRUCT(MKPOLS(bathroom_door)))
#hpc_bathroom_door = cellNumbering (bathroom_door,hpc_bathroom_door)(range(len(bathroom_door[1])),RED,1)

bathroomInRoom_door = assemblyDiagramInit([1,3,2])([[0.3],[0.1,0.8,0.1],[2.2,.5]])
#hpc_bathroomInRoom_door = SKEL_1(STRUCT(MKPOLS(bathroomInRoom_door)))
#hpc_bathroomInRoom_door = cellNumbering (bathroomInRoom_door,hpc_bathroomInRoom_door)(range(len(bathroomInRoom_door[1])),RED,1)

room2_door = assemblyDiagramInit([1,3,2])([[0.3],[0.1,0.8,0.1],[2.2,.5]])
#hpc_room2_door = SKEL_1(STRUCT(MKPOLS(room2_door)))
#hpc_room2_door = cellNumbering (room2_door,hpc_room2_door)(range(len(room2_door[1])),RED,1)
# /DOORS CREATION #

# WINDOWS CREATION #
kitchen_window = assemblyDiagramInit([3,1,3])([[0.2,1.6,0.2],[.3],[1,1.4,.3]])
hpc_kitchen_window = SKEL_1(STRUCT(MKPOLS(kitchen_window)))
hpc_kitchen_window = cellNumbering (kitchen_window,hpc_kitchen_window)(range(len(kitchen_window[1])),WHITE,1)

garden_window = assemblyDiagramInit([3,1,2])([[0.2,1.6,0.2],[.3],[2.2,.5]])
hpc_garden_window = SKEL_1(STRUCT(MKPOLS(garden_window)))
hpc_garden_window = cellNumbering (garden_window,hpc_garden_window)(range(len(garden_window[1])),WHITE,1)

bathroom_window = assemblyDiagramInit([3,1,3])([[0.2,0.9,0.2],[.3],[1,1.4,.3]])
#hpc_bathroom_window = SKEL_1(STRUCT(MKPOLS(bathroom_window)))
#hpc_bathroom_window = cellNumbering (bathroom_window,hpc_bathroom_window)(range(len(bathroom_window[1])),WHITE,1)

room1_window = assemblyDiagramInit([1,3,3])([[0.3],[0.1,1.1,0.1],[1,1.4,.3]])
#hpc_room1_window = SKEL_1(STRUCT(MKPOLS(room1_window)))
#hpc_room1_window = cellNumbering (room1_window,hpc_room1_window)(range(len(room1_window[1])),WHITE,1)

bathRoomInRoom_window = assemblyDiagramInit([1,3,3])([[0.3],[0.2,0.9,0.2],[1.8,0.6,.3]])
#hpc_bathRoomInRoom_window = SKEL_1(STRUCT(MKPOLS(bathRoomInRoom_window)))
#hpc_bathRoomInRoom_window = cellNumbering (bathRoomInRoom_window,hpc_bathRoomInRoom_window)(range(len(bathRoomInRoom_window[1])),WHITE,1)

room2_window = assemblyDiagramInit([1,3,3])([[0.3],[0.1,0.8,0.1],[1.8,0.6,.3]])
#hpc_room2_window = SKEL_1(STRUCT(MKPOLS(room2_window)))
#hpc_room2_window = cellNumbering (room2_window,hpc_room2_window)(range(len(room2_window[1])),WHITE,1)
# /WINDOWS CREATION #

# DOORS ASSEMBLING #
master = diagram2cell(entry_door, master, 79)
#master = diagram2cell(kitchen_door, master, 91)
#master = diagram2cell(daynight_door, master, 163)
master = diagram2cell(room1_door, master, 187)
#master = diagram2cell(bathroom_door, master, 215)
#master = diagram2cell(room2_door, master, 223)
#master = diagram2cell(bathroomInRoom_door, master, 275)
# /DOORS ASSEMBLING #

# WINDOWS ASSEMBLING #
#master = diagram2cell(kitchen_window, master, 14)
#master = diagram2cell(garden_window, master, 73)
#master = diagram2cell(bathroom_window, master, 192)
#master = diagram2cell(room1_window, master, 179)
#master = diagram2cell(bathRoomInRoom_window, master, 200)
#master = diagram2cell(room2_window, master, 175)
# /WINDOWS ASSEMBLING #

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),YELLOW,1)
VIEW(hpc)


# walls removing
emptyChain =[0,1,2,3,4,5,6,7,8,9,10,11,12,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,41,43,45,48,49,50,51,67,69,71,74,75,76,77,81,83,85,87,89,93, 95,97,100,101,102,103,107,109,111,113,115,126,127,128,129,133,135,137,139,141,144,145,146,147,148,149,150,151,152,153,154,155,
174,175,176,177,178,179,180,181,185,200,201,202,203,204,205,206,207,338,339,340,341,342,343,344,345,346,347,348,349,350,351,
352,353,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,263,237,211,289,293,267,241,297,299,301,
189,191,193,195,197,305,307,309,331,333,335,357,359,361,279,281,283,245,247,249,251,253,255,257,
]
#solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
#DRAW((master[0],solidCV))
#solidCV = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(solidCV)

#master = V,[cell for k,cell in enumerate(CV) if not (k in emptyChain)]
#DRAW(master)

#solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
#DRAW((master[0],solidCV))

"""
### ESPORTAZIONE

solidCV = [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW((master[0],solidCV))

exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in toRemove]
exteriorCV += exteriorCells(master)
CV = solidCV + exteriorCV
V = master[0]
FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
#VIEW(EXPLODE(1.5,1.5,1.5)(MKPOLS((V,FV))))

BF = boundaryCells(solidCV,FV)
boundaryFaces = [FV[face] for face in BF]
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS(B_Rep)))
#VIEW(STRUCT(MKPOLS(B_Rep)))


verts, triangles = quads2tria(B_Rep)
B_Rep = V,boundaryFaces
#VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS((verts, triangles))))
#VIEW(STRUCT(MKPOLS((verts, triangles))))

# ESPORTO
#objExporter((verts, triangles), 'export.obj')
"""

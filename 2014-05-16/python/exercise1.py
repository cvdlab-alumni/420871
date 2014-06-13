""" boundary extraction of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
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
    

#master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])
#diagram1 = assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]])
#diagram2 = assemblyDiagramInit([5,1,3])([[1.5,0.9,.2,.9,1.5],[.3],[1,1.4,.3]])

master = assemblyDiagramInit([15,13,2])([[0.3,2,0.3,1,0.3,2,0.3,1,0.3,1,0.3,2,0.3,0.5,0.3], [0.3,2,0.3,1.5,0.3,0.5,0.3,1,0.3,1.7,0.3,1.3,0.3], [0.1,3]])

# DOORS CREATION #
entry_door = assemblyDiagramInit([3,1,2])([[0.1,0.8,0.1],[.3],[2.5,.5]])
kitchen_door = assemblyDiagramInit([3,1,2])([[0.1,0.8,0.1],[.3],[2.5,.5]])
room1_door = assemblyDiagramInit([3,1,2])([[0.1,0.8,0.1],[.3],[2.5,.5]])
daynight_door = assemblyDiagramInit([1,3,2])([[0.3],[0.3,0.9,0.3],[2.5,.5]])
bathroom_door = assemblyDiagramInit([1,3,2])([[0.3],[0.3,0.9,0.3],[2.5,.5]])
bathroomInRoom_door = assemblyDiagramInit([1,3,2])([[0.3],[0.1,0.8,0.1],[2.5,.5]])
room2_door = assemblyDiagramInit([1,3,2])([[0.3],[0.1,0.8,0.1],[2.5,.5]])
# /DOORS CREATION #

# WINDOWS CREATION #
kitchen_window = assemblyDiagramInit([3,1,3])([[0.2,1.6,0.2],[.3],[1,1.6,.4]])
garden_window = assemblyDiagramInit([3,1,2])([[0.2,1.6,0.2],[.3],[2.5,.5]])
# stanza mia
room2_window = assemblyDiagramInit([3,1,3])([[0.2,1,0.2],[.3],[1,1.6,.4]])
bathroom_window = assemblyDiagramInit([1,3,3])([[0.3],[0.5,1,0.5],[1.8,0.6,0.6]])
bathRoomInRoom_window = assemblyDiagramInit([1,3,3])([[0.3],[0.2,0.6,0.2],[1.8,0.6,0.6]])
room1_window = assemblyDiagramInit([1,3,3])([[0.3],[0.2,0.9,0.2],[1,1,1]])
# /WINDOWS CREATION #

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,0.7)
#VIEW(hpc)
 
# DOORS ASSEMBLING #
master = diagram2cell(entry_door,master,79)
master = diagram2cell(kitchen_door,master,90)
master = diagram2cell(room1_door,master,185)
master = diagram2cell(daynight_door,master,161)
master = diagram2cell(bathroom_door,master,211)
master = diagram2cell(bathroomInRoom_door,master,270)
master = diagram2cell(room2_door,master,218)
# /DOORS ASSEMBLING #

# WINDOWS ASSEMBLING #
master = diagram2cell(kitchen_window,master,47)
master = diagram2cell(garden_window,master,140)
master = diagram2cell(room1_window,master,306)
master = diagram2cell(bathroom_window,master,309)
master = diagram2cell(bathRoomInRoom_window,master,316)
master = diagram2cell(room2_window,master,302)
# /WINDOWS ASSEMBLING #

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,0.7)
#VIEW(hpc)

emptyChain = [0,1,2,3,4,5,6,7,8,9,10,11,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,47,48,49,50,
73,74,75,76,97,98,99,100,123,124,125,126,172,173,174,175,197,198,199,200,201,
140,141,142,143,144,145,146,147,148,149,150,151,
325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,
351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,
194,195,196,197,198,199,169,170,171,176,
79,81,83,85,87,104,106,108,110,112,130,132,134,136,138,180,205,229,255,280,284,259,233,183,185,187,189,191,241,
292,296,
41,43,45,66,90,94,70,68,92,
245,247,249,274,344,318,346,320,348,322,300,298,243,270,272,
288,290,237,239,
379,423,385,430,403,391,397,415,409,438,447,456,465
]
solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
DRAW((master[0],solidCV))
VIEW(hpc)

# EXPORTATION
exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
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

# EXPORTING
objExporter((verts, triangles), 'apartment.obj')


---
title: "Supported Formats"
url_path: developers_guide/supported-translations/supported-translation
product: "Model Derivative API"
surface: "model-derivative-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "supported-translations"
---
# Supported Translation Formats

The Model Derivate API enables you to translate over 60 different types of source file formats into derivatives (output files). Use the [GET formats](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint to return an up-to-date list of supported translations, which you can use to identify which types of derivatives are supported for each source file type.

Note that in addition to translating files into other formats, you can use this API to extract selected parts of a design and export the new set of geometries into OBJ format. For details about translating files see the [Translate a Source File](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/translate-to-obj/) walkthrough. For details about geometry extraction, see the [Extract Geometry from a Source File](https://aps.autodesk.com/en/docs/model-derivative/v2/tutorials/xtract-geometry-from-source-file/) tutorial.

The following table shows a list of supported source file formats and the derivative formats they can be translated to.

| Source Format | Derivative
Formats |
| --- | --- |
| 123DX | F3D |
| 3DM | F3D
SVF
SVF2
Thumbnail |
| 3DS | SVF
SVF2
Thumbnail |
| 3DXML | SVF
SVF2
Thumbnail |
| 3MF | F3D |
| A | SVF
SVF2
Thumbnail |
| ASM (Creo assembly files) | F3D
OBJ
SVF
SVF2
Thumbnail |
| ASM (Solid Edge assembly files) | F3D
SVF
SVF2
Thumbnail |
| ASM.d+$ | F3D
OBJ
SVF
SVF2
Thumbnail |
| ATFX | F3D |
| AXM | SVF
SVF2
Thumbnail |
| AXMF | Thumbnail |
| BDF | F3D |
| BRD | SVF
SVF2
Thumbnail |
| CATPART | F3D
SVF
SVF2
Thumbnail |
| CATPRODUCT | F3D
SVF
SVF2
Thumbnail |
| CGR | F3D
SVF
SVF2
Thumbnail |
| COLLABORATION | SVF
SVF2
Thumbnail |
| DAE | SVF
SVF2
Thumbnail |
| DDX | SVF
SVF2
Thumbnail |
| DDZ | SVF
SVF2
Thumbnail |
| DGK | SVF
SVF2
Thumbnail |
| DGN | SVF
SVF2
Thumbnail |
| DLV3 | SVF
SVF2
Thumbnail |
| DMT | SVF
SVF2
Thumbnail |
| DWF | SVF
SVF2
Thumbnail |
| DWFX | SVF
SVF2
Thumbnail |
| DWG | F3D
SVF
SVF2
Thumbnail |
| DWGX | Thumbnail |
| DWT | SVF
SVF2
Thumbnail |
| DXF | F3D
SVF
SVF2
Thumbnail |
| EMODEL | SVF
SVF2
Thumbnail |
| EMN | F3D |
| EXP | SVF
SVF2
Thumbnail |
| F2D | DWG
Thumbnail |
| F3D | DWG
FBX
IGES
OBJ
STEP
STL
SVF
SVF2
Thumbnail |
| FBRD | SVF
SVF2
Thumbnail |
| FBX | F3D
IGES
OBJ
STEP
STL
SVF
SVF2
Thumbnail |
| FLBR | Thumbnail |
| FPRJ | Thumbnail |
| FSCH | SVF
SVF2
Thumbnail |
| G | F3D
SVF
SVF2
Thumbnail |
| GBXML | SVF
SVF2
Thumbnail |
| GLB | SVF
SVF2
Thumbnail |
| GLTF | SVF
SVF2
Thumbnail |
| IAM | F3D
IGES
OBJ
STEP
STL
SVF
SVF2
Thumbnail |
| IDW | SVF
SVF2
Thumbnail |
| IFC | SVF
SVF2
Thumbnail |
| IFW | SVF
SVF2
Thumbnail |
| IGE | F3D
SVF
SVF2
Thumbnail |
| IGES | F3D
SVF
SVF2
Thumbnail |
| IGS | F3D
SVF
SVF2
Thumbnail |
| IPT | F3D
IGES
OBJ
STEP
STL
SVF
SVF2
Thumbnail |
| IWM | SVF
SVF2
Thumbnail |
| JT | F3D
SVF
SVF2
Thumbnail |
| MAX | SVF
SVF2
Thumbnail |
| MODEL | SVF
SVF2
Thumbnail |
| MPF | SVF
SVF2
Thumbnail |
| MSR | SVF
SVF2
Thumbnail |
| NEU | F3D
OBJ
SVF
SVF2
Thumbnail |
| NEU.d+$ | F3D
OBJ
SVF
SVF2
Thumbnail |
| NWC | SVF
SVF2
Thumbnail |
| NWD | SVF
SVF2
Thumbnail |
| OBJ | F3D
SVF
SVF2
Thumbnail |
| OSB | SVF
SVF2
Thumbnail |
| PAR | F3D
SVF
SVF2
Thumbnail |
| PCBDATA | F3D |
| PCBXML | F3D |
| PDF | SVF
SVF2
Thumbnail |
| PMLPRJ | SVF
SVF2
Thumbnail |
| PMLPRJZ | SVF
SVF2
Thumbnail |
| PRT | F3D
OBJ
SVF
SVF2
Thumbnail |
| PRT.d+$ | F3D
OBJ
SVF
SVF2
Thumbnail |
| PSM | F3D
SVF
SVF2
Thumbnail |
| PSMODEL | SVF
SVF2
Thumbnail |
| RVA | Thumbnail |
| RVM | SVF
SVF2
Thumbnail |
| RVT | Annotations
DWG
IFC
SVF
SVF2
Thumbnail |
| SAB | F3D
SVF
SVF2
Thumbnail |
| SAT | F3D
SVF
SVF2
Thumbnail |
| SCH | SVF
SVF2
Thumbnail |
| SESSION | SVF
SVF2
Thumbnail |
| SKP | F3D
SVF
SVF2
Thumbnail |
| SLDASM | F3D
OBJ
SVF
SVF2
Thumbnail |
| SLDDRW | DWG |
| SLDPRT | F3D
OBJ
SVF
SVF2
Thumbnail |
| SMB | F3D
OBJ
STEP
SVF
SVF2
Thumbnail |
| SMT | F3D
OBJ
STEP
SVF
SVF2
Thumbnail |
| STA | F3D |
| STE | F3D
SVF
SVF2
Thumbnail |
| STEP | F3D
OBJ
SVF
SVF2
Thumbnail |
| STL | F3D
SVF
SVF2
Thumbnail |
| STLA | SVF
SVF2
Thumbnail |
| STLB | SVF
SVF2
Thumbnail |
| STP | F3D
OBJ
SVF
SVF2
Thumbnail |
| STPZ | OBJ
SVF
SVF2
Thumbnail |
| TRITONMESH | SVF
SVF2
Thumbnail |
| USD | SVF
SVF2
Thumbnail |
| USDA | SVF
SVF2
Thumbnail |
| USDC | SVF
SVF2
Thumbnail |
| USDZ | SVF
SVF2
Thumbnail |
| VPB | SVF
SVF2
Thumbnail |
| VUE | SVF
SVF2
Thumbnail |
| WIRE | F3D
IGES
OBJ
STEP
STL
SVF
SVF2
Thumbnail |
| X_B | F3D
OBJ
SVF
SVF2
Thumbnail |
| X_T | F3D
OBJ
SVF
SVF2
Thumbnail |
| XAS | SVF
SVF2
Thumbnail |
| XML | F3D
SVF
SVF2
Thumbnail |
| XPR | SVF
SVF2
Thumbnail |
| ZIP | SVF
SVF2
Thumbnail |

**Note:** File formats that cannot be translated to OBJ can be made translatable by translating them to SVF2/SVF first. Once an SVF2/SVF derivative exists, the system can use it as an intermediate file format and translate the original format to OBJ.

We are constantly adding new file formats to the list. The list is **current as of 2025-11-03**. Use the [List Supported Formats operation](https://aps.autodesk.com/en/docs/model-derivative/v2/reference/http/informational/formats-GET/) to obtain an accurate and up-to-date list of supported formats.

---
원본 문서: https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/supported-translations/supported-translation

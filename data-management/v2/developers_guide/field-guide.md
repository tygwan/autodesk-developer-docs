---
title: "Field Guide"
url_path: developers_guide/field-guide
product: "Data Management API"
surface: "data-management-v2"
protocol: "Documentation"
document_kind: "guide"
api_version: "v2"
section: "developers_guide"
category: "field-guide"
---
# Field Guide

This section outlines the attributes and relationships for each of the base entity resources exposed by the API.

## Hub

A hub provides a common representation of a BIM 360 Team hub, a Fusion Team hub, a BIM 360 Docs account, or an A360 Personal hub. It contains an `extension` object with specific properties depending on the type of hub that it is.

| Attribute | Description |
| --- | --- |
| type | the type of entity; will always be `hubs` |
| id | unique identifier |
| _attributes_.name | name of the hub |
| _attributes_.extension | For more information, refer to the “Extension Types” section in [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics). |
| _relationships_.projects | references all project relationships for the hub |
| _links_.self | a reference to itself |

### Relationships

| `projects`1-to-many | projects contained within the hub |
| --- | --- |

### Example Object

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": {
    "type": "hubs",
    "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE",
    "attributes": {
      "extension": {
        "type": "hubs:autodesk.core:Hub",
        "version": "1.0",
        "schema": {
          "href": "/schema/v1/versions/hubs%3Aautodesk.core%3AHub-1.0"
        },
        "data": {}
      },
      "name": "my hub",
      "region": "US"
    },
    "relationships": {
      "projects": {
        "links": {
          "related": {
            "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
      }
    }
  },
  "links": {
    "self": {
      "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
    }
  }
}
```

### Schema

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "hub",
  "type": "object",
  "required": [
    "data",
    "jsonapi",
    "links"
  ],
  "properties": {
    "data": {
      "type": "object",
      "required": [
        "attributes",
        "id",
        "links",
        "relationships",
        "type"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "hubs"
          ]
        },
        "id": {
          "type": "string"
        },
        "attributes": {
          "type": "object",
          "required": [
            "extension",
            "name"
          ],
          "properties": {
            "extension": {
              "type": "object",
              "required": [
                "schema",
                "type",
                "version"
              ],
              "properties": {
                "type": {
                  "type": "string"
                },
                "version": {
                  "type": "string"
                },
                "schema": {
                  "type": "object",
                  "required": [
                    "href"
                  ],
                  "properties": {
                    "href": {
                      "type": "string"
                    }
                  }
                },
                "data": {
                  "type": "object"
                }
              }
            },
            "name": {
              "type": "string",
              "description": "displayable name of the hub"
            }
          }
        },
        "links": {
          "type": "object",
          "required": [
            "self"
          ],
          "properties": {
            "self": {
              "type": "object",
              "required": [
                "href"
              ],
              "properties": {
                "href": {
                  "type": "string"
                }
              }
            }
          }
        },
        "relationships": {
          "type": "object",
          "required": [
            "projects"
          ],
          "properties": {
            "projects": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "jsonapi": {
      "type": "object",
      "required": [
        "version"
      ],
      "properties": {
        "version": {
          "type": "string",
          "enum": [
            "1.0"
          ]
        }
      }
    },
    "links": {
      "type": "object",
      "required": [
        "self"
      ],
      "properties": {
        "self": {
          "type": "object",
          "required": [
            "href"
          ],
          "properties": {
            "href": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

## Project

A project represents the entry point to all the related information and data for BIM 360 Team projects, Fusion Team projects, BIM 360 Docs projects, and A360 Personal projects. A project always has a parent hub.

| Attribute | Description |
| --- | --- |
| type | the type of entity; will always be `projects` |
| id | unique identifier |
| _attributes_.name | name of the project |
| _attributes_.extension | For more information, refer to the “Extension Types” section in [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics). |
| _relationships_.hub | a reference to the parent hub |
| rootFolder | information about the root folder for the project |
| _links_.self | a reference to itself |

### Relationships

| `hub`1-to-1 | parent hub for this project |
| --- | --- |
| `rootFolder`1-to-1 | root folder for the project |

### Example Object

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": {
    "type": "projects",
    "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx",
    "attributes": {
      "extension": {
        "type": "projects:autodesk.core:Project",
        "version": "1.0",
        "schema": {
          "href": "/schema/v1/versions/projects%3Aautodesk.core%3AProject-1.0"
        },
        "data": {}
      },
      "name": "my project"
    },
    "relationships": {
      "hub": {
        "data": {
          "type": "hubs",
          "id": "a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE"
        },
        "links": {
          "related": {
            "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/hub"
          }
        }
      },
      "rootFolder": {
        "data": {
          "type": "folders",
          "id": "urn:adsk.wipprod:dm.folder:hC6k4hndRWaeIVhIjvHu8w"
        },
        "meta": {
          "link": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
          }
        }
      },
      "topFolders": {
        "links": {
          "related": {
            "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/topFolders"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx"
      }
    }
  },
  "links": {
    "self": {
      "href": "/project/v1/hubs/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjE/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx"
    }
  }
}
```

### Schema

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "project",
  "type": "object",
  "required": [
    "data",
    "jsonapi",
    "links"
  ],
  "properties": {
    "data": {
      "type": "object",
      "required": [
        "attributes",
        "id",
        "links",
        "relationships",
        "type"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "projects"
          ]
        },
        "id": {
          "type": "string"
        },
        "attributes": {
          "type": "object",
          "required": [
            "extension",
            "name"
          ],
          "properties": {
            "extension": {
              "type": "object",
              "required": [
                "schema",
                "type",
                "version"
              ],
              "properties": {
                "type": {
                  "type": "string"
                },
                "version": {
                  "type": "string"
                },
                "schema": {
                  "type": "object",
                  "required": [
                    "href"
                  ],
                  "properties": {
                    "href": {
                      "type": "string"
                    }
                  }
                },
                "data": {
                  "type": "object"
                }
              }
            },
            "name": {
              "type": "string",
              "description": "displayable name of the project"
            }
          }
        },
        "links": {
          "type": "object",
          "required": [
            "self"
          ],
          "properties": {
            "self": {
              "type": "object",
              "required": [
                "href"
              ],
              "properties": {
                "href": {
                  "type": "string"
                }
              }
            }
          }
        },
        "relationships": {
          "type": "object",
          "required": [
            "hub",
            "rootFolder"
          ],
          "properties": {
            "hub": {
              "type": "object",
              "required": [
                "data",
                "links"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "rootFolder": {
              "type": "object",
              "required": [
                "data",
                "meta"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "meta": {
                  "type": "object",
                  "required": [
                    "link"
                  ],
                  "properties": {
                    "link": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "topFolders": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "jsonapi": {
      "type": "object",
      "required": [
        "version"
      ],
      "properties": {
        "version": {
          "type": "string",
          "enum": [
            "1.0"
          ]
        }
      }
    },
    "links": {
      "type": "object",
      "required": [
        "self"
      ],
      "properties": {
        "self": {
          "type": "object",
          "required": [
            "href"
          ],
          "properties": {
            "href": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

## Folder

A folder represents a collection of items related to a project. Every project provides a single root folder inside of which all its related items are stored. A folder can contain other folder objects, as well as items.

| Attribute | Description |
| --- | --- |
| type | the type of entity; will always be `folders` |
| id | unique identifier |
| _attributes_.name | name of the folder |
| _attributes_.createTime | time the folder was created |
| _attributes_.createUserId | ID of the user who created the folder |
| _attributes_.createUserName | name of the user who created the folder |
| _attributes_.lastModifiedTime | time the folder was last modified |
| _attributes_.lastModifiedTimeRollup | time the folder hierarchy was last modified |
| _attributes_.lastModifiedUserId | ID of the user who last modified the folder |
| _attributes_.lastModifiedUserName | name of the user who last modified the folder |
| _attributes_.objectCount | sum of the number of items and sub-folders in this folder |
| _attributes_.extension | For more information, refer to the “Extension Types” section in [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics). |
| _links_.self | a reference to itself |

### Relationships

| `contents`1-to-many | the children of the folder: items and sub-folders |
| --- | --- |
| `parent`1-to-1 | the parent of the folder; can be omitted for root folders |
| `refs`1-to-many | custom relationships to other `folders`, `items`, and `versions` |

### Example Object

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": {
    "type": "folders",
    "id": "urn:adsk.wipprod:dm.folder:hC6k4hndRWaeIVhIjvHu8w",
    "attributes": {
      "extension": {
        "type": "folders:autodesk.bim360:Folders",
        "version": "1.0",
        "schema": {
          "href": "/schema/v1/versions/folders%3Aautodesk.bim360%3AFolders-1.0"
        },
        "data": {
          "allowedTypes": [
            "folders",
            "items:autodesk.bim360:Files",
            "items:autodesk.bim360:Documents",
            "items:autodesk.bim360:TitleBlocks"
          ],
          "visibleTypes": [
            "folders",
            "items:autodesk.bim360:Documents"
          ]
        }
      },
      "createTime": "2015-11-27T11:11:23.000Z",
      "createUserId": "BW9RM76WZBGL",
      "createUserName": "John Doe",
      "displayName": "Plans",
      "hidden": false,
      "lastModifiedTime": "2015-11-27T11:11:27.000Z",
      "lastModifiedUserId": "BW9RM76WZBGL",
      "lastModifiedUserName": "John Doe",
      "name": "Plans",
      "objectCount": 4
    },
    "relationships": {
      "links": {
        "links": {
          "self": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/relationships/links"
          }
        }
      },
      "contents": {
        "links": {
          "related": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/contents"
          }
        }
      },
      "parent": {
        "data": {
          "type": "folders",
          "id": "urn:adsk.wipprod:dm.folder:sdfedf8wefl"
        },
        "links": {
          "related": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/parent"
          }
        }
      },
      "refs": {
        "links": {
          "self": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/relationships/refs"
          },
          "related": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w/refs"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
      }
    }
  },
  "links": {
    "self": {
      "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/folders/urn%3Aadsk.wipprod%3Adm.folder%3AhC6k4hndRWaeIVhIjvHu8w"
    }
  }
}
```

### Schema

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "folder",
  "type": "object",
  "required": [
    "data",
    "jsonapi",
    "links"
  ],
  "properties": {
    "data": {
      "type": "object",
      "required": [
        "attributes",
        "id",
        "links",
        "relationships",
        "type"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "folders"
          ]
        },
        "id": {
          "type": "string"
        },
        "attributes": {
          "type": "object",
          "required": [
            "createTime",
            "createUserId",
            "createUserName",
            "displayName",
            "extension",
            "hidden",
            "lastModifiedTime",
            "lastModifiedUserId",
            "lastModifiedUserName",
            "name",
            "objectCount"
          ],
          "properties": {
            "createTime": {
              "type": "string",
              "format": "date-time"
            },
            "createUserId": {
              "type": "string"
            },
            "createUserName": {
              "type": "string"
            },
            "displayName": {
              "type": "string",
              "description": "displayable name of the folder"
            },
            "extension": {
              "type": "object",
              "required": [
                "schema",
                "type",
                "version"
              ],
              "properties": {
                "type": {
                  "type": "string"
                },
                "version": {
                  "type": "string"
                },
                "schema": {
                  "type": "object",
                  "required": [
                    "href"
                  ],
                  "properties": {
                    "href": {
                      "type": "string"
                    }
                  }
                },
                "data": {
                  "type": "object"
                }
              }
            },
            "hidden": {
              "type": "boolean"
            },
            "lastModifiedTime": {
              "type": "string",
              "format": "date-time"
            },
            "lastModifiedUserId": {
              "type": "string"
            },
            "lastModifiedUserName": {
              "type": "string"
            },
            "name": {
              "type": "string",
              "description": "filename used when synced to local disk"
            },
            "objectCount": {
              "type": "integer",
              "description": "number of contained sub-folders and items",
              "format": "int32"
            }
          }
        },
        "links": {
          "type": "object",
          "required": [
            "self"
          ],
          "properties": {
            "self": {
              "type": "object",
              "required": [
                "href"
              ],
              "properties": {
                "href": {
                  "type": "string"
                }
              }
            }
          }
        },
        "relationships": {
          "type": "object",
          "required": [
            "contents",
            "links",
            "refs"
          ],
          "properties": {
            "contents": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "links": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "required": [
                    "self"
                  ],
                  "properties": {
                    "self": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "parent": {
              "type": "object",
              "required": [
                "data",
                "links"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "refs": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "required": [
                    "related",
                    "self"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    },
                    "self": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "jsonapi": {
      "type": "object",
      "required": [
        "version"
      ],
      "properties": {
        "version": {
          "type": "string",
          "enum": [
            "1.0"
          ]
        }
      }
    },
    "links": {
      "type": "object",
      "required": [
        "self"
      ],
      "properties": {
        "self": {
          "type": "object",
          "required": [
            "href"
          ],
          "properties": {
            "href": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

## Item

An item represents a unit of data related to a project.

| Attribute | Description |
| --- | --- |
| type | the type of entity; will always be `items` |
| id | unique identifier |
| _attributes_.displayName | name of the item |
| _attributes_.createTime | time the item was created |
| _attributes_.createUserId | ID of the user who created the item |
| _attributes_.createUserName | name of the user who created the item |
| _attributes_.lastModifiedTime | time the item was last modified |
| _attributes_.lastModifiedUserId | ID of the user who last modified the item |
| _attributes_.lastModifiedUserName | name of the user who last modified the item |
| _attributes_.extension | For more information, refer to the “Extension Types” section in [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics). |
| _attributes_.reserved | a property which tells if the item is currently reserved/locked, if this attribute is `false` then `reservedTime`, `reservedUserId` and `reservedUserName` will not be present in the response body |
| _attributes_.reservedTime | time the item was reserved |
| _attributes_.reservedUserId | ID of the user who reserved the item |
| _attributes_.reservedUserName | name of the user who reserved the item |

### Relationships

| `parent`1-to-1 | the parent folder |
| --- | --- |
| `tip`1-to-1 | the most recent version of the item |
| `versions`1-to-many | all the version of the item |
| `refs`1-to-many | custom relationships to other `folders`, `items`, and `versions` |

### Example Object

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": {
    "type": "items",
    "id": "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
    "attributes": {
      "extension": {
        "type": "items:autodesk.bim360:Files",
        "version": "1.0",
        "schema": {
          "href": "/schema/v1/versions/items%3Aautodesk.bim360%3AFiles-1.0"
        },
        "data": {}
      },
      "createTime": "2015-11-27T11:11:23.000Z",
      "createUserId": "BW9RM76WZBGL",
      "createUserName": "John Doe",
      "displayName": "my file",
      "hidden": false,
      "lastModifiedTime": "2015-11-27T11:11:27.000Z",
      "lastModifiedUserId": "BW9RM76WZBGL",
      "lastModifiedUserName": "John Doe",
      "reserved": true,
      "reservedTime": "2015-11-27T11:11:25.000Z",
      "reservedUserId": "BW9RM76WZBGL",
      "reservedUserName": "John Doe"
    },
    "relationships": {
      "links": {
        "links": {
          "self": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w/relationships/links"
          }
        }
      },
      "parent": {
        "data": {
          "type": "folders",
          "id": "urn:adsk.wipprod:dm.folder:sdfedf8wefl"
        },
        "links": {
          "related": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w/parent"
          }
        }
      },
      "refs": {
        "links": {
          "self": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w/relationships/refs"
          },
          "related": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w/refs"
          }
        }
      },
      "tip": {
        "data": {
          "type": "versions",
          "id": "urn:adsk.wipprod:fs.file:vf.d34fdsg3g?version=2"
        },
        "links": {
          "related": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w/tip"
          }
        }
      },
      "versions": {
        "links": {
          "related": {
            "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w/versions"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w"
      }
    }
  },
  "links": {
    "self": {
      "href": "/data/v1/projects/a.ZXhhbXBsZTp3aXAxZnFhYXV0b2Rlc2sxNjEjMjAyMzAzMTcwMDAwMDAx/items/urn%3Aadsk.wipprod%3Adm.lineage%3AhC6k4hndRWaeIVhIjvHu8w"
    }
  },
  "included": [
    {
      "type": "versions",
      "id": "urn:adsk.wipprod:fs.file:vf.d34fdsg3g?version=2",
      "attributes": {
        "extension": {
          "type": "versions:autodesk.bim360:FileVersions",
          "version": "1.0",
          "schema": {
            "href": "/schema/v1/versions/versions%3Aautodesk.bim360%3AFileVersions-1.0"
          },
          "data": {
            "properties": {},
            "storageType": "OSS",
            "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.pdf",
            "tempUrn": null
          }
        },
        "createTime": "2016-04-01T11:09:03.000Z",
        "createUserId": "BW9RM76WZBGL",
        "createUserName": "John Doe",
        "displayName": "version-test.pdf",
        "lastModifiedTime": "2016-04-01T11:11:18.000Z",
        "lastModifiedUserId": "BW9RM76WZBGL",
        "lastModifiedUserName": "John Doe",
        "mimeType": "appplication/pdf",
        "name": "version-test.pdf",
        "versionNumber": 2
      },
      "relationships": {
        "links": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1/relationships/links"
            }
          }
        },
        "item": {
          "data": {
            "type": "items",
            "id": "urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g"
          },
          "links": {
            "related": {
              "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ab909RzMKR4mhc3O7UBY_8g"
            }
          }
        },
        "refs": {
          "links": {
            "self": {
              "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1/relationships/refs"
            },
            "related": {
              "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1/refs"
            }
          }
        },
        "storage": {
          "data": {
            "type": "objects",
            "id": "urn:adsk.objects:os.object:wip.dm.prod/3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.pdf"
          },
          "meta": {
            "link": {
              "href": "/oss/v2/buckets/wipbucket/objects/urn:adsk.objects:os.object:wip.dm.prod%2F3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.pdf"
            }
          }
        }
      },
      "links": {
        "self": {
          "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D1"
        }
      }
    }
  ]
}
```

### Schema

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "item",
  "type": "object",
  "required": [
    "data",
    "included",
    "jsonapi",
    "links"
  ],
  "properties": {
    "included": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "attributes",
          "id",
          "links",
          "relationships",
          "type"
        ],
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "versions"
            ]
          },
          "id": {
            "type": "string"
          },
          "attributes": {
            "type": "object",
            "required": [
              "createTime",
              "createUserId",
              "createUserName",
              "displayName",
              "extension",
              "lastModifiedTime",
              "lastModifiedUserId",
              "lastModifiedUserName",
              "name",
              "versionNumber"
            ],
            "properties": {
              "createTime": {
                "type": "string",
                "format": "date-time"
              },
              "createUserId": {
                "type": "string"
              },
              "createUserName": {
                "type": "string"
              },
              "displayName": {
                "type": "string",
                "description": "displayable name of the version"
              },
              "extension": {
                "type": "object",
                "required": [
                  "schema",
                  "type",
                  "version"
                ],
                "properties": {
                  "type": {
                    "type": "string"
                  },
                  "version": {
                    "type": "string"
                  },
                  "schema": {
                    "type": "object",
                    "required": [
                      "href"
                    ],
                    "properties": {
                      "href": {
                        "type": "string"
                      }
                    }
                  },
                  "data": {
                    "type": "object"
                  }
                }
              },
              "fileType": {
                "type": "string",
                "description": "file type, only present if this version represents a file"
              },
              "lastModifiedTime": {
                "type": "string",
                "format": "date-time"
              },
              "lastModifiedUserId": {
                "type": "string"
              },
              "lastModifiedUserName": {
                "type": "string"
              },
              "mimeType": {
                "type": "string",
                "description": "mimetype of the version`s content"
              },
              "name": {
                "type": "string",
                "description": "filename used when synced to local disk"
              },
              "storageSize": {
                "type": "integer",
                "description": "file size in bytes, only present if this version represents a file",
                "format": "int64"
              },
              "versionNumber": {
                "type": "integer",
                "description": "version number of this version",
                "format": "int32"
              }
            }
          },
          "links": {
            "type": "object",
            "required": [
              "self"
            ],
            "properties": {
              "self": {
                "type": "object",
                "required": [
                  "href"
                ],
                "properties": {
                  "href": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "relationships": {
            "type": "object",
            "required": [
              "item",
              "links",
              "refs"
            ],
            "properties": {
              "derivatives": {
                "type": "object",
                "required": [
                  "data",
                  "meta"
                ],
                "properties": {
                  "data": {
                    "type": "object",
                    "required": [
                      "id",
                      "type"
                    ],
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "resource type"
                      },
                      "id": {
                        "type": "string",
                        "description": "resource id"
                      }
                    }
                  },
                  "meta": {
                    "type": "object",
                    "required": [
                      "link"
                    ],
                    "properties": {
                      "link": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "downloadFormats": {
                "type": "object",
                "required": [
                  "links"
                ],
                "properties": {
                  "links": {
                    "type": "object",
                    "description": "provides a link to related resources",
                    "required": [
                      "related"
                    ],
                    "properties": {
                      "related": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "item": {
                "type": "object",
                "required": [
                  "data",
                  "links"
                ],
                "properties": {
                  "data": {
                    "type": "object",
                    "required": [
                      "id",
                      "type"
                    ],
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "resource type"
                      },
                      "id": {
                        "type": "string",
                        "description": "resource id"
                      }
                    }
                  },
                  "links": {
                    "type": "object",
                    "description": "provides a link to related resources",
                    "required": [
                      "related"
                    ],
                    "properties": {
                      "related": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "links": {
                "type": "object",
                "required": [
                  "links"
                ],
                "properties": {
                  "links": {
                    "type": "object",
                    "required": [
                      "self"
                    ],
                    "properties": {
                      "self": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "refs": {
                "type": "object",
                "required": [
                  "links"
                ],
                "properties": {
                  "links": {
                    "type": "object",
                    "required": [
                      "related",
                      "self"
                    ],
                    "properties": {
                      "related": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      },
                      "self": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "storage": {
                "type": "object",
                "required": [
                  "data",
                  "meta"
                ],
                "properties": {
                  "data": {
                    "type": "object",
                    "required": [
                      "id",
                      "type"
                    ],
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "resource type"
                      },
                      "id": {
                        "type": "string",
                        "description": "resource id"
                      }
                    }
                  },
                  "meta": {
                    "type": "object",
                    "required": [
                      "link"
                    ],
                    "properties": {
                      "link": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "thumbnails": {
                "type": "object",
                "required": [
                  "data",
                  "meta"
                ],
                "properties": {
                  "data": {
                    "type": "object",
                    "required": [
                      "id",
                      "type"
                    ],
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "resource type"
                      },
                      "id": {
                        "type": "string",
                        "description": "resource id"
                      }
                    }
                  },
                  "meta": {
                    "type": "object",
                    "required": [
                      "link"
                    ],
                    "properties": {
                      "link": {
                        "type": "object",
                        "required": [
                          "href"
                        ],
                        "properties": {
                          "href": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "data": {
      "type": "object",
      "required": [
        "attributes",
        "id",
        "links",
        "relationships",
        "type"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "items"
          ]
        },
        "id": {
          "type": "string"
        },
        "attributes": {
          "type": "object",
          "required": [
            "createTime",
            "createUserId",
            "createUserName",
            "displayName",
            "extension",
            "hidden",
            "lastModifiedTime",
            "lastModifiedUserId",
            "lastModifiedUserName",
            "reserved"
          ],
          "properties": {
            "createTime": {
              "type": "string",
              "format": "date-time"
            },
            "createUserId": {
              "type": "string"
            },
            "createUserName": {
              "type": "string"
            },
            "displayName": {
              "type": "string",
              "description": "displayable name of the item"
            },
            "extension": {
              "type": "object",
              "required": [
                "schema",
                "type",
                "version"
              ],
              "properties": {
                "type": {
                  "type": "string"
                },
                "version": {
                  "type": "string"
                },
                "schema": {
                  "type": "object",
                  "required": [
                    "href"
                  ],
                  "properties": {
                    "href": {
                      "type": "string"
                    }
                  }
                },
                "data": {
                  "type": "object"
                }
              }
            },
            "hidden": {
              "type": "boolean"
            },
            "lastModifiedTime": {
              "type": "string",
              "format": "date-time"
            },
            "lastModifiedUserId": {
              "type": "string"
            },
            "lastModifiedUserName": {
              "type": "string"
            },
            "reserved": {
              "type": "boolean"
            },
            "reservedTime": {
              "type": "string",
              "format": "date-time"
            },
            "reservedUserId": {
              "type": "string"
            },
            "reservedUserName": {
              "type": "string"
            }
          }
        },
        "links": {
          "type": "object",
          "required": [
            "self"
          ],
          "properties": {
            "self": {
              "type": "object",
              "required": [
                "href"
              ],
              "properties": {
                "href": {
                  "type": "string"
                }
              }
            }
          }
        },
        "relationships": {
          "type": "object",
          "required": [
            "links",
            "parent",
            "refs",
            "tip",
            "versions"
          ],
          "properties": {
            "links": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "required": [
                    "self"
                  ],
                  "properties": {
                    "self": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "parent": {
              "type": "object",
              "required": [
                "data",
                "links"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "refs": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "required": [
                    "related",
                    "self"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    },
                    "self": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "tip": {
              "type": "object",
              "required": [
                "data",
                "links"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "versions": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "jsonapi": {
      "type": "object",
      "required": [
        "version"
      ],
      "properties": {
        "version": {
          "type": "string",
          "enum": [
            "1.0"
          ]
        }
      }
    },
    "links": {
      "type": "object",
      "required": [
        "self"
      ],
      "properties": {
        "self": {
          "type": "object",
          "required": [
            "href"
          ],
          "properties": {
            "href": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

## Version

A version exposes information about a specific version of an item.

| Attribute | Description |
| --- | --- |
| type | the type of entity; will always be `versions` |
| id | unique identifier |
| _attributes_.name | filename used when synced to the local disk |
| _attributes_.displayName | name of the version |
| _attributes_.createTime | time the version was created |
| _attributes_.createUserId | ID of the user who created the version |
| _attributes_.createUserName | name of the user who created the version |
| _attributes_.lastModifiedTime | time the version was last modified |
| _attributes_.lastModifiedUserId | ID of the user who last modified the version |
| _attributes_.lastModifiedUserName | name of the user who last modified the version |
| _attributes_.versionNumber | current version |
| _attributes_.fileType | type of the file only if the item is a file |
| _attributes_.mimeType | MIME type of the item, if it is known |
| _attributes_.storageSize | size of the item only if the item is a file |
| _attributes_.extension | For more information, refer to the “Extension Types” section in [API Basics](https://aps.autodesk.com/en/docs/data/v2/overview/basics). |

### Relationships

| `item`1-to-1 | the item for which this is a version |
| --- | --- |
| `storage`1-to-1 | the contents of the file only if the item is a file |
| `derivatives`1-to-1 | link to any related derivative for this version |
| `thumbnails`1-to-1 | link to a thumbnail derivative for this version |
| `refs`1-to-many | custom relationships to other `folders`, `items`, and `versions` |

### Example Object

```
{
  "jsonapi": {
    "version": "1.0"
  },
  "data": {
    "type": "versions",
    "id": "urn:adsk.wipprod:fs.file:vf.b909RzMKR4mhc3O7UBY_8g?version=2",
    "attributes": {
      "extension": {
        "type": "versions:autodesk.bim360:FileVersions",
        "version": "1.0",
        "schema": {
          "href": "/schema/v1/versions/versions%3Aautodesk.bim360%3AFileVersions-1.0"
        },
        "data": {
          "properties": {},
          "storageType": "OSS",
          "storageUrn": "urn:adsk.objects:os.object:wip.dm.prod/9f8bdc3f-e29c-4ada-ab7b-bb8dfa821163.pdf",
          "tempUrn": null
        }
      },
      "createTime": "2016-04-01T11:12:35.000Z",
      "createUserId": "BW9RM76WZBGL",
      "createUserName": "John Doe",
      "displayName": "version-test.pdf",
      "lastModifiedTime": "2016-04-01T11:15:22.000Z",
      "lastModifiedUserId": "BW9RM76WZBGL",
      "lastModifiedUserName": "John Doe",
      "mimeType": "application/pdf",
      "name": "version-test.pdf",
      "versionNumber": 2
    },
    "relationships": {
      "links": {
        "links": {
          "self": {
            "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/relationships/links"
          }
        }
      },
      "derivatives": {
        "data": {
          "type": "derivatives",
          "id": "dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ"
        },
        "meta": {
          "link": {
            "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ/manifest"
          }
        }
      },
      "downloadFormats": {
        "links": {
          "related": {
            "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/downloadFormats"
          }
        }
      },
      "item": {
        "data": {
          "type": "items",
          "id": "urn:adsk.wipprod:dm.lineage:b909RzMKR4mhc3O7UBY_8g"
        },
        "links": {
          "related": {
            "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/items/urn%3Aadsk.wipprod%3Adm.lineage%3Ab909RzMKR4mhc3O7UBY_8g"
          }
        }
      },
      "refs": {
        "links": {
          "self": {
            "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/relationships/refs"
          },
          "related": {
            "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2/refs"
          }
        }
      },
      "storage": {
        "data": {
          "type": "objects",
          "id": "urn:adsk.objects:os.object:wip.dm.prod/9f8bdc3f-e29c-4ada-ab7b-bb8dfa821163.pdf"
        },
        "meta": {
          "link": {
            "href": "/oss/v2/buckets/wipbucket/objects/urn:adsk.objects:os.object:wip.dm.prod%2F9f8bdc3f-e29c-4ada-ab7b-bb8dfa821163.pdf"
          }
        }
      },
      "thumbnails": {
        "data": {
          "type": "thumbnails",
          "id": "dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ"
        },
        "meta": {
          "link": {
            "href": "/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcWE6ZnMuZmlsZTp2Zi50X3hodWwwYVFkbWhhN2FBaVBuXzlnP3ZlcnNpb249MQ/thumbnail"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2"
      }
    }
  },
  "links": {
    "self": {
      "href": "/data/v1/projects/b.6f8813fe-31a7-4440-bc63-d8ca97c856b4/versions/urn%3Aadsk.wipprod%3Afs.file%3Avf.b909RzMKR4mhc3O7UBY_8g%3Fversion%3D2"
    }
  }
}
```

### Schema

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "version",
  "type": "object",
  "required": [
    "data",
    "jsonapi",
    "links"
  ],
  "properties": {
    "data": {
      "type": "object",
      "required": [
        "attributes",
        "id",
        "links",
        "relationships",
        "type"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "versions"
          ]
        },
        "id": {
          "type": "string"
        },
        "attributes": {
          "type": "object",
          "required": [
            "createTime",
            "createUserId",
            "createUserName",
            "displayName",
            "extension",
            "lastModifiedTime",
            "lastModifiedUserId",
            "lastModifiedUserName",
            "name",
            "versionNumber"
          ],
          "properties": {
            "createTime": {
              "type": "string",
              "format": "date-time"
            },
            "createUserId": {
              "type": "string"
            },
            "createUserName": {
              "type": "string"
            },
            "displayName": {
              "type": "string",
              "description": "displayable name of the version"
            },
            "extension": {
              "type": "object",
              "required": [
                "schema",
                "type",
                "version"
              ],
              "properties": {
                "type": {
                  "type": "string"
                },
                "version": {
                  "type": "string"
                },
                "schema": {
                  "type": "object",
                  "required": [
                    "href"
                  ],
                  "properties": {
                    "href": {
                      "type": "string"
                    }
                  }
                },
                "data": {
                  "type": "object"
                }
              }
            },
            "fileType": {
              "type": "string",
              "description": "file type, only present if this version represents a file"
            },
            "lastModifiedTime": {
              "type": "string",
              "format": "date-time"
            },
            "lastModifiedUserId": {
              "type": "string"
            },
            "lastModifiedUserName": {
              "type": "string"
            },
            "mimeType": {
              "type": "string",
              "description": "mimetype of the version`s content"
            },
            "name": {
              "type": "string",
              "description": "filename used when synced to local disk"
            },
            "storageSize": {
              "type": "integer",
              "description": "file size in bytes, only present if this version represents a file",
              "format": "int64"
            },
            "versionNumber": {
              "type": "integer",
              "description": "version number of this version",
              "format": "int32"
            }
          }
        },
        "links": {
          "type": "object",
          "required": [
            "self"
          ],
          "properties": {
            "self": {
              "type": "object",
              "required": [
                "href"
              ],
              "properties": {
                "href": {
                  "type": "string"
                }
              }
            }
          }
        },
        "relationships": {
          "type": "object",
          "required": [
            "item",
            "links",
            "refs"
          ],
          "properties": {
            "derivatives": {
              "type": "object",
              "required": [
                "data",
                "meta"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "meta": {
                  "type": "object",
                  "required": [
                    "link"
                  ],
                  "properties": {
                    "link": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "downloadFormats": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "item": {
              "type": "object",
              "required": [
                "data",
                "links"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "links": {
                  "type": "object",
                  "description": "provides a link to related resources",
                  "required": [
                    "related"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "links": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "required": [
                    "self"
                  ],
                  "properties": {
                    "self": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "refs": {
              "type": "object",
              "required": [
                "links"
              ],
              "properties": {
                "links": {
                  "type": "object",
                  "required": [
                    "related",
                    "self"
                  ],
                  "properties": {
                    "related": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    },
                    "self": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "storage": {
              "type": "object",
              "required": [
                "data",
                "meta"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "meta": {
                  "type": "object",
                  "required": [
                    "link"
                  ],
                  "properties": {
                    "link": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            },
            "thumbnails": {
              "type": "object",
              "required": [
                "data",
                "meta"
              ],
              "properties": {
                "data": {
                  "type": "object",
                  "required": [
                    "id",
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "resource type"
                    },
                    "id": {
                      "type": "string",
                      "description": "resource id"
                    }
                  }
                },
                "meta": {
                  "type": "object",
                  "required": [
                    "link"
                  ],
                  "properties": {
                    "link": {
                      "type": "object",
                      "required": [
                        "href"
                      ],
                      "properties": {
                        "href": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "jsonapi": {
      "type": "object",
      "required": [
        "version"
      ],
      "properties": {
        "version": {
          "type": "string",
          "enum": [
            "1.0"
          ]
        }
      }
    },
    "links": {
      "type": "object",
      "required": [
        "self"
      ],
      "properties": {
        "self": {
          "type": "object",
          "required": [
            "href"
          ],
          "properties": {
            "href": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/data/v2/developers_guide/field-guide
